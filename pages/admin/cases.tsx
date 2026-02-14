import type { ReactElement } from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DirectionDLayout from "@/components/direction-d/DirectionDLayout";
import { useAuth } from "@/hooks/useAuth";
import { useCases } from "@/hooks/useCases";
import type { CaseRow } from "@/lib/database.types";
import type { NextPageWithLayout } from "../_app";

const caseFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  court: z.string().min(1, "Court is required"),
  outcome: z.string().min(1, "Outcome is required"),
  outcome_type: z.string().min(1, "Outcome type is required"),
  date: z.string().min(1, "Date is required"),
  practice_area: z.string().min(1, "Practice area is required"),
  description: z.string().optional().default(""),
});

type CaseFormData = z.infer<typeof caseFormSchema>;

const practiceOptions = [
  "Defamation",
  "Business Litigation",
  "Trust & Estate Litigation",
  "Personal Injury",
  "Civil Rights",
  "Appellate",
];

const outcomeTypeOptions = [
  "Jury Verdict",
  "Jury Verdict + Attorney Fees",
  "Settlement",
  "Appeal",
  "Appellate Victory",
  "Injunction",
  "Dismissal",
  "Recovery",
  "Other",
];

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

function CaseForm({
  editingCase,
  onSave,
  onCancel,
}: {
  editingCase: CaseRow | null;
  onSave: (data: CaseFormData) => Promise<void>;
  onCancel: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CaseFormData>({
    resolver: zodResolver(caseFormSchema),
    defaultValues: editingCase
      ? {
          title: editingCase.title,
          court: editingCase.court,
          outcome: editingCase.outcome,
          outcome_type: editingCase.outcome_type,
          date: editingCase.date,
          practice_area: editingCase.practice_area,
          description: editingCase.description ?? "",
        }
      : {
          title: "",
          court: "",
          outcome: "",
          outcome_type: "",
          date: "",
          practice_area: "",
          description: "",
        },
  });

  useEffect(() => {
    if (editingCase) {
      reset({
        title: editingCase.title,
        court: editingCase.court,
        outcome: editingCase.outcome,
        outcome_type: editingCase.outcome_type,
        date: editingCase.date,
        practice_area: editingCase.practice_area,
        description: editingCase.description ?? "",
      });
    } else {
      reset({
        title: "",
        court: "",
        outcome: "",
        outcome_type: "",
        date: "",
        practice_area: "",
        description: "",
      });
    }
  }, [editingCase, reset]);

  return (
    <div
      className="p-6 md:p-8 mb-8"
      style={{
        backgroundColor: "var(--d-surface)",
        border: "1px solid var(--d-border)",
      }}
    >
      <h2
        className="text-xl font-semibold mb-6"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "var(--d-ink)",
        }}
      >
        {editingCase ? "Edit Case" : "Add New Case"}
      </h2>

      <form onSubmit={handleSubmit(onSave)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label
              className="block text-xs font-medium tracking-wider uppercase mb-2"
              style={labelStyle}
            >
              Title *
            </label>
            <input
              className="w-full px-4 py-3 text-sm rounded-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#B08D57]"
              style={inputStyle}
              placeholder="e.g., Smith v. Jones"
              {...register("title")}
            />
            {errors.title && (
              <p className="mt-1 text-xs" style={{ color: "#dc2626" }}>
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-xs font-medium tracking-wider uppercase mb-2"
              style={labelStyle}
            >
              Court *
            </label>
            <input
              className="w-full px-4 py-3 text-sm rounded-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#B08D57]"
              style={inputStyle}
              placeholder="e.g., Northern District of Georgia"
              {...register("court")}
            />
            {errors.court && (
              <p className="mt-1 text-xs" style={{ color: "#dc2626" }}>
                {errors.court.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-xs font-medium tracking-wider uppercase mb-2"
              style={labelStyle}
            >
              Outcome *
            </label>
            <input
              className="w-full px-4 py-3 text-sm rounded-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#B08D57]"
              style={inputStyle}
              placeholder='e.g., $755,000 or Affirmed'
              {...register("outcome")}
            />
            {errors.outcome && (
              <p className="mt-1 text-xs" style={{ color: "#dc2626" }}>
                {errors.outcome.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-xs font-medium tracking-wider uppercase mb-2"
              style={labelStyle}
            >
              Outcome Type *
            </label>
            <select
              className="w-full px-4 py-3 text-sm rounded-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#B08D57]"
              style={inputStyle}
              {...register("outcome_type")}
            >
              <option value="">Select type...</option>
              {outcomeTypeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.outcome_type && (
              <p className="mt-1 text-xs" style={{ color: "#dc2626" }}>
                {errors.outcome_type.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-xs font-medium tracking-wider uppercase mb-2"
              style={labelStyle}
            >
              Date *
            </label>
            <input
              className="w-full px-4 py-3 text-sm rounded-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#B08D57]"
              style={inputStyle}
              placeholder="e.g., April 4, 2024"
              {...register("date")}
            />
            {errors.date && (
              <p className="mt-1 text-xs" style={{ color: "#dc2626" }}>
                {errors.date.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-xs font-medium tracking-wider uppercase mb-2"
              style={labelStyle}
            >
              Practice Area *
            </label>
            <select
              className="w-full px-4 py-3 text-sm rounded-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#B08D57]"
              style={inputStyle}
              {...register("practice_area")}
            >
              <option value="">Select area...</option>
              {practiceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.practice_area && (
              <p className="mt-1 text-xs" style={{ color: "#dc2626" }}>
                {errors.practice_area.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            className="block text-xs font-medium tracking-wider uppercase mb-2"
            style={labelStyle}
          >
            Description
          </label>
          <textarea
            rows={3}
            className="w-full px-4 py-3 text-sm rounded-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#B08D57] resize-vertical"
            style={inputStyle}
            placeholder="Brief description of the case and outcome (optional)"
            {...register("description")}
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:brightness-110 disabled:opacity-50"
            style={{
              backgroundColor: "var(--d-accent)",
              color: "var(--d-navy)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {isSubmitting ? "Saving..." : editingCase ? "Update Case" : "Add Case"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300"
            style={{
              color: "var(--d-muted)",
              border: "1px solid var(--d-border)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

const AdminCasesPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { session, loading: authLoading, signOut } = useAuth();
  const { cases, loading: casesLoading, error, createCase, updateCase, deleteCase } =
    useCases();

  const [showForm, setShowForm] = useState(false);
  const [editingCase, setEditingCase] = useState<CaseRow | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !session) {
      router.replace("/admin/login");
    }
  }, [session, authLoading, router]);

  const showFeedback = (msg: string) => {
    setFeedback(msg);
    setTimeout(() => setFeedback(null), 3000);
  };

  const handleSave = async (data: CaseFormData) => {
    try {
      if (editingCase) {
        await updateCase(editingCase.id, data);
        showFeedback("Case updated successfully.");
      } else {
        await createCase(data);
        showFeedback("Case added successfully.");
      }
      setShowForm(false);
      setEditingCase(null);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to save case.";
      showFeedback(`Error: ${message}`);
    }
  };

  const handleEdit = (c: CaseRow) => {
    setEditingCase(c);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (c: CaseRow) => {
    if (!window.confirm(`Delete "${c.title}"? This cannot be undone.`)) return;
    try {
      await deleteCase(c.id);
      showFeedback("Case deleted.");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to delete case.";
      showFeedback(`Error: ${message}`);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingCase(null);
  };

  const handleSignOut = async () => {
    await signOut();
    router.replace("/admin/login");
  };

  if (authLoading || !session) {
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

  return (
    <>
      <Head>
        <title>Manage Cases | Admin | Wade, Grunberg &amp; Wilson</title>
      </Head>

      <section
        className="py-6 px-6 md:px-10"
        style={{ backgroundColor: "var(--d-navy)" }}
      >
        <div className="max-w-[1120px] mx-auto flex items-center justify-between">
          <div>
            <h1
              className="text-lg md:text-xl font-semibold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Manage Case Results
            </h1>
            <p
              className="text-xs text-white/50 mt-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {session.user.email}
            </p>
          </div>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 hover:bg-white/10"
            style={{
              color: "rgba(255,255,255,0.65)",
              border: "1px solid rgba(255,255,255,0.2)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Sign Out
          </button>
        </div>
      </section>

      <section
        className="py-8 md:py-12 px-6 md:px-10 min-h-[60vh]"
        style={{ backgroundColor: "var(--d-bg)" }}
      >
        <div className="max-w-[1120px] mx-auto">
          {/* Feedback banner */}
          {feedback && (
            <div
              className="px-4 py-3 text-sm mb-6 transition-all duration-300"
              style={{
                backgroundColor: feedback.startsWith("Error")
                  ? "rgba(220, 38, 38, 0.1)"
                  : "rgba(22, 163, 74, 0.1)",
                color: feedback.startsWith("Error") ? "#dc2626" : "#16a34a",
                border: `1px solid ${
                  feedback.startsWith("Error")
                    ? "rgba(220, 38, 38, 0.2)"
                    : "rgba(22, 163, 74, 0.2)"
                }`,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {feedback}
            </div>
          )}

          {/* Add button */}
          {!showForm && (
            <div className="mb-8">
              <button
                onClick={() => {
                  setEditingCase(null);
                  setShowForm(true);
                }}
                className="px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:brightness-110"
                style={{
                  backgroundColor: "var(--d-accent)",
                  color: "var(--d-navy)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                + Add New Case
              </button>
            </div>
          )}

          {/* Case form */}
          {showForm && (
            <CaseForm
              editingCase={editingCase}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          )}

          {/* Cases list */}
          {casesLoading ? (
            <p
              className="text-sm animate-pulse py-12 text-center"
              style={{ color: "var(--d-muted)", fontFamily: "'Inter', sans-serif" }}
            >
              Loading cases...
            </p>
          ) : error ? (
            <p
              className="text-sm py-12 text-center"
              style={{ color: "#dc2626", fontFamily: "'Inter', sans-serif" }}
            >
              Failed to load cases: {error}
            </p>
          ) : cases.length === 0 ? (
            <p
              className="text-sm py-12 text-center"
              style={{ color: "var(--d-muted)", fontFamily: "'Inter', sans-serif" }}
            >
              No cases yet. Click &ldquo;Add New Case&rdquo; to get started.
            </p>
          ) : (
            <div className="space-y-4">
              {cases.map((c) => (
                <div
                  key={c.id}
                  className="p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 transition-all duration-200"
                  style={{
                    backgroundColor: "var(--d-surface)",
                    border: "1px solid var(--d-border)",
                  }}
                >
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-base font-semibold truncate"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "var(--d-ink)",
                      }}
                    >
                      {c.title}
                    </h3>
                    <div
                      className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs"
                      style={{
                        color: "var(--d-muted)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      <span
                        className="font-semibold"
                        style={{ color: "var(--d-accent)" }}
                      >
                        {c.outcome}
                      </span>
                      <span>{c.outcome_type}</span>
                      <span>{c.practice_area}</span>
                      <span>{c.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => handleEdit(c)}
                      className="px-4 py-2 text-xs font-medium tracking-wide transition-all duration-200 hover:brightness-110"
                      style={{
                        backgroundColor: "var(--d-navy)",
                        color: "white",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(c)}
                      className="px-4 py-2 text-xs font-medium tracking-wide transition-all duration-200 hover:brightness-110"
                      style={{
                        backgroundColor: "#dc2626",
                        color: "white",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

AdminCasesPage.getLayout = (page: ReactElement) => (
  <DirectionDLayout>{page}</DirectionDLayout>
);

export default AdminCasesPage;
