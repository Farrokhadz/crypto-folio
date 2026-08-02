import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "../../lib/supabase";

export function AuthSplitCard() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const isSignIn = mode === "signin";

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setLoading(true);

    if (isSignIn) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      setLoading(false);
      if (error) {
        setError(error.message);
        return;
      }
      navigate("/dashboard");
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: username },
        },
      });
      setLoading(false);
      if (error) {
        setError(error.message);
        return;
      }

      // ثبت‌نام موفق بود — کاربر رو به تب لاگین ببر، فیلدها رو خالی کن
      setUsername("");
      setEmail("");
      setPassword("");
      setMode("signin");
      setSuccessMessage(
        "Account created! Please log in with your credentials.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0E11] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-[#14151A] rounded-2xl overflow-hidden flex border border-white/10">
        {/* پنل تاکیدی */}
        <div className="w-1/2 bg-[#F0B90B] flex flex-col items-center justify-center text-center px-10 py-16">
          <h2 className="text-black text-2xl font-bold mb-3">
            {isSignIn ? "New here?" : "Already a member?"}
          </h2>
          <p className="text-black/70 text-sm mb-8 leading-relaxed">
            {isSignIn
              ? "Join us today and start tracking your portfolio in seconds."
              : "Sign in to continue your journey with us."}
          </p>
          <button
            onClick={() => {
              setMode(isSignIn ? "signup" : "signin");
              setError(null);
              setSuccessMessage(null);
            }}
            className="border-2 border-black text-black font-semibold rounded-full px-8 py-2.5 text-sm hover:bg-black hover:text-[#F0B90B] transition-colors"
          >
            {isSignIn ? "SIGN UP" : "SIGN IN"}
          </button>
        </div>

        {/* پنل فرم */}
        <div className="w-1/2 flex flex-col items-center justify-center px-10 py-16">
          <h1 className="text-white text-2xl font-bold mb-6">
            {isSignIn ? "Sign in" : "Sign up"}
          </h1>

          {successMessage && (
            <div className="w-full flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs rounded-full px-4 py-2.5 mb-4">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
            {!isSignIn && (
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F0B90B]" />
                <input
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F0B90B]/50 transition-colors"
                />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F0B90B]" />
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F0B90B]/50 transition-colors"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F0B90B]" />
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F0B90B]/50 transition-colors"
              />
            </div>

            {error && (
              <p className="text-red-400 text-xs text-center -mb-1">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#F0B90B] text-black font-semibold rounded-full py-3 text-sm mt-3 hover:brightness-110 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {isSignIn ? "LOGIN" : "SIGN UP"}
            </button>
          </form>

          <p className="text-white/40 text-xs mt-6 mb-3">
            Or {isSignIn ? "sign in" : "sign up"} with
          </p>
        </div>
      </div>
    </div>
  );
}
