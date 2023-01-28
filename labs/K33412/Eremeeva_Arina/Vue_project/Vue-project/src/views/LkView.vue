<template>
	<div>
		<header-block />
		<lk-block />
		<footer-block />
	</div>
</template>

<script>
import {mapActions, mapState} from 'pinia'
import HeaderBlock from '../../../Vue-project/src/components/Header.vue'
import LkBlock from '../../../Vue-project/src/components/Lk.vue'
import FooterBlock from '../../../Vue-project/src/components/Footer.vue'

export default{
	name: 'LkPage',
	components: {HeaderBlock, LkBlock, FooterBlock}
}
</script>