import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Input } from "../../components/ui/input";

export function AuthCard() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // بعداً اینجا صدا زدن واقعی supabase.auth.signIn... رو اضافه می‌کنیم
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/40 via-purple-700/50 to-black" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vh] h-[60vh] rounded-b-[50%] bg-purple-400/20 blur-[80px]" />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vh] h-[60vh] rounded-b-full bg-purple-300/20 blur-[60px]"
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vh] h-[90vh] rounded-t-full bg-purple-400/20 blur-[60px]"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 1,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-sm relative z-10 px-4"
        style={{ perspective: 1500 }}
      >
        <motion.div
          className="relative"
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative group bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/[0.05] shadow-2xl">
            {/* هدر */}
            <div className="text-center space-y-1 mb-5">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="mx-auto w-10 h-10 rounded-full border border-white/10 flex items-center justify-center"
              >
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                  E
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
              >
                {mode === "login" ? "خوش برگشتی" : "ساخت حساب کاربری"}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white/60 text-xs"
              >
                {mode === "login"
                  ? "برای ادامه وارد حسابت شو"
                  : "چند ثانیه‌ای ثبت‌نام کن"}
              </motion.p>
            </div>

            {/* فرم */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-3">
                <div className="relative flex items-center overflow-hidden rounded-lg">
                  <Mail
                    className={`absolute left-3 w-4 h-4 transition-all duration-300 ${
                      focusedInput === "email" ? "text-white" : "text-white/40"
                    }`}
                  />
                  <Input
                    type="email"
                    placeholder="ایمیل"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedInput("email")}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full bg-white/5 border-transparent text-white placeholder:text-white/30 h-10 pl-10 pr-3 focus:bg-white/10"
                  />
                </div>

                <div className="relative flex items-center overflow-hidden rounded-lg">
                  <Lock
                    className={`absolute left-3 w-4 h-4 transition-all duration-300 ${
                      focusedInput === "password"
                        ? "text-white"
                        : "text-white/40"
                    }`}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="رمز عبور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedInput("password")}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full bg-white/5 border-transparent text-white placeholder:text-white/30 h-10 pl-10 pr-10 focus:bg-white/10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3"
                  >
                    {showPassword ? (
                      <Eye className="w-4 h-4 text-white/40 hover:text-white transition-colors" />
                    ) : (
                      <EyeOff className="w-4 h-4 text-white/40 hover:text-white transition-colors" />
                    )}
                  </button>
                </div>
              </div>

              {mode === "login" && (
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <input
                      id="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="h-4 w-4 rounded border border-white/20 bg-white/5"
                    />
                    <label
                      htmlFor="remember-me"
                      className="text-xs text-white/60"
                    >
                      منو به خاطر بسپار
                    </label>
                  </div>
                  <button
                    type="button"
                    className="text-xs text-white/60 hover:text-white transition-colors"
                  >
                    رمز رو فراموش کردی؟
                  </button>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full mt-5"
              >
                <div className="relative overflow-hidden bg-white text-black font-medium h-10 rounded-lg flex items-center justify-center gap-1 text-sm">
                  <AnimatePresence mode="wait">
                    {isLoading ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="w-4 h-4 border-2 border-black/70 border-t-transparent rounded-full animate-spin" />
                      </motion.div>
                    ) : (
                      <motion.span
                        key="text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-1"
                      >
                        {mode === "login" ? "ورود" : "ساخت حساب"}
                        <ArrowRight className="w-3 h-3 rotate-180" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>

              <p className="text-center text-xs text-white/60 mt-4">
                {mode === "login" ? (
                  <>
                    حساب کاربری نداری؟{" "}
                    <button
                      type="button"
                      onClick={() => setMode("signup")}
                      className="text-white font-medium hover:text-white/70 transition-colors"
                    >
                      ثبت‌نام کن
                    </button>
                  </>
                ) : (
                  <>
                    قبلاً ثبت‌نام کردی؟{" "}
                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className="text-white font-medium hover:text-white/70 transition-colors"
                    >
                      وارد شو
                    </button>
                  </>
                )}
              </p>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
