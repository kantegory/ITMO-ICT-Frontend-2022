<template>
    <div>
        <body-block-registration/>
    </div>
</template>

<script>
import {mapActions, mapState} from 'pinia'
import BodyBlockRegistration from "@/components/Registration/body.vue";
export default {
    name: "Registration",
    components: {BodyBlockRegistration}
}
</script>

