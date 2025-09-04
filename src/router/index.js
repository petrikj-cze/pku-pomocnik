import { createRouter, createWebHistory } from 'vue-router'

// Komponenty
import AddIngredient from '../components/AddIngredient.vue'
import ListIngredients from '../components/ListIngredients.vue'
import ListMeals from '../components/ListMeals.vue'
import DayView from '../components/DayView.vue'
import HomePage from '../components/HomePage.vue'
import UserProfile from '../components/UserProfile.vue'
import About from '../components/About.vue'
import AboutPKU from '../components/AboutPKU.vue'
import UserInterface from '../components/UserInterface.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/day-view',
      name: 'dayview',
      component: DayView,
    },
    {
      path: '/',
      name: 'homepage',
      component: HomePage,
    },
    {
      path: '/add-ingredient',
      name: 'add-ingredient',
      component: AddIngredient,
    },
    {
      path: '/list-ingredients',
      name: 'list-ingredients',
      component: ListIngredients,
    },
    {
      path: '/list-meals',
      name: 'list-meals',
      component: ListMeals,
    },
    {
      path: '/user-profile',
      name: 'user-profile',
      component: UserProfile,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/about-pku',
      name: 'about-pku',
      component: AboutPKU,
    },
    {
      path: '/user-interface',
      name: 'user-interface',
      component: UserInterface,
    },
  ],
})

export default router
