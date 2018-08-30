<template>

  <div class="row">

    <div class="col-md-6" v-for="post in posts">
      <SinglePost v-bind:post="post" :key="post._id"></SinglePost>
    </div>

    <div class="col-md-12" v-if="errorMessage">{{ errorMessage }}</div>

  </div>

</template>

<script>

  import axios from 'axios';
  import SinglePost from '../posts/SinglePost';

  export default {
    name: 'Home',
    components:{
      SinglePost
    },
    data() {
      return {
          posts: [],
          errorMessage: null
      }
    },

    mounted(){
         axios.get('http://localhost:3000/api/v1/posts')
          .then(response => response.data)
          .then(responseData => {
              if (responseData.status === 'success'){
                this.posts = responseData.data;
              }else{
                this.errorMessage = 'No post found'
              }
          })
          .catch(error => this.errorMessage = 'No post found ' + error.message);
    }
  }
</script>
