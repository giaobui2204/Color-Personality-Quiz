import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import AllColorMeaning from '../views/AllColorMeaning.vue';
import ColorPersonalityQuiz from '../views/ColorPersonalityQuiz.vue';
import ColorPersonalityResults from '../views/ColorPersonalityResults.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/all_color_meaning', component: AllColorMeaning },
  { path: '/color_personality_quiz', component: ColorPersonalityQuiz },
  { path: '/color_personality_results', component: ColorPersonalityResults }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
