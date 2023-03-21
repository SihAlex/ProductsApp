import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      components: path.resolve(__dirname, "./src/components"),
      screens: path.resolve(__dirname, "./src/screens"),
      media: path.resolve(__dirname, "./src/assets"),
      data: path.resolve(__dirname, "./src/data"),
      api: path.resolve(__dirname, "./src/api"),
    },
  },
});
