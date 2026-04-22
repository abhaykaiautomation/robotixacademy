"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type FormState = {
  parentName: string;
  childName: string;
  age: string;
  email: string;
  phone: string;
  program: string;
  message: string;
};

const emptyForm: FormState = {
  parentName: "",
  childName: "",
  age: "",
  email: "",
  phone: "",
  program: "",
  message: "",
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormState>(emptyForm);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      setForm(emptyForm);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-purple to-brand-orange text-white py-20 text-center">
        <h1 className="text-5xl font-black mb-4">Enroll Your Child 🚀</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Fill in the form below and we&apos;ll get back to you within 24 hours
          with a free trial class!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-brand-navy">
              Get in Touch 💬
            </h2>
            {[
              { icon: "📞", title: "Call Us", info: "+91 98765 43210", sub: "Mon–Sat, 9am–6pm" },
              { icon: "✉️", title: "Email Us", info: "hello@robotixacademy.in", sub: "Reply within 24 hrs" },
              { icon: "📍", title: "Visit Us", info: "123 Innovation Street", sub: "Tech City, Bangalore" },
              { icon: "💬", title: "WhatsApp", info: "+91 98765 43210", sub: "Quick replies on WhatsApp" },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-5 flex gap-4 shadow-sm">
                <span className="text-3xl">{c.icon}</span>
                <div>
                  <div className="font-black text-brand-navy">{c.title}</div>
                  <div className="text-brand-purple font-semibold text-sm">{c.info}</div>
                  <div className="text-gray-400 text-xs">{c.sub}</div>
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 text-white font-black py-4 rounded-2xl hover:bg-green-600 transition-colors"
            >
              <span className="text-2xl">💬</span>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
                <div className="text-8xl mb-6 animate-bounce">🎉</div>
                <h2 className="text-3xl font-black text-brand-navy mb-4">
                  Enrollment Request Received!
                </h2>
                <p className="text-gray-600 mb-6">
                  Thank you! Our team will contact you within 24 hours to
                  schedule your child&apos;s <strong>free trial class</strong>.
                  Your entry has been saved to our database.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-brand-purple text-white font-bold px-8 py-3 rounded-2xl hover:bg-purple-700 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 shadow-sm space-y-5"
              >
                <h2 className="text-2xl font-black text-brand-navy mb-2">
                  Enrollment Form 📝
                </h2>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                    ⚠️ {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-brand-navy mb-1">
                      Parent&apos;s Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={form.parentName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-purple transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-navy mb-1">
                      Child&apos;s Name *
                    </label>
                    <input
                      type="text"
                      name="childName"
                      required
                      value={form.childName}
                      onChange={handleChange}
                      placeholder="Child's name"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-purple transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-navy mb-1">
                      Child&apos;s Age *
                    </label>
                    <input
                      type="number"
                      name="age"
                      required
                      min={5}
                      max={18}
                      value={form.age}
                      onChange={handleChange}
                      placeholder="e.g. 10"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-purple transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-navy mb-1">
                      Program Interested In *
                    </label>
                    <select
                      name="program"
                      required
                      value={form.program}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-purple transition-colors bg-white"
                    >
                      <option value="">Select a program</option>
                      <option>Little Explorers (6–9 yrs)</option>
                      <option>Tech Builders (10–13 yrs)</option>
                      <option>Future Innovators (14–16 yrs)</option>
                      <option>Holiday Camp</option>
                      <option>Not Sure — Please Suggest</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-navy mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-purple transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-navy mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-purple transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-navy mb-1">
                    Any Questions or Special Requirements?
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us anything that helps us prepare..."
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-purple transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-purple text-white font-black text-lg py-4 rounded-2xl hover:bg-purple-700 transition-all hover:scale-[1.02] shadow-lg shadow-purple-200 disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  {loading ? "⏳ Submitting..." : "🚀 Submit Enrollment Request"}
                </button>
                <p className="text-center text-gray-400 text-xs">
                  Free trial class included · No payment required · We respect your privacy
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
