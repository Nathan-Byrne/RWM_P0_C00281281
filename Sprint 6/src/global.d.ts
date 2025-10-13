/// <reference types="svelte" />

declare module '$lib/*' {
  import type { SvelteComponentTyped } from "svelte";
  const component: typeof SvelteComponentTyped;
  export default component;
}
