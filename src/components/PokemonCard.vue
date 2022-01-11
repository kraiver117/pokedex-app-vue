<template>
    <div 
        id="pokemon-card" 
        class="pokemon-card" 
        :style="{
            backgroundColor: getColorType(pokemonInfo.types[0].type.name),
            opacity: 0.9
        }"
        v-if="pokemonInfo.types.length > 0"
        @click="pokemonDetails()" 
    >
            <img class="pokemon-card__pokeball" :src="require(`@/assets/images/pokeball-white.png`)" alt="pokeball-white">
            <h5 class="pokemon-card__name">#{{pokemonInfo.id}}{{' '}}{{pokemonInfo.name}}</h5>
            <img 
                v-show="isLoaded"
                id="pokemon-img" 
                class="pokemon-card__img"
                :src="pokemonInfo.picture" 
                :alt="pokemonInfo.name"
                @load="onImgLoad"
            />
            <Spinner v-if="!isLoaded" color="white" :scale="0.4" />
            <p>Attack - {{pokemonInfo.attack}}</p>
            <h5>Types</h5>
            <span class="pokemon-card__types pill pill--white u-margin-right-xs" v-for="{type} in pokemonInfo.types" v-bind:key="type.name">
                {{type.name}}
            </span>
    </div>
</template>

<script>
import axios from 'axios'
import Spinner from '../components/Spinner.vue'
import { getColorType } from '../utils/colorType';

export default {
    name: 'PokemonCard',
    props: {
        pokemon: Object
    },
    components: {
        Spinner
    },
    methods: {
        pokemonDetails() {
            this.$router.push({ name: 'PokemonDetails', params: { data: this.data, pokemonInfo: this.pokemonInfo }})
        },
        getColorType(type) {
            const color = getColorType(type);
            this.pokemonInfo.colorDominant = color;
            return color;
        },
        onImgLoad() {
            this.isLoaded = true;
        }
    },
    data(){
        return {
            pokemonInfo: {
                id: '',
                name: '',
                picture: '',
                types: [],
                attack: 0,
                colorDominant: ''
            },
            data: {},
            isLoaded: false
        }
    },
    mounted() {
        const urlParts = this.pokemon.url.split('/');
        const id = urlParts[urlParts.length - 2];
        const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        this.pokemonInfo.picture = picture;

        axios.get(this.pokemon.url).then(response => {
            this.pokemonInfo.id = id;
            this.pokemonInfo.name = this.pokemon.name;
            this.pokemonInfo.attack = response.data.stats[1].base_stat;
            this.pokemonInfo.types = response.data.types;
            this.data = response.data;
        })
    }
}
</script>
