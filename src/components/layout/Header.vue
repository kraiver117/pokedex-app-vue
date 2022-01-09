<template>
    <div id="header" class="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="pokemon logo" />
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