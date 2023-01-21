<template>
	<div>
		<header-block />
		<main class=" pt-5 color-main pb-5">
			<main-block />
		</main>
		<footer-block />
	</div>
</template>

<script>
import {mapActions, mapState} from 'pinia'

import useCardsStore from '@/stores/cards'

import HeaderBlock from '../../../Vue-project/src/components/Header.vue'
import MainBlock from '../../../Vue-project/src/components/Main.vue'
import FooterBlock from '../../../Vue-project/src/components/Footer.vue'

export default{
	name: 'MainPage',
	components: {HeaderBlock, MainBlock, FooterBlock},

	computed: {
		...mapState(useCardsStore, ['cards']),
	},
	methods: {
		...mapActions(useCardsStore, ['loadCards']),
	}
}
</script>