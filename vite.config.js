import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { navItems } from "./src/data/site.js";
const paths = new Set(
  navItems.map((item) => item.to).filter((path) => path !== "/"),
);
export default defineConfig({
  plugins: [
    react(),
    {
      name: "prerendered-preview-routes",
      configurePreviewServer(server) {
        server.middlewares.use((req, _res, next) => {
          const url = new URL(req.url, "http://localhost");
          const route = url.pathname.replace(/\/+$/, "");
          if (paths.has(route)) req.url = `${route}/index.html${url.search}`;
          next();
        });
      },
    },
  ],
});
