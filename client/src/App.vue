<template>
  <div class="">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from "./components/NavBar";

  export default {
    name: 'App',
    components: {NavBar}
  }
</script>
