import { db } from "@/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

// This route dynamically generates sitemap.xml for Google
export async function GET() {
  try {
    // 1️⃣ Fetch only published blogs from Firestore
    const q = query(
      collection(db, "blogs"),
      where("status", "==", "published")
    );
    const snapshot = await getDocs(q);

    const blogs = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      if (data.slug) {
        blogs.push({
          loc: `https://bytesolvesolutions.in/blogs/${data.slug}`,
          lastmod:
            data.updatedAt?.toDate?.().toISOString() ||
            new Date().toISOString(),
        });
      }
    });

    // 2️⃣ Add your static site pages manually
    const staticPages = [
      {
        loc: "https://bytesolvesolutions.in/",
        lastmod: new Date().toISOString(),
      },
      {
        loc: "https://bytesolvesolutions.in/about",
        lastmod: new Date().toISOString(),
      },
      {
        loc: "https://bytesolvesolutions.in/contact",
        lastmod: new Date().toISOString(),
      },
      {
        loc: "https://bytesolvesolutions.in/services",
        lastmod: new Date().toISOString(),
      },
      {
        loc: "https://bytesolvesolutions.in/products",
        lastmod: new Date().toISOString(),
      },
      {
        loc: "https://bytesolvesolutions.in/blogs",
        lastmod: new Date().toISOString(),
      },
    ];

    // 3️⃣ Merge static + dynamic pages
    const allUrls = [...staticPages, ...blogs];

    // 4️⃣ Generate XML format
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls
        .map(
          (url) => `
        <url>
          <loc>${url.loc}</loc>
          <lastmod>${url.lastmod}</lastmod>
        </url>`
        )
        .join("")}
    </urlset>`;

    // 5️⃣ Return response
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Error generating sitemap", { status: 500 });
  }
}
