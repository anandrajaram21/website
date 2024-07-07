import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  security: {
    checkOrigin: true
  },
  experimental: {
    env: {
      schema: {
        TURSO_CONNECTION_URL: envField.string({
          context: "server",
          access: "secret"
        }),
        TURSO_AUTH_TOKEN: envField.string({
          context: "server",
          access: "secret"
        }),
        GITHUB_CLIENT_ID: envField.string({
          context: "server",
          access: "secret"
        }),
        GITHUB_CLIENT_SECRET: envField.string({
          context: "server",
          access: "secret"
        })
      }
    }
  },
  output: "server",
  adapter: vercel()
});