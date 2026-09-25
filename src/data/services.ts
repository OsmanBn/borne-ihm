import type { Service } from "../types";

// En production, ce catalogue proviendrait du ServeurApplication
// (classe Service : code, libelle, urlApplication).
/*export const services: Service[] = [
  {
    code: "PAIEMENT",
    libelle: "Payer une facture",
    description: "Réglez votre facture d'électricité en ligne",
    icon: "💳",
    badge: "RAPIDE",
    urlApplication: "https://web.eneo-app.example/paiement",
  },
  {
    code: "SOLDE",
    libelle: "Consulter le solde",
    description: "Voir la consommation et le montant dû",
    icon: "📊",
    urlApplication: "https://web.eneo-app.example/solde",
  },
  {
    code: "RECHARGE",
    libelle: "Recharger en prépayé",
    description: "Acheter du crédit SMS immédiatement",
    icon: "🔋",
    urlApplication: "https://web.eneo-app.example/recharge",
  },
  {
    code: "RECLAMATION",
    libelle: "Déposer une réclamation",
    description: "Panne, contestation ou compteur",
    icon: "📢",
    urlApplication: "https://web.eneo-app.example/reclamation",
  },
  {
    code: "RELEVE",
    libelle: "Obtenir un relevé",
    description: "Historique d'électricité et attestations",
    icon: "🧾",
    urlApplication: "https://web.eneo-app.example/releve",
  },
];*/

export const services: Service[] =[
  {
    code: "MY_SOCADEL",
    libelle: "Agence en ligne (MySocadel)",
    description: "Créez votre compte et gérez vos abonnements en ligne",
    icon: "👤",
    urlApplication: "#",
  },
  {
    code: "DEVIS_BRANCHEMENT",
    libelle: "Devis de branchement",
    description: "Faites votre demande de nouveau branchement en ligne",
    icon: "🔌",
    urlApplication: "#",
  },
  {
    code: "FACTURE_DIGITALE",
    libelle: "Facture digitale",
    description: "Abonnez-vous pour recevoir vos factures par e-mail ou SMS",
    icon: "📧",
    urlApplication: "#",
  },
  {
    code: "RECLAMATION_COMMERCIALE",
    libelle: "Réclamation commerciale",
    description: "Enregistrez et suivez vos réclamations liées à vos factures",
    icon: "✍️",
    urlApplication: "#",
  },
  {
    code: "INCIDENT_TECHNIQUE",
    libelle: "Incident technique",
    description: "Déclarez une panne ou un danger sur le réseau électrique",
    icon: "⚠️",
    urlApplication: "#",
  },
  {
    code: "TRAVAUX_PROGRAMMES",
    libelle: "Travaux programmés",
    description: "Consultez le calendrier des interruptions de service pour maintenance",
    icon: "🛠️",
    urlApplication: "#",
  },
  {
    code: "DONNEES_CLIENT",
    libelle: "Mise à jour des données",
    description: "Enregistrez vos informations (NIU, CNI, contrat, compteur)",
    icon: "📝",
    urlApplication: "#",
  },
  {
    code: "LIVE_CHAT",
    libelle: "Live Chat",
    description: "Discutez en direct avec un de nos téléconseillers",
    icon: "💬",
    urlApplication: "#",
  },
  {
    code: "LUMI_IA",
    libelle: "Lumi (IA Socadel)",
    description: "Posez vos questions à notre assistant virtuel intelligent",
    icon: "🤖",
    urlApplication: "#",
  }
];
