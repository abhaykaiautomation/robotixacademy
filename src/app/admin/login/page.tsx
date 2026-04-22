import { Suspense } from "react";
import LoginForm from "./LoginForm";

export default function AdminLoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-brand-navy flex items-center justify-center">
        <div className="text-white text-xl font-bold animate-pulse">Loading…</div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
