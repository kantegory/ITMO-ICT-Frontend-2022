<template>
	<HeaderBlock />
	<PersonalBlock />
  <CryptoMarket style="height: 340px;"/>
	<FooterBlock />

</template>

<script>
import { mapActions, mapState } from 'pinia'

import HeaderBlock from '../components/Header.vue'
import PersonalBlock from '../components/Personal.vue'
import FooterBlock from '../components/Footer.vue'
import { Chart,CryptoMarket, Snaps, Screener } from 'vue-tradingview-widgets';
export default{
	name: 'PersonalPage',

	components: { HeaderBlock, PersonalBlock, FooterBlock,Chart,CryptoMarket,Screener,Snaps, }
}
</script>