import Vue from 'vue'
import VueRouter from 'vue-router'
import PokemonList from '../views/PokemonList.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PokemonList',
    component: PokemonList
  },
  {
    path: '/pokemon',
    name: 'PokemonDetails',
    component: () => import(/* webpackChunkName: "pokemonDetails" */ '../views/PokemonDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
