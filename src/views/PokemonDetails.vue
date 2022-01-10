<template>
    <div id="pokemon-details" class="pokemon-details">
        <div class="pokemon-details__header" :style="{backgroundColor: pokemonInfo.colorDominant}">
            <button class="pokemon-details__header-arrow-back" @click="goBack()"><font-awesome-icon icon="arrow-left" /></button>
            <h1 class="u-text-center">#{{pokemonInfo.id}}{{' '}}{{pokemonInfo.name}}</h1>
            <img class="pokemon-details__header-img" :src="pokemonInfo.picture" :alt="pokemonInfo.name">
            <img class="pokemon-details__header-pokeball" :src="require(`@/assets/images/pokeball-white.png`)" alt="pokeball-white">
        </div>
        <!-- <div class="pokemon-details__info-container" :style="{border: `3px solid ${pokemonInfo.colorDominant}`}"> -->
        <div class="pokemon-details__info-container">
            <!-- <img class="pokemon-details__img-background" :src="require(`@/assets/images/pokeball.png`)" alt="pokeball"> -->
            <div class="pokemon-details__stats u-margin-bottom-md u-margin-top-lg">
                <h3 class="u-text-center" :style="{color: pokemonInfo.colorDominant}">Stats</h3>
                <div style="display: flex; justify-content: space-between;" v-for="stat in data.stats" v-bind:key="stat.stat.name">
                    <span>{{stat.stat.name}}</span>
                    <span class="u-text-bold" :style="{color: pokemonInfo.colorDominant}">{{stat.base_stat}}</span>
                </div>
            </div>
            <div class="pokemon-details__general-info u-margin-bottom-md">
                <div>
                    <h3 :style="{color: pokemonInfo.colorDominant}">Types</h3>
                    <p class="pokemon-card__types" v-for="{type} in pokemonInfo.types" v-bind:key="type.name">
                        {{type.name}}
                    </p>
                </div>
                <div>
                    <h3 :style="{color: pokemonInfo.colorDominant}">Abilities</h3>
                    <p v-for="({ability}, index) in data.abilities" v-bind:key="index">
                        {{ability.name}}
                    </p>
                </div>
                <div>
                    <h3 :style="{color: pokemonInfo.colorDominant}">Height</h3>
                    <p>{{data.height / 10}}m</p>
                </div>
                <div>
                    <h3 :style="{color: pokemonInfo.colorDominant}">Weight</h3>
                    <p>{{data.weight / 10}}kg</p>
                </div>
            </div>
            <div class="pokemon-details__moves u-margin-bottom-sm">
                <h3 class="u-text-center" :style="{color: pokemonInfo.colorDominant}">Moves</h3>
                <span v-for="({move}, index) in data.moves" v-bind:key="index">
                    {{move.name}}
                </span>
            </div>
            <div class="pokemon-details__sprites">
                <h3 class="u-text-center" :style="{color: pokemonInfo.colorDominant}">Sprites</h3>
                <div style="display:flex; justify-content:space-evenly; flex-wrap: wrap;">
                    <img :src="data.sprites.front_default" alt="front default">
                    <img :src="data.sprites.back_default" alt="back default">
                    <img :src="data.sprites.front_shiny" alt="front shiny">
                    <img :src="data.sprites.back_shiny" alt="back shiny">
                </div>
            </div>
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
        window.scrollTo(0, 0);
        this.data = this.$route.params.data;
        this.pokemonInfo = this.$route.params.pokemonInfo;
    }
}
</script>