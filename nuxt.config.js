import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin';

/**
 * template from https://github.com/nuxt/nuxt.js/blob/dev/examples/with-vuetify/nuxt.config.js
 */
export default {
	/*
	** Head elements
	** Add Roboto font and Material Icons
	*/
	head: {
		link: [
			{
				rel: 'stylesheet',
				type: 'text/css',
				href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
			}
		]
	},

	build: {
		plugins: [new VuetifyLoaderPlugin()],
		extractCSS: true,
		transpile: ['vuetify/lib'],
	},
	/*
	** Load Vuetify into the app
	*/
	plugins: ['~/plugins/vuetify'],
	/*
	** Load Vuetify CSS globally
	*/
	css: ['~/assets/app.styl']
};