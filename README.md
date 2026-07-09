# SECAB Couplage Expert V7

Version GitHub propre : **une seule base React/Vite** pour :

- PWA terrain / Netlify
- APK Android via Capacitor
- logiciel Windows via Electron

## Formules EDF B13-23 intégrées

Référentiel mémento EDF B13-23 :

```txt
Rc = (RM + RNi - RMN) / 2
c = Rc / RM
Conforme si c < 0,15
```

L'ancienne logique `RC / RN` ne doit plus être utilisée pour le coefficient de couplage.

## Lancer en local

```bash
npm install
npm run dev
```

## Générer la PWA

```bash
npm run build
```

Le dossier publié est `dist`.

## Générer le logiciel Windows

```bash
npm install
npm run dist:win
```

Résultat dans `release/windows`.

## Générer l'APK Android

En local avec Android Studio installé :

```bash
npm install
npm run android:init
npm run android:open
```

Puis dans Android Studio : **Build > Build Bundle(s) / APK(s) > Build APK(s)**.

Sur GitHub : lancer le workflow **Android APK Build** manuellement.
