<template>

  <div class="row">
       <Single v-bind:post="post" :key="post._id"></Single>
  </div>

</template>

<script>
  import axios from 'axios';
  import Single from '../posts/Single';
  export default {
    name: 'PostDetails',
    components:{
      Single
    },
    data() {
      return {
        post: {},
        errorMessage: null
      }
    },
    mounted(){
      axios.get('http://localhost:3000/api/v1/post/'+ this.$route.params.id)
        .then(response => response)
        .then(responseData => {
          if (responseData.data.status === 'success'){
            this.post = responseData.data.post;
          }
        })
        .catch(error => this.errorMessage = 'No post found'+ error.message);
    }
  }
</script>
