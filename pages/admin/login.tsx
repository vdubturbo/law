import type { ReactElement } from "react";
import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DirectionDLayout from "@/components/direction-d/DirectionDLayout";
import { useAuth } from "@/hooks/useAuth";
import type { NextPageWithLayout } from "../_app";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const inputStyle = {
  backgroundColor: "var(--d-bg)",
  border: "1px solid var(--d-border)",
  color: "var(--d-ink)",
  fontFamily: "'Inter', sans-serif",
};

const labelStyle = {
  color: "var(--d-muted)",
  fontFamily: "'Inter', sans-serif",
};

const AdminLoginPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { session, loading: authLoading, signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (!authLoading && session) {
      router.replace("/admin/cases");
    }
  }, [session, authLoading, router]);

  const onSubmit = async (data: LoginFormData) => {
    const { error } = await signIn(data.email, data.password);
    if (error) {
      setError("root", { message: error.message });
    }
  };

  if (authLoading) {
    return (
      <div
        className="flex items-center justify-center min-h-[60vh]"
        style={{ backgroundColor: "var(--d-bg)" }}
      >
        <p
          className="text-sm animate-pulse"
          style={{ color: "var(--d-muted)", fontFamily: "'Inter', sans-serif" }}
        >
          Loading...
        </p>
      </div>
    );
  }

  if (session) return null;

  return (
    <>
      <Head>
        <title>Admin Login | Wade, Grunberg &amp; Wilson</title>
      </Head>

      <section
        className="py-20 md:py-28 px-6 md:px-10"
        style={{ backgroundColor: "var(--d-bg)" }}
      >
        <div className="max-w-md mx-auto">
          <h1
            className="text-[28px] md:text-[36px] font-semibold tracking-tight mb-2 text-center"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--d-ink)",
            }}
          >
            Admin Login
          </h1>
          <p
            className="text-sm text-center mb-10"
            style={{ color: "var(--d-muted)", fontFamily: "'Inter', sans-serif" }}
          >
            Sign in to manage case results.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {errors.root && (
              <div
                className="px-4 py-3 text-sm rounded"
                style={{
                  backgroundColor: "rgba(220, 38, 38, 0.1)",
                  color: "#dc2626",
                  border: "1px solid rgba(220, 38, 38, 0.2)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {errors.root.message}
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium tracking-wider uppercase mb-2"
                style={labelStyle}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="w-full px-4 py-3 text-sm rounded-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#B08D57]"
                style={inputStyle}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-xs" style={{ color: "#dc2626" }}>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium tracking-wider uppercase mb-2"
                style={labelStyle}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className="w-full px-4 py-3 text-sm rounded-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#B08D57]"
                style={inputStyle}
                {...register("password")}
              />
              {errors.password && (
                <p className="mt-1 text-xs" style={{ color: "#dc2626" }}>
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:brightness-110 disabled:opacity-50"
              style={{
                backgroundColor: "var(--d-accent)",
                color: "var(--d-navy)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

AdminLoginPage.getLayout = (page: ReactElement) => (
  <DirectionDLayout>{page}</DirectionDLayout>
);

export default AdminLoginPage;
