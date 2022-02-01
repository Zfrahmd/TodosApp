<template>
  <div class="div">
    <Navigation />
    <div class="container py-5">
      <router-view/>
    </div>

  </div>  
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Layouts/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
    
  },
};
</script>

<style>
#app {
  background-color: #e8f7f0;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.router-link-active {
  font-weight: bold;
}
</style>


<style>
/* body {

}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
} */

</style>