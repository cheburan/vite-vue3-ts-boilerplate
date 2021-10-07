import Vue from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import views from '@/views';


const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: views.Home
	},
	// Catch any unmatched routes
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: views.Home
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router

