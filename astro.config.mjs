// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://westonwestenborg.github.io',
  base: '/harney-digital-wellness',
  integrations: [tailwind(), preact()]
});