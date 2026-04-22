import Link from "next/link";

const programs = [
  {
    emoji: "🌱",
    level: "Beginner",
    age: "Ages 6–9",
    title: "Little Explorers",
    desc: "Introduction to basic robotics and AI concepts through storytelling, block coding, and simple robot assembly.",
    topics: ["Block Coding", "Simple Robots", "AI Stories", "Sensor Play"],
    color: "from-green-400 to-teal-500",
    badge: "bg-green-100 text-green-700",
  },
  {
    emoji: "⚡",
    level: "Intermediate",
    age: "Ages 10–13",
    title: "Tech Builders",
    desc: "Dive into Python basics, machine learning concepts, and build multi-functional robots with sensors and motors.",
    topics: ["Python Basics", "Machine Learning", "Arduino", "Smart Robots"],
    color: "from-brand-purple to-indigo-600",
    badge: "bg-purple-100 text-brand-purple",
    featured: true,
  },
  {
    emoji: "🚀",
    level: "Advanced",
    age: "Ages 14–16",
    title: "Future Innovators",
    desc: "Advanced AI projects, computer vision, autonomous robots, and full-stack engineering for aspiring tech leaders.",
    topics: ["Computer Vision", "Autonomous Robots", "Deep Learning", "IoT"],
    color: "from-brand-orange to-red-500",
    badge: "bg-orange-100 text-brand-orange",
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-purple font-bold text-sm uppercase tracking-widest">
            Our Programs
          </span>
          <h2 className="text-4xl font-black text-brand-navy mt-2">
            The Right Program for{" "}
            <span className="text-brand-orange">Every Age</span> 🎯
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Structured learning paths designed to grow with your child — from
            first robot to full AI project!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((p) => (
            <div
              key={p.title}
              className={`bg-white rounded-3xl overflow-hidden shadow-sm card-hover ${
                p.featured ? "ring-4 ring-brand-purple ring-offset-4" : ""
              }`}
            >
              {p.featured && (
                <div className="bg-brand-purple text-white text-xs font-bold text-center py-2 tracking-widest uppercase">
                  ⭐ Most Popular
                </div>
              )}
              <div className={`bg-gradient-to-br ${p.color} p-8 text-white text-center`}>
                <div className="text-6xl mb-2">{p.emoji}</div>
                <div className="text-sm font-bold uppercase tracking-wider opacity-80">
                  {p.level}
                </div>
                <h3 className="text-2xl font-black mt-1">{p.title}</h3>
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mt-2">
                  {p.age}
                </span>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.topics.map((t) => (
                    <span
                      key={t}
                      className={`${p.badge} text-xs font-bold px-3 py-1 rounded-full`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="block text-center bg-brand-navy text-white font-bold py-3 rounded-2xl hover:bg-brand-purple transition-colors"
                >
                  Enroll Now →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-brand-purple font-bold text-lg hover:gap-4 transition-all"
          >
            View All Programs <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
