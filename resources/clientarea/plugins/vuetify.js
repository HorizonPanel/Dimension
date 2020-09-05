import Vue from 'vue';
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib';
import VuetifyToast from 'vuetify-toast-snackbar';

Vue.use(Vuetify, {
	components: {
	 	 VSnackbar,
		VBtn,
		VIcon
	}
});
Vue.use(VuetifyToast);

const opts = {
	theme: {
	  dark: false,
	},
};

export default new Vuetify(opts)