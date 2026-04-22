"use client";

import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase-client";
import { signOut } from "firebase/auth";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await signOut(auth);
      await fetch("/api/admin/session", { method: "DELETE" });
      router.replace("/admin/login");
    } catch {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors disabled:opacity-50"
    >
      {loading ? "⏳" : "🚪"} {loading ? "Signing out…" : "Sign Out"}
    </button>
  );
}
