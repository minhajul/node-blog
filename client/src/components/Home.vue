<template>

  <div class="row">

    <Single v-for="post in posts" v-bind:post="post" :key="post._id"></Single>

  </div>

</template>

<script>
  import axios from 'axios';
  import Single from './posts/Single';
  export default {
    name: 'Home',
    components:{
      Single
    },
    data() {
      return {
          posts: [],
          errorMessage: null
      }
    },
    mounted(){
         axios.get('http://localhost:3000/api/v1/posts')
          .then(response => response)
          .then(responseData => {
              if (responseData.data.status === 'success'){
                this.posts = responseData.data.posts;
              }
          })
          .catch(error => this.errorMessage = 'No post found');
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
