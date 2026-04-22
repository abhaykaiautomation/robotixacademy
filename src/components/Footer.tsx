import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-purple rounded-2xl flex items-center justify-center text-lg">
                🤖
              </div>
              <span className="text-xl font-black">
                Robotix<span className="text-brand-purple">Academy</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Making kids future-ready with hands-on AI & Robotics education.
              Fun, creative, and inspiring!
            </p>
            <div className="flex gap-3 mt-4">
              {["📘", "📸", "▶️", "💬"].map((icon, i) => (
                <span
                  key={i}
                  className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-sm cursor-pointer hover:bg-brand-purple transition-colors"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-brand-yellow mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "AI for Beginners",
                "Robotics Basics",
                "Advanced AI",
                "Robotics Pro",
                "Holiday Camps",
              ].map((p) => (
                <li key={p}>
                  <Link href="/programs" className="hover:text-white transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-brand-yellow mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Kits & Products", href: "/kits" },
                { label: "Gallery", href: "/gallery" },
                { label: "Enroll Now", href: "/contact" },
                { label: "🔐 Admin", href: "/admin" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-brand-yellow mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <span>📍</span>
                <span>123 Innovation Street, Tech City, India</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-2">
                <span>✉️</span>
                <span>hello@robotixacademy.in</span>
              </li>
              <li className="flex gap-2">
                <span>🕐</span>
                <span>Mon–Sat: 9am – 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 RobotixAcademy. All rights reserved.</p>
          <p>Made with ❤️ for the next generation of innovators</p>
          <Link
            href="/admin"
            className="text-white/20 hover:text-white/50 text-xs transition-colors"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
