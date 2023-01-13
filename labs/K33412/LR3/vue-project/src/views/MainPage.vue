<template>
    <div>
        <headerBlock />
        <bodyBlock />
    </div>
</template>

<script>
import {mapActions, mapState} from 'pinia'
import headerBlock from '../components/MainPage/header.vue';
import bodyBlock from '../components/MainPage/body.vue';
export default {
    name: "Mainpage",
    components: {headerBlock, bodyBlock}
}

</script>
