<template>
  <div class="row justify-content-md-center">
    <div class="col-8">
      <h2>Login</h2>
      <hr>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary pull-right" @click.prevent="login">Submit</button>
      </form>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Login",
      data(){
          return{
            email: '',
            password: '',
          }
      },
      methods: {
          login(){
            this.$store.commit('setToken', 'sdknakjdnakdjnadkjnadkjnad');
            this.$store.commit('setToken', 'sdknakjdnakdjnadkjnadkjnad');
          }
      }
    }
</script>

<style scoped>

</style>
