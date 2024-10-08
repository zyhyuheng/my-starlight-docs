import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			// 为此网站设置英语为默认语言。
			defaultLocale: 'en',
			locales: {
			  // 英文文档在 `src/content/docs/en/` 中。
			  en: {
				label: 'English',
			  },
			  // 简体中文文档在 `src/content/docs/zh-cn/` 中。
			  'zh-cn': {
				label: '简体中文',
				lang: 'zh-CN',
			  },
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
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
