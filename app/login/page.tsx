"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

const VALID_EMAIL = "sarah.wilson@clinic.com"
const VALID_PASSWORD = "123"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setLoading(true)
      sessionStorage.setItem("isLoggedIn", "true")
      sessionStorage.setItem("userEmail", email)
      router.push("/")
    } else {
      setError("Invalid email or password.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <Image
            src="/1.1 AI Health Assistant.png"
            alt="AI Health Assistant"
            width={64}
            height={64}
          />
          <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase">
            AI Patient Health Assistant
          </p>
          <h1 className="text-2xl font-bold text-slate-800 text-center">
            Secure Patient Portal
          </h1>
          <p className="text-sm text-slate-500 text-center leading-relaxed">
            Sign in with your patient account to continue your clinical intake
            and review your health data.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="patient@demo.com"
              required
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          {error && (
            <p className="text-xs text-red-500 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60 text-white font-semibold py-3 text-sm transition"
          >
            {loading ? "Signing in…" : "Log in to Portal"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-xs text-slate-400">or continue with</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* Social buttons (stubs) */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2.5 w-full rounded-xl border border-slate-200 bg-white hover:bg-slate-50 py-2.5 text-sm font-medium text-slate-700 transition"
          >
            {/* Google icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign in with Google
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-black hover:bg-neutral-800 py-2.5 text-sm font-medium text-white transition"
          >
            {/* Apple icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Sign in with Apple
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-black hover:bg-neutral-800 py-2.5 text-sm font-medium text-white transition"
          >
            {/* X icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Sign in with X
          </button>
        </div>

        {/* Demo hint */}
        <p className="mt-6 text-center text-xs text-slate-400">
          Demo credentials:{" "}
          <span className="text-teal-600 font-medium">sarah.wilson@clinic.com</span>
          {" "}/ <span className="text-teal-600 font-medium">123</span>
        </p>
      </div>
    </div>
  )
}
