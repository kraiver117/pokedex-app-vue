<template>
    <div id="pokemon-list" class="pokemon-list">
        <img class="pokemon-list__img" :src="require(`@/assets/images/pokeball.png`)" alt="pokeball">
        <h1 class="u-text-center">Pokemon List</h1>
        <div class="row">
            <div class="col-1-of-4" v-for="(pokemon, index) in pokemons" v-bind:key="index">
                <PokemonCard :pokemon="pokemon" :index="index" /> 
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import PokemonCard from '../components/PokemonCard.vue'

export default {
    name: 'PokemonList',
    components: {
        PokemonCard
    },
    data() {
        return {
            pokemons: []
        }
    },
    mounted() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=4').then(response => {
            this.pokemons = response.data.results;
        })
    }
}
</script>
