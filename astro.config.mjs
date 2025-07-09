// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://harneydigitalwellness.com',
  base: '/',
  integrations: [tailwind(), preact()]
});