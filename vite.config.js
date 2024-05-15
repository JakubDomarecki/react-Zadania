import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Path to exercise folder
 */
const exercisePath = "07_Dzien_4/03_JSON_Server/01_Zadanie";

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
