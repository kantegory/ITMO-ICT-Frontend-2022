<template>
  <div class="wrapper"
       style=" width: 100%; padding-top: 20px; color: var(--text-color); display: flex !important; overflow-x: scroll; margin-bottom: 30px">
    <div class="wrapper d-flex" v-for="chart in charts">
      <div style="display: flex; flex-direction: column; padding: 20px; box-shadow: 0 1px 2px #00000099;">
        <div style="display: flex !important; justify-content: space-around; align-items: center; width: 200px;">
          <img :src="chart.image" alt="" style="width: 30px; height: 30px"
               class="rounded-circle"/>
          <p class="fw-bold">{{ chart.name }}</p>
        </div>
        <button id='${id}' class="btn btn-light"
                style="border: 2px solid; height: 40px !important; background: var(--bg-color)"
                @click="renderEvent(chart.id)">
          Draw chart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    charts: {
      type: Array,
      required: true
    }
  },
  emits: ['renderEvent'],
  data() {
    return {
      chart: {
        id: Number,
        name: String,
        symbol: String,
      },
    }
  },
  methods: {
    renderEvent(id) {
      this.$emit('renderEvent', id)
    }
  }
}
</script>

<style scoped>
.btn-light {
  border-radius: 5px;
  color: var(--text-color);
  background-color: rgba(0, 0, 0, 0) !important;
}

.btn-light:hover {
  background: var(--button-hover) !important;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
  0 0 25px #03e9f4,
  0 0 50px #03e9f4,
  0 0 100px #03e9f4;
}
</style>

