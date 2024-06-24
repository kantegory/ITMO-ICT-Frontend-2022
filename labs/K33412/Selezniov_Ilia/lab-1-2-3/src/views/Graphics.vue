<template>
  <header-block />
  <Chart />
  <footer-block />
</template>

<script lang="ts">
import {Chart} from 'vue-tradingview-widgets';
import HeaderBlock from '../components/Header.vue'
import FooterBlock from '../components/Footer.vue'
export default{
  name: 'App',
  components: {
    HeaderBlock,
    Chart,
    FooterBlock,
  },
};
</script>