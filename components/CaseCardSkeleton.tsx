export default function CaseCardSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="columns-1 md:columns-2 gap-6 space-y-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="break-inside-avoid p-7 animate-pulse"
          style={{
            backgroundColor: "var(--d-surface)",
            border: "1px solid var(--d-border)",
          }}
        >
          <div
            className="h-5 w-24 rounded-full mb-4"
            style={{ backgroundColor: "var(--d-border)" }}
          />
          <div
            className="h-9 w-40 rounded mb-2"
            style={{ backgroundColor: "var(--d-border)" }}
          />
          <div
            className="h-3 w-20 rounded mb-4"
            style={{ backgroundColor: "var(--d-border)" }}
          />
          <div
            className="h-5 w-3/4 rounded mb-1"
            style={{ backgroundColor: "var(--d-border)" }}
          />
          <div
            className="h-3 w-48 rounded mb-3"
            style={{ backgroundColor: "var(--d-border)" }}
          />
          <div className="space-y-2 mb-4">
            <div
              className="h-3 w-full rounded"
              style={{ backgroundColor: "var(--d-border)" }}
            />
            <div
              className="h-3 w-5/6 rounded"
              style={{ backgroundColor: "var(--d-border)" }}
            />
          </div>
          <div
            className="h-4 w-36 rounded"
            style={{ backgroundColor: "var(--d-border)" }}
          />
        </div>
      ))}
    </div>
  );
}
