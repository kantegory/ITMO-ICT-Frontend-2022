<template>
	<div>
		<header-block />
		<mus-block />
		<footer-block />
	</div>
</template>

<script>
import {mapActions, mapState} from 'pinia'
import HeaderBlock from '../../../Vue-project/src/components/Header.vue'
import MusBlock from '../../../Vue-project/src/components/Mus.vue'
import FooterBlock from '../../../Vue-project/src/components/Footer.vue'

export default{
	name: 'MusicPage',
	components: {HeaderBlock, MusBlock, FooterBlock}
}
</script>