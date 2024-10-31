import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllColorMeaning from '@/views/AllColorMeaning.vue';
import ColorPersonalityQuizVue from '@/views/ColorPersonalityQuiz.vue';
import ColorPersonalityResultsVue from '@/views/ColorPersonalityResults.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
 
      component: () => import('../views/AboutView.vue')
    },
    { path: '/all_color_meaning', component: AllColorMeaning },
    { path: '/color_personality_quiz', component: ColorPersonalityQuizVue},
    { path: '/color_personality_results', component: ColorPersonalityResultsVue},
  ]
})

export default router
