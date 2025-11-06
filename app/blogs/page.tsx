import BlogGrid from "@/app/Components/BlogList";
import { db } from "@/app/firebaseConfig";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export const metadata = {
  title: "Blogs | Bytesolve Solutions",
  description:
    "Read Bytesolve Solutions' latest insights on business growth, marketing, and salon success. Updated weekly with expert strategies for 2025.",
  alternates: { canonical: "https://bytesolvesolutions.in/blogs" },
};

export const revalidate = 300; // Rebuild every 5 min (Incremental Static Regeneration)

export default async function BlogsPage() {
  try {
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);

    const blogs = snap.docs.map((doc) => {
      const d = doc.data();
      return {
        id: doc.id,
        title: d.title || "Untitled",
        slug: d.slug,
        image: d.image || "/default-blog.jpg",
        excerpt: d.excerpt || "",
        author: d.author || "Bytesolve Team",
        category: d.category || "General",
        date: d.date || null,
        createdAt:
          d.createdAt && typeof d.createdAt.toDate === "function"
            ? d.createdAt.toDate().toISOString()
            : null,
        updatedAt:
          d.updatedAt && typeof d.updatedAt.toDate === "function"
            ? d.updatedAt.toDate().toISOString()
            : null,
      };
    });

    const safeBlogs = JSON.parse(JSON.stringify(blogs));

    return (
      <section className="px-4 sm:px-6 mt-16 lg:px-10 py-12 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-gray-800">
            Latest <span className="text-blue-900">Blogs</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Insights, tutorials, and updates from{" "}
            <span className="text-red-700 font-semibold">Bytesolve</span>.
          </p>
        </div>

        {safeBlogs.length > 0 ? (
          <BlogGrid blogs={safeBlogs} />
        ) : (
          <p className="text-center text-gray-500 text-lg mt-6">
            No blogs available right now.
          </p>
        )}
      </section>
    );
  } catch (error) {
    console.error("Error loading blogs:", error);
    return (
      <p className="text-center text-gray-500 mt-10">
        Failed to load blogs. Please try again later.
      </p>
    );
  }
}
