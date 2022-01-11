<template>
    <div id="pokemon-list" class="pokemon-list">
        <img 
            class="pokemon-list__img" 
            :src="require(`@/assets/images/pokeball.png`)" 
            alt="pokeball"
        >
        <img 
            class="pokemon-list__logo u-text-center" 
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" 
            alt="pokemon logo" 
            width="200"  
            height="80" 
        />
        <div class="pokemon-list__search-input">
            <input class="pokemon-list__search-input-el" type="text" v-model="search" placeholder="Search about a pokemon using name">
        </div>
        <div class="pokemon-list__cards-container">
            <PokemonCard v-for="pokemon in filteredPokemons" v-bind:key="pokemon.name" :pokemon="pokemon" /> 
        </div>
        <h3 class="u-text-center" v-if="filteredPokemons.length === 0">"No results were found with {{this.search}}"</h3>
        <div id="scroll-trigger" ref="infiniteScrollTrigger" v-show="filteredPokemons.length === pokemons.length">
            <Spinner color="#ef5350" :scale=0.5 />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import PokemonCard from '../components/PokemonCard.vue'
import Spinner from '../components/Spinner.vue'

export default {
    name: 'PokemonList',
    components: {
        PokemonCard,
        Spinner
    },
    data() {
        return {
            pokemons: [],
            allPokemons: [],
            nextUrl: '',
            currentUrl: '',
            filterUrl: '',
            search: ''
        }
    },
    methods: {
        fetchData(url){
            axios.get(url)
                .then((response) => {
                    this.nextUrl = response.data.next;
                    this.pokemons = this.pokemons.concat(response.data.results);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        fetchAllPokemons(url){
            axios.get(url)
                .then((response) => {
                    this.allPokemons = response.data.results;
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
                        this.fetchData(this.currentUrl);
                    }
                })
            })

            observer.observe(this.$refs.infiniteScrollTrigger);
        }
    },
    computed: {
        filteredPokemons(){
            if(this.search !== ''){
                return this.allPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.search.toLowerCase()));
            } else {
                return this.pokemons;
            }
        }
    },
    created() {
        this.filterUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1200';
        this.currentUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=16';
        this.fetchAllPokemons(this.filterUrl);
        this.fetchData(this.currentUrl);
    },
    mounted() {
        this.scrollTrigger();
    }
}
</script>
