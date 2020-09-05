/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue';
import Vuetify from 'clientarea/plugins/vuetify';
import Route from 'clientarea/plugins/routes';
import App from 'clientarea/App.vue';
import i18n from 'clientarea/plugins/multilanguage';

const app = new Vue({
    vuetify: Vuetify,
    el: '#app',
    router: Route,
    i18n,
    render: h => h(App)
});

export default app;