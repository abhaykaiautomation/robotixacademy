"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallBanner() {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [show, setShow] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already running as installed PWA
    if (window.matchMedia("(display-mode: standalone)").matches) return;
    if (sessionStorage.getItem("pwa-banner-dismissed")) return;

    // Detect iOS (Safari doesn't fire beforeinstallprompt)
    const ios =
      /iphone|ipad|ipod/i.test(navigator.userAgent) &&
      !("MSStream" in window);
    setIsIOS(ios);

    if (ios) {
      // Show iOS manual instruction banner after 3s
      setTimeout(() => setShow(true), 3000);
      return;
    }

    // Android / Desktop — capture the native install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setPrompt(e as BeforeInstallPromptEvent);
      setShow(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  function dismiss() {
    sessionStorage.setItem("pwa-banner-dismissed", "1");
    setDismissed(true);
    setShow(false);
  }

  async function install() {
    if (!prompt) return;
    await prompt.prompt();
    const { outcome } = await prompt.userChoice;
    if (outcome === "accepted") setShow(false);
    setPrompt(null);
  }

  if (!show || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-lg mx-auto bg-brand-navy text-white rounded-2xl shadow-2xl p-4 flex items-start gap-4 border border-white/10">
        {/* Icon */}
        <div className="w-12 h-12 bg-brand-purple rounded-xl flex items-center justify-center text-2xl shrink-0">
          🤖
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="font-black text-sm">Install RobotixAcademy App</p>
          {isIOS ? (
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">
              Tap <span className="text-brand-yellow font-bold">Share</span>{" "}
              <span className="text-lg">⬆️</span> then{" "}
              <span className="text-brand-yellow font-bold">
                &ldquo;Add to Home Screen&rdquo;
              </span>{" "}
              <span className="text-lg">➕</span> to install.
            </p>
          ) : (
            <p className="text-gray-400 text-xs mt-1">
              Install for faster access and offline use.
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {!isIOS && prompt && (
            <button
              onClick={install}
              className="bg-brand-orange text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-orange-500 transition-colors"
            >
              Install
            </button>
          )}
          <button
            onClick={dismiss}
            className="text-gray-500 hover:text-white text-lg leading-none"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
