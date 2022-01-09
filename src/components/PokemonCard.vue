<template>
    <div 
        id="pokemon-card" 
        class="pokemon-card" 
        v-if="pokemonInfo !== null" 
        @click="pokemonDetails()" 
        :style="{
            backgroundColor: colorType(pokemonInfo.types[0].type.name)
        }"
    >
        <h5 class="pokemon-card__name">#{{pokemonInfo.id}}{{' '}}{{pokemonInfo.name}}</h5>
        <img 
            id="pokemon-img" 
            class="pokemon-card__img"
            :src="pokemonInfo.picture" 
            :alt="pokemonInfo.name"
        >
        <p>Attack - {{pokemonInfo.attack}}</p>
        <p class="pokemon-card__types" v-for="(types, index) in pokemonInfo.types" v-bind:key="index">
            {{types.type.name}}
        </p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'PokemonCard',
    props: {
        pokemon: Object
    },
    methods: {
        pokemonDetails() {
            this.$router.push({ name: 'PokemonDetails', params: { data: this.data, pokemonInfo: this.pokemonInfo }})
        },
        colorType(type) {
            switch(type){
                case 'grass':
                    this.pokemonInfo.colorDominant = '#48d0b1';
                    return '#48d0b1';
                case 'fire': 
                    this.pokemonInfo.colorDominant = '#fb6c6c';
                    return '#fb6c6c';
                case 'water': 
                    this.pokemonInfo.colorDominant = '#76bdfe';
                    return '#76bdfe';
                case 'bug': 
                    this.pokemonInfo.colorDominant = '#f7786b';
                    return '#f7786b';
                case 'normal': 
                    this.pokemonInfo.colorDominant = '#f7786b';
                    return '#f7786b';
            }
            
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
            data: {}
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
