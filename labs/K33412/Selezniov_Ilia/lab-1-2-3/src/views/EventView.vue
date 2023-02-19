<template>
	<HeaderBlock />
	<FooterBlock />
</template>

<script>
import { mapActions, mapState } from 'pinia'

import HeaderBlock from '../components/Header.vue'
import FooterBlock from '../components/Footer.vue'

export default {
	name: 'EventPage',

	components: { HeaderBlock, FooterBlock },
}
</script>
