<template>
  <div class="container">
    <div class="chart-section">
      <chart-list :charts="charts" @render-event="setTarget"/>
      <div class="d-flex w-100 justify-content-center">
        <chart-body :target="target" class="w-50"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "pinia";
import useChartsStore from "@/stores/charts";
import useCoinsStore from "@/stores/coins";
import ChartList from "@/components/my_charts/ChartList.vue";
import ChartBody from "@/components/my_charts/ChartBody.vue";

export default {
  components: {
    ChartList,
    ChartBody,
  },
  data() {
    return {
      charts: [],
      target: {},
      name: '',
    }
  },
  methods: {
    ...mapActions(useChartsStore, ['loadCharts']),
    ...mapActions(useCoinsStore, ['loadCoins']),
    async getCharts() {
      const current = await this.loadCharts();
      const data = await this.loadCoins();
      this.charts = this.mergeChartWithCoin(current, data)
    },

    mergeChartWithCoin(current, data) {
      let res = [];
      let prices = [];
      for (let i = 0; i < current.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (current[i].id === data[j].id) {
            res.push(data[j])
            prices.push(current[i].prices)
          }
        }
      }

      for (let k = 0; k < res.length; k++) {
        res[k].prices = prices[k];
      }

      return res
    },
    setTarget(id) {
      const res = JSON.parse(JSON.stringify(this.charts.filter(x => x.id === id)));
      this.name = res[0].name
      this.target = res[0].prices;
    }
  },
  mounted() {
    this.getCharts()
  }
}
</script>

<style>
</style>