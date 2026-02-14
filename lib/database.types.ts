export interface CaseRow {
  id: string;
  title: string;
  court: string;
  outcome: string;
  outcome_type: string;
  date: string;
  practice_area: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export type CaseInsert = Omit<CaseRow, "id" | "created_at" | "updated_at">;

export type CaseUpdate = Partial<CaseInsert>;
