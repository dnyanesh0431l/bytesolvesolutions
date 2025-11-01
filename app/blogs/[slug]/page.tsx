
import { db } from "@/app/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

/* ---------------------- 🔹 Type ---------------------- */
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
  const snapshot = await getDocs(collection(db, "blogs"));
  return snapshot.docs
    .map((doc) => doc.data() as BlogData)
    .filter((b) => !!b.slug)
    .map((b) => ({ slug: b.slug }));
}

/* ---------------------- 🔹 Step 2: Metadata ---------------------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const baseUrl = "https://bytesolvesolutions.in";

  const snapshot = await getDocs(collection(db, "blogs"));
  const matchedDoc = snapshot.docs.find((d) => (d.data() as BlogData).slug === slug);

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
    author: { "@type": "Person", name: data.author || "Bytesolve Team" },
    publisher: {
      "@type": "Organization",
      name: "Bytesolve Solutions",
      logo: { "@type": "ImageObject", url: `${baseUrl}/logo.png` },
    },
    datePublished: data.date,
    mainEntityOfPage: `${baseUrl}/blogs/${slug}`,
  };

  return {
    title: seo.metaTitle || `${data.title} | Bytesolve Solutions`,
    description: seo.metaDescription || data.excerpt || data.description?.slice(0, 160),
    keywords: seo.keywords,
    alternates: { canonical: seo.canonicalUrl || `${baseUrl}/blogs/${slug}` },
    openGraph: {
      title: seo.metaTitle || data.title,
      description: seo.metaDescription || data.excerpt,
      url: seo.canonicalUrl || `${baseUrl}/blogs/${slug}`,
      type: "article",
      images: [{ url: seo.ogImage || data.image || "/default-blog.jpg", width: 1200, height: 630, alt: data.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.metaTitle || data.title,
      description: seo.metaDescription || data.excerpt,
      images: [seo.ogImage || data.image || "/default-blog.jpg"],
    },
    other: { "script:ld+json": JSON.stringify(structuredData) },
  };
}

/* ---------------------- 🔹 Step 3: Blog Page ---------------------- */
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const snapshot = await getDocs(collection(db, "blogs"));
  const matchedDoc = snapshot.docs.find((d) => (d.data() as BlogData).slug === slug);

  if (!matchedDoc) return notFound();

  const blog = matchedDoc.data() as BlogData;

  return (
    <section className="mt-20 px-4 sm:px-6 mb-4 lg:px-8 w-full flex justify-center bg-light-gray">
      <article className="w-full max-w-5xl mb-8 p-6 sm:p-8 lg:p-12 space-y-8 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-8 px-4 py-6">
          {/* Left Side - Title */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-gray-800">
              {blog.title}
            </h1>
          </div>

          {/* Right Side - Image */}
          {blog.image && (
            <div className="flex-1 flex justify-center lg:justify-end">
              <Image
                src={blog.image}
                alt={blog.title}
                width={1200}
                height={630}
                priority
                className="rounded-2xl w-full max-w-[600px] max-h-[400px] object-cover shadow-lg"
              />
            </div>
          )}
        </div>

        {/* Content */}
        {blog.content && (
          <div
            className="blog-content prose prose-lg max-w-none leading-relaxed text-dark-gray"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        )}

        {/* Author + Date */}
        <div className="text-center text-sm sm:text-base border-t pt-4 text-dark-gray">
          By <strong className="text-primary">{blog.author || "Bytesolve Team"}</strong> •{" "}
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
}

/* ---------------------- 🔹 ISR ---------------------- */
export const revalidate = 300; // 5 minutes
