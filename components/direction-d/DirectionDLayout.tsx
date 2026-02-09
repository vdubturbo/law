import { ReactNode } from "react";
import DirectionDHeader from "./DirectionDHeader";
import DirectionDFooter from "./DirectionDFooter";

interface DirectionDLayoutProps {
  children: ReactNode;
}

export default function DirectionDLayout({ children }: DirectionDLayoutProps) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: "var(--d-bg)",
        color: "var(--d-ink)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <DirectionDHeader />
      <main className="flex-1">{children}</main>
      <DirectionDFooter />
    </div>
  );
}
