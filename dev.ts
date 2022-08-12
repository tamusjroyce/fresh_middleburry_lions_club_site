#!/usr/bin/env -S deno run -A --watch=static/,routes/

export enum dirs {
  "routes",
  "islands",
  "components"
}

import { dev } from "./utils/generators.ts";
// import dev from "$fresh/dev.ts";
await dev(import.meta.url, "./main.ts");
