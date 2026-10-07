import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { SHOW_HORROR_DOPAMINE } from "./src/visibility";
import { growingProjects } from "./src/growing-projects";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        root: `${root}index.html`,
        apps: `${root}apps/index.html`,
        productivity: `${root}collections/productivity/index.html`,
        dohwaji: `${root}apps/dohwaji/index.html`,
        timeflower: `${root}apps/timeflower/index.html`,
        timeroots: `${root}apps/timeroots/index.html`,
        dailyPlank: `${root}apps/daily-plank/index.html`,
        biondamae: `${root}apps/biondamae/index.html`,
        ssakMemo: `${root}apps/ssak-memo/index.html`,
        leafMessage: `${root}apps/leaf-message/index.html`,
        ringtone: `${root}apps/ringtone/index.html`,
        ...Object.fromEntries(growingProjects.map(({ app }) => [app.id, `${root}${app.detailPath}index.html`])),
        ...(SHOW_HORROR_DOPAMINE ? {
          channels: `${root}channels/index.html`,
          horror: `${root}horror/index.html`,
        } : {}),
      },
    },
  },
});
