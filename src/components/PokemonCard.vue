<template>
    <div id="pokemon-card" class="pokemon-card" v-if="pokemonInfo !== null">
        <h5 class="pokemon-card__name">{{pokemon.name}}</h5>
        <img class="pokemon-card__img" :src=pokemonInfo.sprites.front_default :alt="pokemon.name">
        <p>{{pokemonInfo.stats[1].stat.name}} - {{pokemonInfo.stats[1].base_stat}}</p>
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
    data(){
        return {
            pokemonInfo: null
        }
    },
    mounted() {
        axios.get(this.pokemon.url).then(response => {
            this.pokemonInfo = response.data;
            console.log(this.pokemonInfo);
        })
    }
}
</script>
