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

export default function AuthSplitCard() {
  return null; // placeholder
}
