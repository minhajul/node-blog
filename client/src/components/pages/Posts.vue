<template>

  <div class="row">

    <div class="col-md-6" v-for="post in posts">
      <Single v-bind:post="post" :key="post._id"></Single>
    </div>

    <div class="col-md-12" v-if="errorMessage">{{ errorMessage }}</div>

  </div>

</template>

<script>
  import axios from 'axios';
  import Single from '../Single';
  export default {
    name: 'Posts',
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
          }else{
            this.errorMessage = 'No post found'
          }
        })
        .catch(error => this.errorMessage = 'No post found'+ error.message);
    }
  }
</script>

