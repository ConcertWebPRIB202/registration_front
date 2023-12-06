import { createRouter, createWebHistory } from 'vue-router'
import Registration from '@/views/Registration.vue'
import RegistrationComplete from '@/views/Registrationcomplete.vue'
import Authorization from '@/views/Authorisation.vue'
import MainPage from '@/views/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'registration',
      component: Registration,
    },
    {
      path: '/complete',
      name: 'RegistrationComplete',
      component: RegistrationComplete,
    },
    {
      path: '/authorisation',
      name: 'Authorisation',
      component: Authorization,
    },
    {
      path: '/mainpage',
      name: 'MainPage',
      component: MainPage,
    },
  ]
})

export default router
