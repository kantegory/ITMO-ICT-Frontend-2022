<template>
    <div>
      <Navigation/>
      <Register/>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Register from '@/components/Register'
export default {
  name: 'Signup',
  components: {
    Register,
    Navigation
  }
}
</script>
