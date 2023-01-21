<template>
	<div>
		<header-block />
		<enter-block />
		<footer-block />
	</div>
</template>

<script>
import {mapActions, mapState} from 'pinia'

import useLoginStore from '../stores/login'

import HeaderBlock from '../../../Vue-project/src/components/Header.vue'
import EnterBlock from '../../../Vue-project/src/components/Enter.vue'
import FooterBlock from '../../../Vue-project/src/components/Footer.vue'

export default{
	name: 'EnterPage',
	components: {HeaderBlock, EnterBlock, FooterBlock},

	computed: {
		...mapState(useLoginStore, ['users'])
	}
}
</script>