/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title:
		'WhatsApp Business Platform Node.js SDK for the Cloud API, hosted by Meta',
	tagline: 'WhatsApp Business Platform SDK',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://your-docusaurus-test-site.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/WhatsApp-Nodejs-SDK/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'Meta', // Usually your GitHub org/user name.
	projectName:
		'WhatsApp Business Platform Node.js SDK for the Cloud API, hosted by Meta', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: 'dark',
				// disableSwitch: false
			},
			// Replace with your project's social card
			image: 'img/docusaurus-social-card.jpg',
			navbar: {
				title:
					'WhatsApp Business Platform Node.js SDK for the Cloud API, hosted by Meta',
				logo: {
					alt: 'WhatsApp logo',
					src: 'img/Digital_Glyph_Green.svg',
				},
				items: [
					{
						href: 'https://github.com/WhatsApp/WhatsApp-Nodejs-SDK',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			announcementBar: {
				id: 'archived',
				content:
				  'The project is archived - go <a target="_blank" rel="noopener noreferrer" href="https://github.com/WhatsApp/WhatsApp-Nodejs-SDK/issues/31">this GitHub issue</a> to learn more.',
				backgroundColor: '#fafbfc',
				textColor: '#091E42',
				isCloseable: false,
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Cloud API',
								to: 'https://developers.facebook.com/docs/whatsapp/cloud-api',
							},
							{
								label: 'Business Management API',
								to: 'https://developers.facebook.com/docs/whatsapp/business-management-api',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'LinkedIn',
								href: 'https://www.linkedin.com/showcase/whatsapp-business/',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/whatsappbiz',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'GitHub',
								href: 'https://github.com/WhatsApp/WhatsApp-Nodejs-SDK',
							},
						],
					},
					{
						title: 'Legal',
						items: [
							{
								label: 'Privacy',
								href: 'https://opensource.fb.com/legal/privacy',
								target: '_blank',
								rel: 'noreferrer noopener',
							},
							{
								label: 'Terms',
								href: 'https://opensource.fb.com/legal/terms',
								target: '_blank',
								rel: 'noreferrer noopener',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Meta Platforms, Inc. Built for the dev community with love by Rashed Talukder using Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
