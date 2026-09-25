import KioskShell from "./KioskShell";
import type { Canal, Service } from "../types";

interface ConfirmationScreenProps {
  service: Service;
  maskedPhone: string;
  canal: Canal;
  onFinish: () => void;
}

// Correspond à la fin du parcours : la HistoriqueSollicitation a déjà été
// "enregistrée" côté ServeurApplication (simulé) au moment de l'envoi.
export default function ConfirmationScreen({
  service,
  maskedPhone,
  canal,
  onFinish,
}: ConfirmationScreenProps) {
  return (
    <KioskShell
      headerLabel="3  Demande confirmée"
      stepLabel="Étape 3 sur 3"
      themeClass="border-brand-green/30"
      footer="Retour automatique à l'accueil dans quelques secondes"
    >
      <div className="flex flex-col items-center text-center mb-5">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-3xl mb-3">
          ✅
        </div>
        <h1 className="text-lg font-bold text-slate-800">Demande enregistrée !</h1>
        <p className="text-sm text-slate-500 mt-1">
          Un lien sécurisé vous a été envoyé par {canal} pour :
          <br />
          <span className="font-semibold text-slate-700">{service.libelle}</span>
        </p>
      </div>

      <div className="rounded-2xl border border-green-100 bg-green-50/50 px-4 py-3 text-center mb-5">
        <span className="block text-[11px] uppercase tracking-wide text-green-700 font-semibold mb-1">
          Numéro de destination
        </span>
        <span className="text-lg font-mono tracking-widest text-slate-700">
          {maskedPhone}
        </span>
      </div>

      <p className="text-xs text-slate-400 text-center mb-5">
        Cliquez sur le lien reçu pour consulter votre facture ou finaliser votre
        démarche.
      </p>

      <button
        onClick={onFinish}
        className="w-full h-14 rounded-2xl bg-brand-orange text-white font-semibold text-base
                   active:scale-[0.98] transition shadow-md"
      >
        Terminer ✓
      </button>
    </KioskShell>
  );
}
