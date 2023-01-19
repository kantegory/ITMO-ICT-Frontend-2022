<template>
    <div>
      <Navigation/>
      <Acc/>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Acc from '@/components/Acc'
export default {
  name: 'Account',
  components: {
    Acc,
    Navigation
  }
}
</script>
