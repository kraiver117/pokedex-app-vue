<template>
    <div id="pokemon-list" class="pokemon-list">
        <h1 class="u-text-center">Pokemon List</h1>
        <div class="row">
            <div class="col-1-of-4" v-for="(pokemon, index) in data" v-bind:key="index">
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
            data: []
        }
    },
    mounted() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20').then(response => {
            this.data = response.data.results;
        })
    }
}
</script>
