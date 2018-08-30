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
  import axios from 'axios';
  import AuthService from '@/services/auth';

  export default {
    name: "Login",
    data() {
      return {
        email: '',
        password: '',
        errorMessage: ''
      }
    },
    methods: {
      login() {
        const credentials = {
          email: this.email,
          password: this.password
        };
        AuthService.login(credentials)
          .then(response => response.data)
          .then(responseData => {
            if (responseData.status === 'success') {
              this.$store.commit('setUser', responseData.user);
              this.$store.commit('setToken', responseData.token);
              this.email = '';
              this.password = '';
            } else {
              this.errorMessage = 'Something went wrong!'
            }
          })
          .catch(error => this.errorMessage = 'Something went wrong! ' + error.message);
      }
    }
  }
</script>
