interface NumericKeypadProps {
  onDigit: (digit: string) => void;
  onBackspace: () => void;
  onClear: () => void;
  accentClass: string; // tailwind text color class for the "Effacer" label, kept consistent per screen theme
}

const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export default function NumericKeypad({
  onDigit,
  onBackspace,
  onClear,
  accentClass,
}: NumericKeypadProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {KEYS.map((k) => (
        <button
          key={k}
          onClick={() => onDigit(k)}
          className="h-16 rounded-2xl bg-white border border-slate-200 shadow-sm text-2xl font-semibold text-slate-700
                     active:scale-95 active:bg-slate-100 transition"
        >
          {k}
        </button>
      ))}

      <button
        onClick={onClear}
        className={`h-16 rounded-2xl bg-white border border-slate-200 shadow-sm text-sm font-semibold ${accentClass}
                    active:scale-95 active:bg-slate-100 transition`}
      >
        Effacer
      </button>
      <button
        onClick={() => onDigit("0")}
        className="h-16 rounded-2xl bg-white border border-slate-200 shadow-sm text-2xl font-semibold text-slate-700
                   active:scale-95 active:bg-slate-100 transition"
      >
        0
      </button>
      <button
        onClick={onBackspace}
        className="h-16 rounded-2xl bg-white border border-slate-200 shadow-sm text-xl font-semibold text-slate-400
                   active:scale-95 active:bg-slate-100 transition"
        aria-label="Effacer le dernier chiffre"
      >
        ⌫
      </button>
    </div>
  );
}
