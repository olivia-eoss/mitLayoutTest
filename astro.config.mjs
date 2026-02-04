// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',

			logo: {
				src: './src/assets/Logo-hev.svg',
				replacesTitle: true,
			},
			defaultLocale: 'de',
			locales: {
				root: {
				label: 'Deutsch',
				lang: 'de',
				}
			},
			customCss: [
        		'./src/styles/custom.css',
				'./src/styles/search-styles.css',
      		],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
