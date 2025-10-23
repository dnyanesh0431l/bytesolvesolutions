export async function getBlogs() {
  // future: connect with Firestore or CMS
  return [
    {
      id: "1",
      title: "How Technology Is Changing Restaurants",
      slug: "tech-changing-restaurants",
      image: "https://source.unsplash.com/800x600/?restaurant,technology",
      description:
        "Explore how modern tech like AI and POS systems are revolutionizing restaurant management.",
      category: "Technology",
      date: "2025-10-20",
    },
    {
      id: "2",
      title: "Top 5 Business Lessons from Successful Cafes",
      slug: "business-lessons-cafes",
      image: "https://source.unsplash.com/800x600/?coffee,business",
      description:
        "Learn what makes small cafes thrive — from branding to customer loyalty strategies.",
      category: "Business",
      date: "2025-10-18",
    },
    {
      id: "3",
      title: "The Secret of Perfect Pasta",
      slug: "perfect-pasta-secret",
      image: "https://source.unsplash.com/800x600/?food,pasta",
      description:
        "A culinary deep dive into how Italian chefs make pasta irresistible.",
      category: "Food",
      date: "2025-10-15",
    },
  ];
}
