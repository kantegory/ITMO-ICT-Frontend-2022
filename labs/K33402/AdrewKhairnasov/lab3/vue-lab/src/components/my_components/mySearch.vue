<template>
  <div class="search-row">
    <div class="input-group w-50" style="padding-bottom: 30px">
      <label class="input-label w-50">
        <input type="text" class="form-control" style="height: 45px; border: 2px solid #03e9f4"
               :value="modelValue" @input="updateInput" @change="sendSearch"
               placeholder="Поиск по названию">
      </label>
      <button class="clear-btn"
              style="border: none; border-radius: 10px; width: 45px; height: 45px; padding:0;"
              @click="clearInput">
        <svg style="width: 45px; height: 45px">
          <use xlink:href="#clear" style="fill: #03e9f4"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-input',
  emits: ['sendSearch'],
  props: {
    modelValue: String,
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },
    clearInput() {
      this.$emit('update:modelValue', '')
      this.sendSearch()
    },
    sendSearch(event) {
      if (event) {
        this.$emit('sendSearch', event.target.value)
      } else {
        this.$emit('sendSearch', '')
      }

    }
  }
}
</script>

<style scoped>
.clear-btn {
  background: var(--bg-color);
}

.form-control:hover, .form-control:focus, .clear-btn:hover {
  box-shadow: 0 0 15px #03e9f4,
  0 0 15px #03e9f4,
  0 0 15px #03e9f4,
  0 0 15px #03e9f4 !important;
}
</style>