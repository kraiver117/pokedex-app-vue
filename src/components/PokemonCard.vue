<template>
    <div id="pokemon-card" class="pokemon-card" v-if="pokemonInfo !== null">
        <h5 class="pokemon-card__name">#{{pokemonInfo.id}}{{' '}}{{pokemonInfo.name}}</h5>
        <img class="pokemon-card__img" :src="pokemonInfo.picture" :alt="pokemonInfo.name">
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
    data(){
        return {
            pokemonInfo: {
                id: '',
                name: '',
                picture: '',
                types: [],
                attack: 0
            }
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
            console.log(this.pokemonInfo);
        })
    }
}
</script>
