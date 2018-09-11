<template>
  <div class="card mt-3">
    <div class="card-body">
      <div class="card-title">
        <h3>Chat Group</h3>
        <hr>
      </div>
      <div class="card-body">
        <div class="messages" v-for="(msg, index) in messages" :key="index">
           <p>
             <span class="font-weight-bold">{{ msg.username }}: </span>{{ msg.message }}
           </p>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <form @submit.prevent="sendMessage">
        <div class="gorm-group" v-if="!$store.state.isUserLoggedIn">
          <label for="user">User:</label>
          <input type="text" v-model="user" class="form-control">
        </div>
        <div class="gorm-group pb-3">
          <label for="message">Message:</label>
          <input type="text" v-model="message" class="form-control">
        </div>
        <button type="submit" @click.prevent="sendMessage" class="btn btn-success">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
  import io from 'socket.io-client';

  export default {
    name: "Chat",
    data() {
      return {
        user: '',
        message: '',
        messages: [],
        socket: io('localhost:3001')
      }
    },

    computed: {
      loggedinUser() {
        return this.$store.getters.getUser;
      }
    },
    methods: {
      sendMessage(){
        const user = this.$store.getters.getUser;

        this.socket.emit('SEND_MESSAGE', {
          user: user,
          message: this.message
        });
        this.message = ''
      }
    },
    mounted() {
      this.socket.on('MESSAGES', (data) => {
        this.messages = data;
      });

      this.socket.on('MESSAGE', (message) => {
        this.messages.push(message);
      });
    }
  }
</script>
