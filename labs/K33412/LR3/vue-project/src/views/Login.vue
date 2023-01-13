<template>
    <div>
        <body-block-login />
    </div>
</template>

<script>
import {mapActions, mapState} from 'pinia'
import BodyBlockLogin from "@/components/Login/body.vue";
export default {
    name: "Login",
    components: {BodyBlockLogin}
}
</script>

