# Borne IHM — Prototype React

Prototype fonctionnel de l'interface tactile de la Borne (paiement de facture
d'électricité), conforme au document de spécification technique v2 :
saisie du numéro, vérification locale, sélection du service, envoi simulé
d'un lien par SMS/WhatsApp, confirmation.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrez l'URL affichée (par défaut http://localhost:5173). Le meilleur rendu
s'obtient en réduisant la largeur de la fenêtre du navigateur (l'app est
pensée pour un écran portrait de borne).

## Structure

```
src/
  components/
    KioskShell.tsx            cadre commun (en-tête, étape, carte)
    NumericKeypad.tsx         clavier numérique tactile réutilisable
    IdentificationScreen.tsx  écran de saisie + état d'erreur (même écran)
    SelectionScreen.tsx       catalogue des services
    ConfirmationScreen.tsx    écran de fin avec numéro masqué
  data/
    services.ts               catalogue simulé (correspond à la classe Service)
  types/
    index.ts                  types partagés (Service, Step, Canal)
  App.tsx                     machine à états du parcours + simulation
                               de ServeurApplication / APIMessagerie
```

## Ce qui est simulé (à brancher plus tard)

- `verifierNumero()` dans `App.tsx` : vérification locale de format
  uniquement (10 chiffres, commence par 0), conformément au périmètre
  actuel du document de spécification. Aucun appel réseau.
- `demanderEnvoiLien()` dans `App.tsx` : simule l'appel au
  `ServeurApplication` (délai réseau factice, choix aléatoire du canal
  SMS/WhatsApp). Les événements sont loggés dans la console du navigateur
  avec les préfixes `[HistoriqueSollicitation]` et `[APIMessagerie]` pour
  visualiser ce qui serait réellement envoyé au backend.
- `services.ts` : catalogue en dur ; en production, il proviendrait d'un
  appel au `ServeurApplication`.

## Prochaines étapes possibles

- Brancher un vrai backend (NestJS, cf. discussion) sur `demanderEnvoiLien`.
- Ajouter un mode plein écran / kiosque (`document.documentElement.requestFullscreen()`)
  et désactiver le clic droit / raccourcis clavier si déployé tel quel dans
  un navigateur en mode kiosque plutôt que dans Electron.
- Ajouter un timeout d'inactivité qui ramène automatiquement à l'écran
  d'identification (cas non couvert dans ce prototype).
