import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — RobotixAcademy",
};

const galleryItems = [
  { emoji: "🤖", title: "Line Follower Robot", tag: "Robotics", color: "bg-brand-purple-light" },
  { emoji: "🧠", title: "AI Face Detection Project", tag: "AI Project", color: "bg-orange-50" },
  { emoji: "🚗", title: "Obstacle Avoiding Car", tag: "Robotics", color: "bg-teal-50" },
  { emoji: "🎨", title: "Drawing Robot Art", tag: "Creative", color: "bg-yellow-50" },
  { emoji: "🏆", title: "District Robotics Championship", tag: "Competition", color: "bg-pink-50" },
  { emoji: "🌱", title: "Little Explorers First Build", tag: "Beginner", color: "bg-green-50" },
  { emoji: "🎮", title: "AI Game Built by Kids", tag: "AI Project", color: "bg-indigo-50" },
  { emoji: "🚁", title: "Mini Drone Assembly", tag: "Advanced", color: "bg-red-50" },
  { emoji: "💡", title: "Smart Home Prototype", tag: "IoT", color: "bg-brand-purple-light" },
  { emoji: "🎤", title: "Voice Assistant Project", tag: "AI Project", color: "bg-orange-50" },
  { emoji: "📸", title: "Annual Robot Showcase 2025", tag: "Event", color: "bg-teal-50" },
  { emoji: "🌟", title: "Holiday Camp Final Day", tag: "Event", color: "bg-yellow-50" },
];

const tags = ["All", "Robotics", "AI Project", "Creative", "Competition", "Beginner", "Advanced", "IoT", "Event"];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-yellow to-brand-orange text-brand-navy py-20 text-center">
        <h1 className="text-5xl font-black mb-4">Our Gallery 📸</h1>
        <p className="text-brand-navy/70 text-lg max-w-xl mx-auto">
          Real projects built by real kids. Every robot, every project, every
          smile — captured here!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-4 py-2 rounded-full text-sm font-bold cursor-pointer transition-colors ${
                tag === "All"
                  ? "bg-brand-purple text-white"
                  : "bg-white text-gray-600 hover:bg-brand-purple-light hover:text-brand-purple"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`${item.color} rounded-3xl p-6 card-hover aspect-square flex flex-col justify-between`}
            >
              <div className="text-7xl text-center mt-4">{item.emoji}</div>
              <div>
                <span className="inline-block bg-white/80 text-brand-navy text-xs font-bold px-3 py-1 rounded-full mb-2">
                  {item.tag}
                </span>
                <h3 className="font-black text-brand-navy text-sm">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Upload CTA */}
        <div className="mt-16 bg-brand-navy rounded-3xl p-10 text-white text-center">
          <div className="text-5xl mb-4">📤</div>
          <h3 className="text-3xl font-black mb-3">
            Share Your Project with Us!
          </h3>
          <p className="text-gray-400 mb-6">
            Are you a RobotixAcademy student? Send us photos of your builds and
            we&apos;ll feature them here!
          </p>
          <a
            href="mailto:hello@robotixacademy.in"
            className="inline-block bg-brand-yellow text-brand-navy font-black px-8 py-4 rounded-2xl hover:scale-105 transition-transform"
          >
            📧 Email Us Your Project
          </a>
        </div>
      </div>
    </div>
  );
}
