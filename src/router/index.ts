import { createRouter, createWebHistory } from 'vue-router'
import Registration from '@/components/Registration.vue'
import RegistrationComplete from '@/components/Registrationcomplete.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Registration',
      component: Registration,
    },
    {
      path: '/RegistrationComplete',
      name: 'RegistrationComplete',
      component: RegistrationComplete,
    }
  ]
})

export default router
