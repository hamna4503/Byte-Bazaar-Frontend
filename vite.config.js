import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:6005", // API server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: rewrite path if necessary
      },
    },
  },
});
