<template>
	<header-block />
	<calendar-block />
	<footer-block />
</template>

<script>
import { mapActions, mapState } from 'pinia'

import HeaderBlock from '../components/Header.vue'
import CalendarBlock from '../components/Calendar.vue'
import FooterBlock from '../components/Footer.vue'

export default{
	name: 'CalendarPage',

	components: { HeaderBlock, CalendarBlock, FooterBlock }
}
</script>
