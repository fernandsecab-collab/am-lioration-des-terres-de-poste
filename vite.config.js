import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT ELECTRON + PWA
// base './' évite la fenêtre blanche dans Electron :
// le build Vite génère des chemins relatifs vers les fichiers JS/CSS.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
