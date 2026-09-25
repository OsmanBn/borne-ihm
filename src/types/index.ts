export interface Service {
  code: string;
  libelle: string;
  description: string;
  icon: string; // emoji or icon key, kept simple for the prototype
  badge?: string;
  urlApplication: string;
}

export type Step = "identification" | "erreur" | "selection" | "confirmation";

export type Canal = "SMS" | "WhatsApp";
