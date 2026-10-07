import { readFile, mkdir, writeFile } from "node:fs/promises";
import ts from "typescript";

// Catalog metadata and independent HTML entries come from the same product copy.
const source = await readFile(new URL("../src/additional-projects.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
const { additionalProjects } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
const escape = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

for (const { app } of additionalProjects) {
  const copy = app.content.ko;
  const title = escape(`${copy.displayName} | ${copy.tagline}`);
  const description = escape(copy.description);
  const url = `https://hiorio.com/${app.detailPath}`;
  const image = app.icon ? `https://hiorio.com/${app.icon}` : "https://hiorio.com/og.png";
  const directory = new URL(`../${app.detailPath}`, import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#f6f5f0" />
    <meta name="description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
    <link rel="canonical" href="${url}" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <title>${title}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`);
}
console.log(`Generated ${additionalProjects.length} product page entries.`);
