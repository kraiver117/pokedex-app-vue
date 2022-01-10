<template>
    <div id="search-input" class="search-input">
        <form action="">
            <input type="text" v-model="search" placeholder="Search Pokemon">
        </form>
    </div>
</template>

<script>
export default {
    name: 'SearchInput',
    props: {
        pokemons: Array
    },
    data(){
        return {
            search: ''
        }   
    },
    computed: {
        filteredPokemons(){
            return this.props.pokemons
                .filter((pokemon) => {
                    pokemon.name.toLowerCase().includes(this.search.toLoweCase());
                });
        }
    },
    created() {
        console.log(this.props.pokemons);
    },
    mounted() {
        console.log(this.props.pokemons);
    }
}
</script>