import Vue  from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/connected/',
			name: 'Home',
			component: () => import('clientarea/views/Home/Index.vue')
		},
	]
});

export default router;