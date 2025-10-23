import { db } from "@/app/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

/* ---------------------- 🔹 Type Definitions ---------------------- */
interface BlogData {
  title: string;
  slug: string;
  image?: string;
  excerpt?: string;
  description?: string;
  content?: string;
  author?: string;
  date?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    canonicalUrl?: string;
    ogImage?: string;
  };
}

/* ---------------------- 🔹 Step 1: Static Params ---------------------- */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const snapshot = await getDocs(collection(db, "blogs"));
    return snapshot.docs
      .map((doc) => doc.data() as BlogData)
      .filter((b) => !!b.slug)
      .map((b) => ({ slug: b.slug }));
  } catch (err) {
    console.error("Error generating static params:", err);
    return [];
  }
}

/* ---------------------- 🔹 Step 2: Metadata ---------------------- */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const baseUrl = "https://bytesolvesolutions.in";

  try {
    const snapshot = await getDocs(collection(db, "blogs"));
    const matchedDoc = snapshot.docs.find(
      (d) => (d.data() as BlogData).slug === slug
    );

    if (!matchedDoc) {
      return {
        title: "Blog Not Found | Bytesolve Solutions",
        description: "The requested blog post could not be found.",
      };
    }

    const data = matchedDoc.data() as BlogData;
    const seo = data.seo || {};

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: data.title,
      description: seo.metaDescription || data.excerpt || data.description,
      image: seo.ogImage || data.image || `${baseUrl}/default-blog.jpg`,
      author: {
        "@type": "Person",
        name: data.author || "Bytesolve Team",
      },
      publisher: {
        "@type": "Organization",
        name: "Bytesolve Solutions",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.png`,
        },
      },
      datePublished: data.date,
      mainEntityOfPage: `${baseUrl}/blogs/${slug}`,
    };

    return {
      title: seo.metaTitle || `${data.title} | Bytesolve Solutions`,
      description:
        seo.metaDescription || data.excerpt || data.description?.slice(0, 160),
      keywords: seo.keywords,
      alternates: {
        canonical: seo.canonicalUrl || `${baseUrl}/blogs/${slug}`,
      },
      openGraph: {
        title: seo.metaTitle || data.title,
        description: seo.metaDescription || data.excerpt,
        url: seo.canonicalUrl || `${baseUrl}/blogs/${slug}`,
        type: "article",
        images: [
          {
            url: seo.ogImage || data.image || "/default-blog.jpg",
            width: 1200,
            height: 630,
            alt: data.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: seo.metaTitle || data.title,
        description: seo.metaDescription || data.excerpt,
        images: [seo.ogImage || data.image || "/default-blog.jpg"],
      },
      other: {
        "script:ld+json": JSON.stringify(structuredData),
      },
    };
  } catch (err) {
    console.error("Error generating metadata:", err);
    return {
      title: "Error Loading Blog | Bytesolve Solutions",
      description: "An error occurred while fetching blog details.",
    };
  }
}

/* ---------------------- 🔹 Step 3: Blog Page ---------------------- */
export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  try {
    const snapshot = await getDocs(collection(db, "blogs"));
    const matchedDoc = snapshot.docs.find(
      (d) => (d.data() as BlogData).slug === slug
    );

    if (!matchedDoc) return notFound();

    const blog = matchedDoc.data() as BlogData;

    return (
      <section className="mt-16 px-4 sm:px-6 lg:px-8 w-full flex justify-center">
        <article className="w-full max-w-6xl bg-white rounded-2xl shadow-md p-6 sm:p-8 lg:p-12 space-y-8">
          {/* Blog Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center leading-tight">
            {blog.title}
          </h1>

          {/* Featured Image */}
          {blog.image && (
            <div className="flex justify-center">
              <Image
                src={blog.image}
                alt={blog.title}
                width={1200}
                height={630}
                priority
                className="rounded-2xl w-full max-h-[550px] object-cover shadow-lg"
              />
            </div>
          )}

          {/* Blog Content */}
          {blog.content && (
            <div
              className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          )}

          {/* Author + Date */}
          <div className="text-center text-sm sm:text-base text-gray-500 border-t pt-4">
            By <strong>{blog.author || "Bytesolve Team"}</strong> •{" "}
            {blog.date
              ? new Date(blog.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "No date available"}
          </div>
        </article>
      </section>
    );
  } catch (err) {
    console.error("Error loading blog:", err);
    return notFound();
  }
}

/* ---------------------- 🔹 Step 4: Revalidation ---------------------- */
export const revalidate = 300;
