<template>
    <div>
      <Navigation/>
      <Showcase/>
      <hr>
      <Login/>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Login from '@/components/Login'
import Showcase from '@/components/Showcase'
export default {
  name: 'Main',
  components: {
    Navigation,
    Showcase,
    Login
  }
}
</script>
