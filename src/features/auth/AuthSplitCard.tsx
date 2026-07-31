import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";

export function AuthSplitCard() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const isSignIn = mode === "signin";

  return (
    <div className="min-h-screen bg-[#0B0E11] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl h-[560px] bg-[#14151A] rounded-2xl overflow-hidden flex relative shadow-2xl border border-white/5">
        <div
          className={`w-1/2 h-full flex flex-col items-center justify-center px-10 transition-all duration-500 ${
            isSignIn ? "order-2" : "order-1"
          }`}
        >
          <h1 className="text-white text-3xl font-bold mb-8">
            {isSignIn ? "Sign in" : "Sign up"}
          </h1>

          <div className="w-full flex flex-col gap-3">
            {!isSignIn && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F0B90B]" />
                <input
                  placeholder="Username"
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F0B90B]/50 transition"
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F0B90B]" />
              <input
                placeholder="Email"
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F0B90B]/50 transition"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F0B90B]" />
              <input
                placeholder="Password"
                type="password"
                className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F0B90B]/50 transition"
              />
            </div>

            <button className="w-full bg-[#F0B90B] text-black font-semibold rounded-full py-3 text-sm mt-3 hover:brightness-110 transition">
              {isSignIn ? "LOGIN" : "SIGN UP"}
            </button>
          </div>

          <p className="text-white/40 text-xs mt-6 mb-3">
            Or {isSignIn ? "sign in" : "sign up"} with
          </p>

          <div className="flex gap-3">
            {["G", "T", "in"].map((label) => (
              <button
                key={label}
                type="button"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition text-white/70 text-xs font-semibold"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`w-1/2 h-full flex flex-col items-center justify-center px-10 text-center bg-gradient-to-br from-[#F0B90B]/90 to-[#B8860B] transition-all duration-500 ${
            isSignIn ? "order-1" : "order-2"
          }`}
        >
          <h2 className="text-black text-2xl font-bold mb-3">
            {isSignIn ? "New here?" : "One of us?"}
          </h2>

          <p className="text-black/70 text-sm mb-8 leading-relaxed">
            {isSignIn
              ? "Join us today and start tracking your portfolio in seconds."
              : "Welcome back! Sign in to continue your journey."}
          </p>

          <button
            type="button"
            onClick={() => setMode(isSignIn ? "signup" : "signin")}
            className="border-2 border-black text-black font-semibold rounded-full px-8 py-2.5 text-sm hover:bg-black hover:text-[#F0B90B] transition"
          >
            {isSignIn ? "SIGN UP" : "SIGN IN"}
          </button>
        </div>
      </div>
    </div>
  );
}
