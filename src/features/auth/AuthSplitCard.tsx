import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

const t = {
  fa: {
    logo: "کریپتوفولیو",
    signInTitle: "ورود به پنل",
    signUpTitle: "ثبت نام",
    emailLabel: "ایمیل",
    emailPlaceholder: "ایمیل خود را وارد کنید",
    passwordLabel: "رمز عبور",
    passwordPlaceholder: "رمز عبور خود را وارد کنید",
    nameLabel: "نام کامل",
    namePlaceholder: "نام خود را وارد کنید",
    confirmLabel: "تکرار رمز عبور",
    confirmPlaceholder: "رمز عبور را تکرار کنید",
    rememberMe: "مرا به خاطر بسپار",
    forgotPassword: "رمزم را فراموش کرده ام",
    divider: "یا",
    googleBtn: "ورود با گوگل",
    signInBtn: "ورود به پنل",
    signUpBtn: "ثبت نام",
    noAccount: "ثبت نام نکرده ام",
    hasAccount: "قبلاً ثبت نام کرده ام",
    agreeTerms: "با قوانین موافقم",
    required: "*",
  },
  en: {
    logo: "CryptoFolio",
    signInTitle: "Sign In",
    signUpTitle: "Sign Up",
    emailLabel: "Email",
    emailPlaceholder: "Enter your email",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
    nameLabel: "Full Name",
    namePlaceholder: "Enter your full name",
    confirmLabel: "Confirm Password",
    confirmPlaceholder: "Confirm your password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    divider: "or",
    googleBtn: "Continue with Google",
    signInBtn: "Log In",
    signUpBtn: "Create Account",
    noAccount: "Don't have an account?",
    hasAccount: "Already have an account?",
    agreeTerms: "I agree to the terms",
    required: "*",
  },
};

//Dark and light theme colors
const colors = {
  light: {
    pageBg: "#F7FAF9",
    cardBg: "#FFFFFF",
    inputBg: "#F7FAF9",
    border: "rgba(0,0,0,0.08)",
    text: "#0A130F",
    muted: "rgba(0,0,0,0.45)",
    accent: "#059669",
    accentLight: "#10B981",
    accentGlow: "rgba(5,150,105,0.15)",
    danger: "#DC2626",
    dangerText: "#DC2626",
    success: "#16A34A",
    white: "#FFFFFF",
    googleBg: "#F7FAF9",
  },
  dark: {
    pageBg: "#0A130F",
    cardBg: "#101B16",
    inputBg: "#0A130F",
    border: "rgba(255,255,255,0.06)",
    text: "#FFFFFF",
    muted: "rgba(255,255,255,0.45)",
    accent: "#10B981",
    accentLight: "#34D399",
    accentGlow: "rgba(16,185,129,0.15)",
    danger: "#F87171",
    dangerText: "#F87171",
    success: "#4ADE80",
    white: "#FFFFFF",
    googleBg: "#0A130F",
  },
};

export default function AuthSplitCard() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [lang, setLang] = useState("fa");
  const [theme, setTheme] = useState("dark");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const tr = t[lang];
  const isRTL = lang === "fa";
  const c = colors[theme];
}
useEffect(() => {
  document.documentElement.classList.toggle("dark", theme === "dark");
}, [theme]);
