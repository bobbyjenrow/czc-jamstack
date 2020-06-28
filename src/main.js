// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
	
	
import Vue from 'vue';
import PrismicVue from '@prismicio/vue';
import linkResolver from './utils/link-resolver';
import htmlSerializer from './utils/html-serializer';
 

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(PrismicVue, {
    linkResolver: linkResolver,
    htmlSerializer: htmlSerializer
  });
}
