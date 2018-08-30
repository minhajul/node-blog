<template>

  <div class="row">

    <div class="col-md-12">
        <Single v-bind:post="post" :key="post._id"></Single>

      <div class="error-message" v-if="errorMessage">
         {{ errorMessage }}
      </div>
    </div>

  </div>

</template>

<script>
  import axios from 'axios';
  import Single from '../Single';
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
          }else{
            this.errorMessage = 'No post found'
          }
        })
        .catch(error => this.errorMessage = 'No post found'+ error.message);
    }
  }
</script>
