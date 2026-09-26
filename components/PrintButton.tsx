"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full border border-cyan-400/30 px-4 py-2 text-sm"
    >
      Print / Save PDF
    </button>
  );
}
