import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  // This tells GitHub Pages where to find your files
  base: '/LOGIC-SIEVE/', 
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Standard GitHub Pages build folder
    outDir: "dist",
    emptyOutDir: true,
  },
});
