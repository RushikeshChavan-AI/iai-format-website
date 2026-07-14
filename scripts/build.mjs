import { copyFile, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

await copyFile(resolve(root, "index.html"), resolve(dist, "index.html"));
await copyFile(resolve(root, "styles.css"), resolve(dist, "styles.css"));

await writeFile(resolve(dist, "robots.txt"), [
  "User-agent: *",
  "Allow: /",
  ""
].join("\n"));

console.log(`Built static site into ${dist}`);
