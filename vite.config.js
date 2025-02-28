// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [tailwindcss(), react()],
//   base: '/anishkarki_website/',
// });
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/anishkarki_website/', // Your GitHub repository name
})
