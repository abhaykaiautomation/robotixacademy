import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-purple to-indigo-700 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="text-6xl mb-6 animate-bounce">🚀</div>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
          Ready to Launch Your Child&apos;s
          <br />
          <span className="text-brand-yellow">Tech Journey?</span>
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Join 500+ kids already learning AI & Robotics. Enroll today and get a
          free trial class!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-brand-orange text-white font-black text-lg px-10 py-4 rounded-2xl hover:bg-orange-500 transition-all hover:scale-105 shadow-xl"
          >
            🎓 Enroll Now — It&apos;s Free to Try!
          </Link>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-black text-lg px-10 py-4 rounded-2xl hover:bg-green-600 transition-all hover:scale-105 shadow-xl"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        <p className="text-white/50 text-sm mt-6">
          No credit card required · Free trial class · Cancel anytime
        </p>
      </div>
    </section>
  );
}
