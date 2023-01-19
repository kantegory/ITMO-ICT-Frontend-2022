<template>
    <div>
      <Navigation/>
      <Weather/>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Weather from '@/components/Weather'
export default {
  name: 'Search',
  components: {
    Navigation,
    Weather
  }
}
</script>
