"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { db } from "@/app/firebaseConfig";
import { collection, getDocs, query, orderBy, DocumentData } from "firebase/firestore";
import { motion } from "framer-motion";

interface Blog {
  id: string;
  title: string;
  slug: string;
  image?: string;
  excerpt?: string;
  author?: string;
  date?: string;
  createdAt?: string | number;
}

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
        const snap = await getDocs(q);
        const blogData: Blog[] = snap.docs.map((doc: DocumentData) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[];
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-gray-600 text-lg animate-pulse">Loading blogs...</p>
      </div>
    );
  }

  return (
    <section className="px-4 mt-16 sm:px-6 lg:px-10 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
          Latest <span className="text-blue-700">Blogs</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Insights, tutorials, and updates from Bytesolve.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/blogs/${blog.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Blog Image */}
                {blog.image && (
                  <div className="relative w-full h-56">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h2 className="text-xl font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-700 transition">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="pt-3 text-sm text-gray-500 flex justify-between items-center">
                    <span>
                      By <strong>{blog.author || "Admin"}</strong>
                    </span>
                    <span>
                      {blog.date
                        ? new Date(blog.date).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : ""}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg col-span-full">
            No blogs available at the moment.
          </p>
        )}
      </div>
    </section>
  );
}
