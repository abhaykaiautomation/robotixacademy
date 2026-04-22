import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotics Kits — RobotixAcademy",
  description: "Shop our specially designed robotics kits for kids of all ages.",
};

const kits = [
  {
    emoji: "🤖",
    name: "StarterBot Kit",
    tagline: "Your first robot awaits!",
    price: "₹1,499",
    age: "Ages 6–9",
    color: "from-green-400 to-teal-400",
    badge: "bg-green-100 text-green-700",
    pieces: 42,
    includes: [
      "Pre-cut robot parts",
      "Color-coded wires",
      "2 LED lights",
      "Buzzer module",
      "USB-powered battery",
      "Illustrated guide book",
    ],
    highlight: "No soldering needed!",
  },
  {
    emoji: "⚡",
    name: "TechBot Pro Kit",
    tagline: "Level up your robot skills",
    price: "₹3,499",
    age: "Ages 10–13",
    color: "from-brand-purple to-indigo-500",
    badge: "bg-purple-100 text-brand-purple",
    pieces: 86,
    includes: [
      "Arduino Uno board",
      "Ultrasonic sensor",
      "IR sensor pair",
      "DC motors + wheels",
      "Motor driver module",
      "Online coding access",
    ],
    highlight: "Most popular kit!",
    featured: true,
  },
  {
    emoji: "🚀",
    name: "InnoBot Advanced Kit",
    tagline: "Build the robots of tomorrow",
    price: "₹5,999",
    age: "Ages 14–16",
    color: "from-brand-orange to-red-500",
    badge: "bg-orange-100 text-brand-orange",
    pieces: 130,
    includes: [
      "Raspberry Pi 4 module",
      "Camera module",
      "Servo motors (x4)",
      "Gyroscope sensor",
      "Bluetooth module",
      "AI starter code pack",
    ],
    highlight: "Includes AI capabilities!",
  },
  {
    emoji: "🎨",
    name: "Creative Bot Kit",
    tagline: "Art meets technology!",
    price: "₹2,299",
    age: "Ages 6–12",
    color: "from-pink-400 to-purple-500",
    badge: "bg-pink-100 text-pink-700",
    pieces: 58,
    includes: [
      "Drawing robot base",
      "Color marker holders",
      "Pattern programming cards",
      "LED display mini",
      "Sound sensor",
      "Activity workbook",
    ],
    highlight: "Perfect gift idea!",
  },
];

export default function KitsPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-orange to-red-600 text-white py-20 text-center">
        <h1 className="text-5xl font-black mb-4">Robotics Kits 🔧</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Hands-on kits designed to make building robots fun, safe, and
          educational — delivered to your door!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          {[
            { icon: "🛡️", label: "Child Safe Materials" },
            { icon: "🚚", label: "Free Shipping Over ₹999" },
            { icon: "↩️", label: "30-Day Returns" },
            { icon: "📞", label: "Kit Support Included" },
          ].map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 bg-white rounded-2xl px-5 py-3 shadow-sm text-sm font-bold text-brand-navy"
            >
              <span className="text-xl">{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {kits.map((k) => (
            <div
              key={k.name}
              className={`bg-white rounded-3xl overflow-hidden shadow-sm card-hover ${
                k.featured ? "ring-4 ring-brand-purple ring-offset-4" : ""
              }`}
            >
              {k.featured && (
                <div className="bg-brand-purple text-white text-xs font-bold text-center py-2 tracking-widest uppercase">
                  ⭐ Best Seller
                </div>
              )}
              <div className={`bg-gradient-to-r ${k.color} p-8 text-white text-center`}>
                <div className="text-7xl mb-3">{k.emoji}</div>
                <h2 className="text-2xl font-black">{k.name}</h2>
                <p className="text-white/80 text-sm mt-1">{k.tagline}</p>
                <div className="flex justify-center gap-3 mt-3">
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {k.age}
                  </span>
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                    🧩 {k.pieces} pieces
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div
                  className={`inline-flex items-center gap-2 ${k.badge} text-xs font-bold px-3 py-1 rounded-full mb-4`}
                >
                  ✨ {k.highlight}
                </div>
                <h3 className="font-black text-brand-navy mb-3">
                  Kit Includes:
                </h3>
                <ul className="space-y-2 mb-6">
                  {k.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span className="text-brand-teal font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-brand-purple">
                    {k.price}
                  </span>
                  <Link
                    href="/contact"
                    className="bg-brand-orange text-white font-bold px-6 py-3 rounded-2xl hover:bg-orange-500 transition-colors"
                  >
                    Order Now →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom kit CTA */}
        <div className="mt-12 bg-gradient-to-r from-brand-navy to-brand-purple rounded-3xl p-10 text-white text-center">
          <div className="text-5xl mb-4">🛒</div>
          <h3 className="text-3xl font-black mb-3">
            Need a Custom Kit for Your School?
          </h3>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            We supply bulk robotics kits for schools, academies, and coding
            clubs. Get special pricing and curriculum support.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-yellow text-brand-navy font-black px-8 py-4 rounded-2xl hover:scale-105 transition-transform"
          >
            Contact Us for Bulk Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
