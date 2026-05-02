import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { handlePortfolioAssistantRequest } from "./server/portfolioAssistantHandler.js";

function portfolioAssistantDevApiPlugin() {
  return {
    name: "portfolio-assistant-dev-api",
    configureServer(server) {
      server.middlewares.use("/api/portfolio-assistant", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: "Method not allowed." }));
          return;
        }

        const chunks = [];

        req.on("data", (chunk) => {
          chunks.push(chunk);
        });

        req.on("end", async () => {
          const body = Buffer.concat(chunks).toString("utf8");
          const request = new Request("http://localhost/api/portfolio-assistant", {
            method: "POST",
            headers: {
              "content-type": req.headers["content-type"] || "application/json",
            },
            body,
          });

          const response = await handlePortfolioAssistantRequest(request, {
            env: process.env,
            fetchImpl: fetch,
          });

          res.statusCode = response.status;
          response.headers.forEach((value, key) => {
            res.setHeader(key, value);
          });
          res.end(await response.text());
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), portfolioAssistantDevApiPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
