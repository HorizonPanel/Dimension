import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const locale = window.default_locale;
const fallback_locale = window.default_locale;
const messages = window.localization;

const i18n = new VueI18n({
	locale: locale, 
	fallbackLocale: fallback_locale, 
	messages
});

export default i18n;