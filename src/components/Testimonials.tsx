const testimonials = [
  {
    quote:
      "My daughter joined the Little Explorers program and within 2 months she built her first robot! She can't stop talking about AI now. RobotixAcademy is amazing!",
    name: "Priya Sharma",
    role: "Parent of Aarav (7 yrs)",
    avatar: "👩",
    stars: 5,
  },
  {
    quote:
      "The Tech Builders course completely changed how my son thinks. He went from playing games to building them. The mentors are incredibly patient and skilled.",
    name: "Rahul Mehta",
    role: "Parent of Kabir (12 yrs)",
    avatar: "👨",
    stars: 5,
  },
  {
    quote:
      "I love making robots at RobotixAcademy! We built a robot that follows a line and one that avoids walls. It's the best class ever!",
    name: "Ananya Singh",
    role: "Student, Age 11",
    avatar: "👧",
    stars: 5,
  },
  {
    quote:
      "As a parent, I was worried if it'd be too hard for my 8-year-old. But the way they teach — using stories and games — she picked it up super fast!",
    name: "Deepa Iyer",
    role: "Parent of Meera (8 yrs)",
    avatar: "👩",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-yellow font-bold text-sm uppercase tracking-widest">
            Happy Families
          </span>
          <h2 className="text-4xl font-black text-white mt-2">
            What Parents & Kids{" "}
            <span className="text-brand-yellow">Are Saying</span> 💬
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 card-hover flex flex-col"
            >
              <div className="text-brand-yellow text-lg mb-3">
                {"⭐".repeat(t.stars)}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/10">
                <div className="w-10 h-10 bg-brand-purple rounded-full flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
