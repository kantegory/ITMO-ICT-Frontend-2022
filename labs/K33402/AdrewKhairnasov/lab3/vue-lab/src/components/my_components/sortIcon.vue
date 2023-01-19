<template>
  <div class="sort-arrow align-middle">
    <svg class="inner-pic">
      <use xlink:href="#sort"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'sort-icon'
}
</script>

<style>
.sort-arrow {
  background: none;
  border: none;
  margin-left: 10px ;
}

.inner-pic {
  fill: var(--icon-color);
  width: 25px;
  height: 25px;
}
</style>