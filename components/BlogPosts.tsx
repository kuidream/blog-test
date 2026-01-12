"use client";

import { useState } from "react";

const categories = ["All", "Quantum Computing", "AI Ethics", "Data Exploration", "Neurotechnology", "Machine Learning"];

const blogPosts = [
  {
    id: 1,
    author: "John Thomsen",
    date: "October 15, 2023",
    title: "The Quantum Loop in Computing",
    description: "Quantum computing is rapidly advancing, promising to revolutionize various industries. This article explores the fundamental principles...",
    likes: 1500,
    views: 1200,
    comments: 1200,
    category: "Quantum Computing",
  },
  {
    id: 2,
    author: "Sarah Davies",
    date: "November 12, 2023",
    title: "The Ethical Dilemmas of AI",
    description: "As AI becomes more integrated into our daily lives, ethical considerations become paramount. This article delves into the moral...",
    likes: 1300,
    views: 1100,
    comments: 1100,
    category: "AI Ethics",
  },
  {
    id: 3,
    author: "Andrew K.",
    date: "December 10, 2023",
    title: "The Metaverse Exploration Challenge",
    description: "The metaverse is a rapidly evolving digital frontier, offering immersive experiences and new opportunities. This article explores...",
    likes: 1100,
    views: 1100,
    comments: 1100,
    category: "Data Exploration",
  },
];

export default function BlogPosts() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="w-full px-6 py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-primary-yellow mb-2">Alternatively, browse from</p>
            <h2 className="text-4xl md:text-5xl font-bold">Explore Future Tech's In-Depth Blog Posts</h2>
          </div>
          <button className="bg-primary-yellow text-primary-dark px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
            View All Blogs
            <span className="text-xl">→</span>
          </button>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary-yellow text-primary-dark"
                  : "bg-primary-dark-gray text-gray-300 hover:bg-primary-light-gray"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-primary-dark-gray p-8 rounded-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-primary-light-gray flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-semibold">{post.author}</span>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{post.description}</p>
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center gap-2 text-primary-yellow">
                      <span className="text-white">Views:</span>
                      <span className="text-white">{(post.views / 1000).toFixed(1)}k</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-yellow">
                      <span className="text-white">Likes:</span>
                      <span className="text-white">{(post.likes / 1000).toFixed(1)}k</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-yellow">
                      <span className="text-white">Comments:</span>
                      <span className="text-white">{(post.comments / 1000).toFixed(1)}k</span>
                    </div>
                  </div>
                  <button className="bg-primary-yellow text-primary-dark px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                    Read Story
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

