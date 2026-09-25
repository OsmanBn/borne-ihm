import KioskShell from "./KioskShell";
import NumericKeypad from "./NumericKeypad";

interface IdentificationScreenProps {
  phone: string;
  error: string | null;
  onDigit: (digit: string) => void;
  onBackspace: () => void;
  onClear: () => void;
  onSubmit: () => void;
}

// Correspond au cas d'utilisation "Saisir numéro de téléphone" (+ «include» Vérifier le
// numéro, + «extend» Afficher un message d'erreur) : une seule et même Borne, dont
// l'état visuel change selon le résultat de la vérification locale.
export default function IdentificationScreen({
  phone,
  error,
  onDigit,
  onBackspace,
  onClear,
  onSubmit,
}: IdentificationScreenProps) {
  const hasError = !!error;

  return (
    <KioskShell
      headerLabel={hasError ? "Erreur de saisie" : "2  Identification"}
      stepLabel="Étape 2 sur 3"
      themeClass={hasError ? "border-brand-red/40" : "border-brand-blue/20"}
      footer={
        hasError
          ? "Un conseiller en agence peut vous assister directement"
          : "Besoin d'aide ? Adressez-vous à un accueil"
      }
    >
      {hasError ? (
        <div className="flex flex-col items-center text-center mb-4">
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-2xl mb-3">
            ⚠️
          </div>
          <h1 className="text-lg font-bold text-slate-800">Numéro invalide</h1>
          <div className="mt-3 w-full text-sm bg-red-50 text-brand-red rounded-xl px-3 py-2">
            {error}
          </div>
        </div>
      ) : (
        <div className="text-center mb-4">
          <h1 className="text-lg font-bold text-slate-800">Entrez votre numéro</h1>
          <p className="text-sm text-slate-500 mt-1">
            Pour recevoir le lien de votre service par SMS ou WhatsApp
          </p>
        </div>
      )}

      <div
        className={`mb-5 h-14 rounded-xl border flex items-center px-4 text-xl tracking-widest font-mono
          ${hasError ? "border-red-200 text-slate-400" : "border-slate-200 text-slate-800"}`}
      >
        {phone || (
          <span className="text-slate-300 font-sans text-base">
            {hasError ? "Tapez votre numéro..." : "Numéro de téléphone"}
          </span>
        )}
      </div>

      <NumericKeypad
        onDigit={onDigit}
        onBackspace={onBackspace}
        onClear={onClear}
        accentClass={hasError ? "text-brand-red" : "text-brand-blue"}
      />

      <button
        onClick={onSubmit}
        disabled={phone.length === 0}
        className="mt-5 w-full h-14 rounded-2xl bg-brand-orange text-white font-semibold text-base
                   disabled:opacity-40 active:scale-[0.98] transition shadow-md"
      >
        {hasError ? "Valider à nouveau →" : "Valider →"}
      </button>
    </KioskShell>
  );
}
