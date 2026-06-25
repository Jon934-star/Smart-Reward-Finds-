import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://smartrewardfinds.com', // EDIT: Replace with your actual domain
  output: 'static',
});
