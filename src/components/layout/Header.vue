<template>
    <div id="header" class="header">
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
        <SearchInput />
    </div>
</template>

<script>
import SearchInput from '../SearchInput.vue';
export default {
    name: 'Header',
    components: {
        SearchInput
    }
}
</script> 