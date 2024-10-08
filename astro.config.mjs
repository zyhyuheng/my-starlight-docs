import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '我的文档',
			locales: {
		        root: {
		          label: '简体中文',
		          lang: 'zh-CN',
		        },
		      },
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			// 侧边栏配置
			sidebar: [
				{
					label: '指南',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '指南', slug: '指南/example' },
					],
				},
				{
					label: '参考',
					autogenerate: { directory: '参考' },
				},
			],
		}),
	],
});
