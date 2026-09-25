import type { ReactNode } from "react";

interface KioskShellProps {
  headerLabel: string; // e.g. "1  Identification"
  stepLabel: string; // e.g. "Étape 1 sur 3"
  themeClass: string; // border/ring color class driving the card accent
  children: ReactNode;
  footer?: ReactNode;
}

export default function KioskShell({
  headerLabel,
  stepLabel,
  themeClass,
  children,
  footer,
}: KioskShellProps) {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-100 p-1 overflow-hidden select-none">
  <div
    className={`w-full max-w-2xl h-[calc(100vh-8px)] bg-white rounded-3xl shadow-xl overflow-hidden border-2 flex flex-col ${themeClass}`}
  >
    {/* 1. Entête de la Borne (Fixe) */}
    <div className="bg-navy text-white px-5 py-3 flex items-center justify-between text-sm shrink-0">
      <span className="font-semibold">Borne #04</span>
      <span className="opacity-70">Client 04 · FR</span>
    </div>

    {/* 2. Indicateur d'étape (Fixe) */}
    <div className="px-5 pt-4 flex items-center justify-between shrink-0">
      <span className="text-sm font-semibold text-slate-700">{headerLabel}</span>
      <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-500 font-medium">
        {stepLabel}
      </span>
    </div>

    {/* 3. Zone de contenu (Dynamique et défilante si besoin) */}
    <div className="px-6 py-4 flex-1 overflow-y-auto min-h-0 scrollbar-thin">
      {children}
    </div>

    {/* 4. Pied de page (Fixe, si présent) */}
    {footer && (
      <div className="px-6 pb-4 text-center text-xs text-slate-400 shrink-0">
        {footer}
      </div>
    )}
  </div>
</div>

    
  );
}
