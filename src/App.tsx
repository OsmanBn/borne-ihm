import { useState } from "react";
import IdentificationScreen from "./components/IdentificationScreen";
import SelectionScreen from "./components/SelectionScreen";
import ConfirmationScreen from "./components/ConfirmationScreen";
import { services } from "./data/services";
import type { Canal, Service, Step } from "./types";

const MAX_DIGITS = 10;

// Simule la vérification locale du numéro faite par la Borne (format uniquement,
// cf. §6 EF-02 et §9.1 du document de spécification : pas d'appel à un système
// de facturation dans le périmètre actuel).
function verifierNumero(numero: string): string | null {
  if (numero.length !== MAX_DIGITS) {
    return "Ce numéro comporte une erreur. Veuillez composer vos 10 chiffres pour continuer.";
  }
  if (!numero.startsWith("0")) {
    return "Le numéro doit commencer par 0. Veuillez réessayer.";
  }
  return null;
}

function maskPhone(numero: string): string {
  // Ex: 0672451298 -> 06 •• •• •• 98
  const start = numero.slice(0, 2);
  const end = numero.slice(-2);
  return `${start} •• •• •• ${end}`;
}

// Simule ServeurApplication.demanderEnvoiLien(numero, service) : retrouve
// l'URL fixe du service et déclenche l'envoi par la passerelle de messagerie.
// Journalise aussi, côté simulation, l'équivalent de HistoriqueSollicitation.
async function demanderEnvoiLien(
  numero: string,
  service: Service
): Promise<{ canal: Canal }> {
  console.log("[HistoriqueSollicitation]", {
    numeroTelephone: numero,
    service: service.code,
    dateHeure: new Date().toISOString(),
  });
  await new Promise((resolve) => setTimeout(resolve, 600)); // latence réseau simulée
  const canal: Canal = Math.random() > 0.3 ? "WhatsApp" : "SMS";
  console.log(`[APIMessagerie] envoi vers ${numero} via ${canal} → ${service.urlApplication}`);
  return { canal };
}

export default function App() {
  const [step, setStep] = useState<Step>("selection");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [canal, setCanal] = useState<Canal>("SMS");
  const [sending, setSending] = useState(false);

  function handleDigit(d: string) {
    if (phone.length >= MAX_DIGITS) return;
    setPhone((p) => p + d);
  }
  function handleBackspace() {
    setPhone((p) => p.slice(0, -1));
  }
  function handleClear() {
    setPhone("");
  }

  function handleSubmitPhone() {
    const result = verifierNumero(phone);
    if (result) {
      setError(result);
      setPhone(""); // on ne réaffiche pas le numéro invalide (cf. maquette)
      setStep("erreur");
    } else {
      setError(null);
      setStep("confirmation");
    }
  }

  async function handleSelectService(service: Service) {
    setSelectedService(service);
    setSending(true);
    const { canal } = await demanderEnvoiLien(phone, service);
    setCanal(canal);
    setSending(false);
    setStep("identification");
  }

  function handleBackToPhone() {
    setPhone("");
    setError(null);
    setStep("identification");
  }

  function handleFinish() {
    setPhone("");
    setError(null);
    setSelectedService(null);
    setStep("identification");
  }

  if (step === "identification" || step === "erreur") {
    return (
      <IdentificationScreen
        phone={phone}
        error={step === "erreur" ? error : null}
        onDigit={handleDigit}
        onBackspace={handleBackspace}
        onClear={handleClear}
        onSubmit={handleSubmitPhone}
      />
    );
  }

  if (step === "selection") {
    return (
      <>
        <SelectionScreen
          services={services}
          onSelect={handleSelectService}
          onBack={handleBackToPhone}
        />
        {sending && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center text-white text-sm">
            Envoi en cours...
          </div>
        )}
      </>
    );
  }

  if (step === "confirmation" && selectedService) {
    return (
      <ConfirmationScreen
        service={selectedService}
        maskedPhone={maskPhone(phone)}
        canal={canal}
        onFinish={handleFinish}
      />
    );
  }

  return null;
}
