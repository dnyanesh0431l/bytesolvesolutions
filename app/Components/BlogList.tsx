"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  slug: string;
  image?: string;
  excerpt?: string;
  author?: string;
  category?: string;
  date?: string;
}

export default function BlogGrid({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <Link
            href={`/blogs/${blog.slug}`}
            className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
          >
            {blog.image && (
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            )}
            <div className="p-5 sm:p-6 space-y-3">
              <h2 className="text-xl font-semibold line-clamp-2 group-hover:underline text-gray-800">
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
      ))}
    </div>
  );
}
