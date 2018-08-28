<template>

  <div class="single-post">
    <h2>{{ item.title }}</h2>
    <p>{{ item.details }}</p>
    <p><a v-bind:href=" '/post/'+ item._id" role="button">View more...</a></p>
  </div>

</template>

<script>
  export default {
    props: ['post'],
    name: "Single",
    data() {
      return {
        item: this.post,
      }
    },
  }
</script>
