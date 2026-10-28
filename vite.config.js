import { defineConfig } from 'vite';

// Enable the automatic JSX runtime — components don't need `import React`.
export default defineConfig({
  esbuild: { jsx: 'automatic' },
});
