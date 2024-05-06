import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Path to exercise folder
 */
const exercisePath = "01_Dzien_1/02_Stan_aplikacji/02_Zadanie_2";

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  server: {
    port: 3000,
  },
  plugins: [react()],
});
