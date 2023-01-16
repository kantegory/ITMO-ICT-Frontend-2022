import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import PersonalView from '@/views/PersonalView.vue'
import EntryView from '@/views/EntryView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import Graphics from '@/views/Graphics.vue'
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: MainView
		},
		{
			path: '/personal/',
			name: 'personal',
			component: PersonalView
		},
		{
			path: '/entry/',
			name: 'entry',
			component: EntryView
		},
		{
			path: '/registration/',
			name: 'registration',
			component: RegistrationView
		},
		{
			path: '/Graphics/',
			name: 'Graphics',
			component: Graphics
		},
	]
})

export default router
