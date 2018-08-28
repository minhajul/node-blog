<template>

  <div class="row">
    <div class="col-md-6" v-for="post in posts" :key="post._id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.details }}</p>
      <p><a v-bind:href=" '/post/'+ post._id" role="button">View more...</a></p>
    </div>
  </div>

</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Home',
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
