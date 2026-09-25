import KioskShell from "./KioskShell";
import type { Service } from "../types";

interface SelectionScreenProps {
  services: Service[];
  onSelect: (service: Service) => void;
  onBack: () => void;
}

// Correspond au cas d'utilisation "Choisir un service".
export default function SelectionScreen({
  services,
  onSelect,
  onBack,
}: SelectionScreenProps) {
  return (
    <KioskShell
      headerLabel="1  Sélection du service"
      stepLabel="Étape 1 sur 3"
      themeClass="border-brand-orange/30"
      footer={
        <button onClick={onBack} className="underline text-slate-400">
          ← Retour / Changer de numéro
        </button>
      }
    >
      <div className="text-center mb-4">
        <h1 className="text-lg font-bold text-slate-800">Que souhaitez-vous faire ?</h1>
        <p className="text-sm text-slate-500 mt-1">
          Touchez directement la prestation de votre choix
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {services.map((s) => (
          <button
            key={s.code}
            onClick={() => onSelect(s)}
            className="flex items-center gap-3 text-left rounded-2xl border border-slate-200 bg-white
                       px-4 py-3 shadow-sm active:scale-[0.98] active:bg-slate-50 transition"
          >
            <span className="text-2xl">{s.icon}</span>
            <span className="flex-1">
              <span className="block font-semibold text-slate-800 text-sm">
                {s.libelle}
              </span>
              <span className="block text-xs text-slate-400">{s.description}</span>
            </span>
            {s.badge && (
              <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-brand-orange/10 text-brand-orange">
                {s.badge}
              </span>
            )}
          </button>
        ))}
      </div>
    </KioskShell>
  );
}
