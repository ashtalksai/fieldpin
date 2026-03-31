"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Eye, EyeOff } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TopoPattern } from "@/components/topo-pattern";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Signup failed");
        setLoading(false);
        return;
      }
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.ok) {
        router.push("/dashboard");
      } else {
        setError("Account created. Please log in.");
        router.push("/login");
      }
    } catch {
      setError("Something went wrong");
    }
    setLoading(false);
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 flex min-h-screen pt-16">
        {/* Form side */}
        <div className="w-full lg:w-[55%] flex items-center justify-center p-8">
          <div className="w-full max-w-[440px]">
            <Link
              href="/"
              className="text-xl font-bold text-accent mb-8 inline-block"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Fieldpin
            </Link>
            <h1
              className="text-[32px] font-bold text-text-primary mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Create your account
            </h1>
            <p className="text-[16px] text-text-secondary mb-8">
              Start your free 14-day pilot
            </p>

            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="w-full h-11 rounded-lg border border-border bg-surface text-text-primary text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-surface-hover transition-colors mb-6"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" className="shrink-0">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Sign up with Google
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-[13px] text-text-muted">or continue with email</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[14px] font-medium text-text-primary mb-1.5">
                  Full name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-11 rounded-lg border border-border bg-surface px-3 text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Ranger Martinez"
                />
              </div>
              <div>
                <label className="block text-[14px] font-medium text-text-primary mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-11 rounded-lg border border-border bg-surface px-3 text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="sarah@parkservice.gov"
                />
              </div>
              <div>
                <label className="block text-[14px] font-medium text-text-primary mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPw ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    className="w-full h-11 rounded-lg border border-border bg-surface px-3 pr-10 text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Min. 8 characters"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
                  >
                    {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-[14px] text-destructive">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 rounded-lg bg-accent text-white text-[15px] font-medium hover:bg-accent-hover transition-colors disabled:opacity-60"
              >
                {loading ? "Creating account..." : "Create account"}
              </button>
            </form>

            <p className="text-[14px] text-text-secondary mt-6 text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-accent hover:underline font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>

        {/* Right side — visual */}
        <div className="hidden lg:flex w-[45%] bg-accent relative items-center justify-center overflow-hidden">
          <TopoPattern opacity={0.15} />
          <div className="relative z-10 max-w-[340px] text-center">
            <div className="bg-surface rounded-xl p-8 mb-6" style={{ boxShadow: "var(--shadow-modal)" }}>
              <span
                className="text-[48px] text-accent/20 leading-none block mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;
              </span>
              <p className="text-[15px] italic text-text-secondary leading-[1.7] mb-4">
                I used to spend my Sunday nights re-entering data. Now it&apos;s done before I leave the trailhead.
              </p>
              <p className="text-[14px] font-bold text-text-primary">Sarah Martinez</p>
              <p className="text-[13px] text-text-muted">Wildlife Biologist, Yellowstone NP</p>
            </div>
            <p className="text-[14px] text-white/80">
              Join 500+ rangers already in the field
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
