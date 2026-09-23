import React, { useState } from "react";
import { FaArrowRight, FaRegCalendarAlt, FaUser, FaRegClock } from "react-icons/fa";

const BLOG_CATEGORIES = ["All", "Research Summaries", "Fieldwork Notes", "Policy & Opinion", "Data Insights"];

const BLOG_POSTS = [
  {
    id: 1,
    category: "Research Summaries",
    tagColor: "#c8102e",
    title: "Understanding the Rising Burden of Non-Communicable Diseases in Rural Nepal",
    excerpt: "An in-depth look at recent community screenings, identifying lifestyle risk factors, hypertension trends, and strategic prevention models across high-altitude regions.",
    author: "Dr. Alok Shrestha",
    date: "June 14, 2026",
    readTime: "6 min read",
    featured: true,
    href: "#blog-ncd-burden",
  },
  {
    id: 2,
    category: "Fieldwork Notes",
    tagColor: "#c9a227",
    title: "Navigating Logistics & Data Collection in Upper Mustang",
    excerpt: "Behind the scenes with the NIRI field team studying elderly healthcare access, nutritional indices, and localized challenges in Lomanthang.",
    author: "Pooja Gurung",
    date: "May 28, 2026",
    readTime: "4 min read",
    featured: false,
    href: "#blog-mustang-fieldwork",
  },
  {
    id: 3,
    category: "Data Insights",
    tagColor: "#071744",
    title: "Why Longitudinal Studies Matter for Public Health Policy",
    excerpt: "Examining how framework initiatives like the Nepal Family Cohort Study (NeFCoS) provide long-term predictive data vital for national healthcare planning.",
    author: "Research Analytics Team",
    date: "May 12, 2026",
    readTime: "5 min read",
    featured: false,
    href: "#blog-longitudinal-data",
  },
  {
    id: 4,
    category: "Policy & Opinion",
    tagColor: "#2D6A4F",
    title: "Bridging the Gap Between Academic Research and Grassroots Policy",
    excerpt: "How local research institutes can effectively translate empirical scientific findings into actionable legislative guidelines for provincial health ministries.",
    author: "NIRI Editorial Board",
    date: "April 19, 2026",
    readTime: "7 min read",
    featured: false,
    href: "#blog-research-to-policy",
  },
];

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  const featuredPost = BLOG_POSTS.find(post => post.featured);

  return (
    <section
      id="blog-insights"
      className="bg-[#f7f4ec] px-5 sm:px-6 md:px-12 py-14 sm:py-20 md:py-28"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
      `}</style>

      <div className="max-w-[1400px] mx-auto">
        
        {/* Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pb-8 border-b border-[#14213d]/10">
          <div className="max-w-2xl">
            <span
              className="inline-block text-[11px] tracking-[0.3em] text-[#c8102e] mb-4 font-semibold uppercase"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              INSIGHTS, ARTICLES & ESSAYS
            </span>

            <h2
              className="text-[#14213d] text-[28px] sm:text-[38px] md:text-[44px] leading-[1.15] mb-4"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
            >
              Perspective & Research Notes
            </h2>

            <p className="text-[#14213d]/70 text-[15px] sm:text-base leading-relaxed">
              Read expert essays, deep-dive field notes, and analytical summaries written 
              by NIRI researchers and public health collaborators.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs tracking-wider font-mono uppercase transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-[#14213d] text-white shadow-sm"
                    : "bg-white text-[#14213d]/70 border border-[#14213d]/10 hover:border-[#14213d]/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Flagship Article (Shown only when 'All' is selected) */}
        {activeCategory === "All" && featuredPost && (
          <div className="mb-12 bg-white border border-[#14213d]/10 p-6 sm:p-10 lg:p-12 shadow-sm hover:border-[#14213d]/30 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-[10px] tracking-[0.2em] px-2.5 py-1 bg-[#c8102e]/10 text-[#c8102e] font-mono uppercase font-semibold rounded"
                    >
                      Featured Essay
                    </span>
                    <span className="text-xs text-[#14213d]/60 font-mono flex items-center gap-1.5">
                      <FaRegCalendarAlt className="text-[#c9a227]" /> {featuredPost.date}
                    </span>
                  </div>

                  <h3
                    className="text-[#14213d] text-2xl sm:text-3xl md:text-4xl leading-tight mb-4 hover:text-[#c8102e] transition-colors"
                    style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
                  >
                    <a href={featuredPost.href}>{featuredPost.title}</a>
                  </h3>

                  <p className="text-[#14213d]/70 text-sm sm:text-base leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#14213d]/10 text-xs text-[#14213d]/70 font-mono">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <FaUser className="text-[#c8102e]" size={11} /> {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaRegClock className="text-[#071744]" size={11} /> {featuredPost.readTime}
                    </span>
                  </div>

                  <a
                    href={featuredPost.href}
                    className="inline-flex items-center gap-2 font-semibold text-[#14213d] hover:text-[#c8102e] transition-colors uppercase tracking-wider"
                  >
                    Read Full Article <FaArrowRight size={11} />
                  </a>
                </div>
              </div>

              {/* Decorative graphic block for the featured post */}
              <div className="lg:col-span-4 bg-[#f7f4ec] p-8 border border-[#14213d]/10 flex flex-col justify-center items-center text-center">
                <span className="text-[11px] font-mono text-[#c8102e] tracking-[0.2em] mb-2 uppercase">NIRI PERSPECTIVES</span>
                <p className="text-sm font-serif italic text-[#14213d]/80 mb-4">
                  "Translating empirical evidence into structured public narratives."
                </p>
                <span className="w-12 h-0.5 bg-[#c9a227]"></span>
              </div>
            </div>
          </div>
        )}

        {/* Regular Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between bg-white p-6 sm:p-8 border border-[#14213d]/10
                         hover:border-[#14213d]/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#14213d]/10">
                  <span
                    className="text-[10px] sm:text-[11px] tracking-[0.18em] font-medium uppercase font-mono"
                    style={{ color: post.tagColor }}
                  >
                    {post.category}
                  </span>
                  <span className="text-[11px] text-[#14213d]/60 font-mono">
                    {post.readTime}
                  </span>
                </div>

                <h3
                  className="text-[#14213d] text-lg sm:text-xl leading-snug mb-3 group-hover:text-[#c8102e] transition-colors"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600 }}
                >
                  <a href={post.href}>{post.title}</a>
                </h3>

                <p className="text-[#14213d]/65 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#14213d]/5 flex items-center justify-between text-xs font-mono text-[#14213d]/70">
                <span>{post.date}</span>
                <a
                  href={post.href}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#14213d] group-hover:text-[#c8102e] transition-colors uppercase"
                >
                  Read <FaArrowRight size={10} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;