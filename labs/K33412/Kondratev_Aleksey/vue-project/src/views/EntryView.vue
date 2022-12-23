<template>
	<header-block />
	<entry-block />
	<footer-block />
</template>

<script>
import { mapActions, mapState } from 'pinia'

import HeaderBlock from '../components/Header.vue'
import EntryBlock from '../components/Entry.vue'
import FooterBlock from '../components/Footer.vue'

export default{
	name: 'EntryPage',

	components: { HeaderBlock, EntryBlock, FooterBlock }
}
</script>
