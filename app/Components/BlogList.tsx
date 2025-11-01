"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { db } from "@/app/firebaseConfig";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  where,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { motion } from "framer-motion";

const PRIMARY = "#1e3a8a";
const ACCENT = "#b30101";
const BG = "#ffffff";
// const YELLOW = "#fbbf24";
const LIGHT_GRAY = "#f8fafc";
const DARK_GRAY = "#334155";

interface Blog {
  id: string;
  title: string;
  slug: string;
  image?: string;
  excerpt?: string;
  author?: string;
  category?: string;
  date?: string;
  createdAt?: string | number;
}

const PAGE_SIZE = 6;

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [fetchingMore, setFetchingMore] = useState(false);
  const [lastDoc, setLastDoc] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [hasMore, setHasMore] = useState(true);

  // 🔹 Fetch All Categories Once
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const snap = await getDocs(collection(db, "blogs"));
        const allCats = snap.docs
          .map((doc) => doc.data().category)
          .filter((c): c is string => !!c);
        const uniqueCats = Array.from(new Set(allCats));
        setCategories(["All", ...uniqueCats]);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // 🔹 Fetch Blogs (Initial + Category change)
  const fetchBlogs = async (category = "All") => {
    setLoading(true);
    try {
      const baseQuery =
        category === "All"
          ? query(collection(db, "blogs"), orderBy("createdAt", "desc"), limit(PAGE_SIZE))
          : query(
              collection(db, "blogs"),
              where("category", "==", category),
              orderBy("createdAt", "desc"),
              limit(PAGE_SIZE)
            );

      const snap = await getDocs(baseQuery);
      const data: Blog[] = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Blog[];

      setBlogs(data);
      setLastDoc(snap.docs[snap.docs.length - 1] || null);
      setHasMore(snap.docs.length === PAGE_SIZE);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Load More
  const loadMore = async () => {
    if (!lastDoc || fetchingMore) return;
    setFetchingMore(true);
    try {
      const baseQuery =
        selectedCategory === "All"
          ? query(
              collection(db, "blogs"),
              orderBy("createdAt", "desc"),
              startAfter(lastDoc),
              limit(PAGE_SIZE)
            )
          : query(
              collection(db, "blogs"),
              where("category", "==", selectedCategory),
              orderBy("createdAt", "desc"),
              startAfter(lastDoc),
              limit(PAGE_SIZE)
            );

      const snap = await getDocs(baseQuery);
      const newBlogs: Blog[] = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Blog[];

      setBlogs((prev) => [...prev, ...newBlogs]);
      setLastDoc(snap.docs[snap.docs.length - 1] || null);
      setHasMore(snap.docs.length === PAGE_SIZE);
    } catch (err) {
      console.error("Error loading more blogs:", err);
    } finally {
      setFetchingMore(false);
    }
  };

  useEffect(() => {
    fetchBlogs(selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      className="px-4 sm:px-6 mt-12 lg:px-10 py-12 max-w-7xl mx-auto"
      style={{ backgroundColor: LIGHT_GRAY }}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2" style={{ color: DARK_GRAY }}>
          Latest <span style={{ color: PRIMARY }}>Blogs</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Insights, tutorials, and updates from <span style={{ color: ACCENT }}>ByteSolve</span>.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
              selectedCategory === cat
                ? "shadow-lg text-white"
                : "hover:shadow-sm"
            }`}
            style={{
              backgroundColor:
                selectedCategory === cat ? PRIMARY : BG,
              color: selectedCategory === cat ? "#fff" : DARK_GRAY,
              borderColor:
                selectedCategory === cat ? PRIMARY : "#d1d5db",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-200 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : blogs.length > 0 ? (
        <>
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
                    <h2
                      className="text-xl font-semibold line-clamp-2 group-hover:underline"
                      style={{ color: DARK_GRAY }}
                    >
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

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center mt-10">
              <button
                onClick={loadMore}
                disabled={fetchingMore}
                className="px-6 py-3 rounded-full font-medium shadow-md transition disabled:opacity-50"
                style={{
                  backgroundColor: PRIMARY,
                  color: "#fff",
                }}
              >
                {fetchingMore ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-6">
          No blogs available in this category.
        </p>
      )}
    </section>
  );
}
