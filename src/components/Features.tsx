const features = [
  {
    icon: "🧠",
    title: "AI for Kids",
    desc: "Age-appropriate AI concepts taught through games, stories, and interactive projects.",
    color: "bg-brand-purple-light",
    border: "border-brand-purple",
    text: "text-brand-purple",
  },
  {
    icon: "🤖",
    title: "Robotics Kits",
    desc: "Build and program real robots with our specially designed kits for young learners.",
    color: "bg-orange-50",
    border: "border-brand-orange",
    text: "text-brand-orange",
  },
  {
    icon: "🎮",
    title: "Fun Projects",
    desc: "From self-driving toy cars to voice assistants — kids build cool real-world projects.",
    color: "bg-yellow-50",
    border: "border-brand-yellow",
    text: "text-yellow-600",
  },
  {
    icon: "👩‍🏫",
    title: "Expert Mentors",
    desc: "Trained educators who make complex topics simple, engaging, and enjoyable for kids.",
    color: "bg-teal-50",
    border: "border-brand-teal",
    text: "text-brand-teal",
  },
  {
    icon: "🏆",
    title: "Competitions",
    desc: "Participate in robotics and AI competitions to showcase skills and win exciting prizes.",
    color: "bg-pink-50",
    border: "border-pink-400",
    text: "text-pink-500",
  },
  {
    icon: "📜",
    title: "Certificates",
    desc: "Earn recognized certificates at every level to build a strong learning portfolio.",
    color: "bg-indigo-50",
    border: "border-indigo-400",
    text: "text-indigo-500",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-brand-orange font-bold text-sm uppercase tracking-widest">
            Why RobotixAcademy?
          </span>
          <h2 className="text-4xl font-black text-brand-navy mt-2">
            Everything a Kid Needs to{" "}
            <span className="gradient-text">Thrive in Tech</span> 🚀
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Our programs blend creativity, critical thinking, and technology to
            give every child a head start in the AI era.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`${f.color} border-2 ${f.border} rounded-3xl p-6 card-hover`}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className={`text-xl font-black ${f.text} mb-2`}>{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
