<template>
    <div id="pokemon-list" class="pokemon-list">
        <img class="pokemon-list__img" :src="require(`@/assets/images/pokeball.png`)" alt="pokeball">
        <h1 class="u-text-center u-margin-top-md u-margin-bottom-sm">Pokedex</h1>
        <div class="pokemon-list__cards-container">
                <PokemonCard v-for="(pokemon, index) in pokemons" v-bind:key="index" :pokemon="pokemon" :index="index" /> 
        </div>
        <div id="scroll-trigger" ref="infiniteScrollTrigger">
            <font-awesome-icon icon="spinner" />
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
            pokemons: [],
            nextUrl: '',
            currentUrl: ''
        }
    },
    methods: {
        fetchData(){
            axios.get(this.currentUrl)
                .then((response) => {
                    this.nextUrl = response.data.next;
                    this.pokemons = this.pokemons.concat(response.data.results);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        scrollTrigger() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) =>{
                    if (entry.intersectionRatio > 0 && this.nextUrl) {
                        this.currentUrl = this.nextUrl;
                        this.fetchData();
                    }
                })
            })

            observer.observe(this.$refs.infiniteScrollTrigger);
        }
    },
    created() {
        this.currentUrl = 'https://pokeapi.co/api/v2/pokemon/';
        this.fetchData();
    },
    mounted() {
        this.scrollTrigger();
    }
}
</script>
