<template>
	<header-block />
	<main-block />
	<footer-block />
</template>

<script>
import { mapActions, mapState } from 'pinia'

import useCardsStore from '@/stores/cards'

import HeaderBlock from '@/components/Header.vue'
import MainBlock from '@/components/Main.vue'
import FooterBlock from '@/components/Footer.vue'
import { computed } from '@vue/reactivity'

export default{
	name: 'MainPage',

	components: { HeaderBlock, MainBlock, FooterBlock },

  computed: {
    ...mapActions(useCardsStore, ['cards'])
  },

  methods: {
    ...mapActions(useCardsStore, ['loadCards']),


  }, 

  data() {
    return {

    }
  },

  mounted() {
    this.loadCards();
  }
}
</script>
