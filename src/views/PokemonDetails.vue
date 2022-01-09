<template>
    <div id="pokemon-details" class="pokemon-details">
        <div class="pokemon-details__header" :style="{backgroundColor: pokemonInfo.colorDominant}">
            <button class="pokemon-details__header-back" @click="goBack()"><font-awesome-icon icon="arrow-left" /></button>
            <h1 class="u-text-center">#{{pokemonInfo.id}}{{' '}}{{pokemonInfo.name}}</h1>
            <img class="pokemon-details__header-img" :src="pokemonInfo.picture" :alt="pokemonInfo.name">
            <img class="pokemon-details__header-pokeball" :src="require(`@/assets/images/pokeball-white.png`)" alt="pokeball-white">
        </div>
        <div class="pokemon-details__stats u-margin-bottom-sm  u-margin-top-lg">
            <h3 class="u-text-center">Stats</h3>
            <div style="display: flex; justify-content: space-between;" v-for="(stat, index) in data.stats" v-bind:key="index">
                <span>{{stat.stat.name}}</span>
                <span class="u-text-bold">{{stat.base_stat}}</span>
            </div>
        </div>
        <div class="pokemon-details__general-info u-margin-bottom-sm">
            <div>
                <h3>Types</h3>
                <p class="pokemon-card__types" v-for="(types, index) in pokemonInfo.types" v-bind:key="index">
                    {{types.type.name}}
                </p>
            </div>
            <div>
                <h3>Abilities</h3>
                <p v-for="({ability}, index) in data.abilities" v-bind:key="index">
                    {{ability.name}}
                </p>
            </div>
            <div>
                <h3>Weight</h3>
                <p>{{data.weight}}</p>
            </div>
        </div>
        <div class="pokemon-details__moves u-margin-bottom-sm">
            <h3 class="u-text-center">Moves</h3>
            <span v-for="({move}, index) in data.moves" v-bind:key="index">
                {{move.name}}
            </span>
        </div>
        <div>
            <h3 class="u-text-center">Sprites</h3>
            <img :src="data.sprites.front_default" alt="front default">
            <img :src="data.sprites.back_default" alt="back default">
            <img :src="data.sprites.front_shiny" alt="front shiny">
            <img :src="data.sprites.back_shiny" alt="back shiny">
        </div>
    </div>
</template>
<script>
export default {
    name: 'PokemonDetails',
    methods: {
        goBack() {
            this.$router.back();
        }
    },
    data() {
        return {
            data: {},
            pokemonInfo: {}
        }
    },
    mounted() {
        this.data = this.$route.params.data;
        this.pokemonInfo = this.$route.params.pokemonInfo;
    }
}
</script>