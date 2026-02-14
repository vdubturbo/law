import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import type { CaseRow, CaseInsert, CaseUpdate } from "@/lib/database.types";

export function useCases() {
  const [cases, setCases] = useState<CaseRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCases = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { data, error: fetchError } = await supabase
      .from("cases")
      .select("*")
      .order("created_at", { ascending: false });

    if (fetchError) {
      setError(fetchError.message);
    } else {
      setCases(data ?? []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCases();
  }, [fetchCases]);

  const createCase = async (caseData: CaseInsert) => {
    const { error } = await supabase.from("cases").insert(caseData);
    if (error) throw error;
    await fetchCases();
  };

  const updateCase = async (id: string, caseData: CaseUpdate) => {
    const { error } = await supabase
      .from("cases")
      .update(caseData)
      .eq("id", id);
    if (error) throw error;
    await fetchCases();
  };

  const deleteCase = async (id: string) => {
    const { error } = await supabase.from("cases").delete().eq("id", id);
    if (error) throw error;
    await fetchCases();
  };

  return { cases, loading, error, fetchCases, createCase, updateCase, deleteCase };
}
