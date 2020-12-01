<template>
  <Message v-for="currentMessage in messages" :key="currentMessage.id" :message="currentMessage"/>
</template>

<script>
import Message from "./Message";

export default {
  name: "Messages",
  components: {
    Message
  },
  created() {
    this.$store.dispatch("setMessages") // Call store's action
        .then(() => console.log("Unread messages: " + this.unreadMessages));
  },
  computed: {
    messages() {
      return this.$store.getters.getMessages;
    },
    unreadMessages() {
      return this.$store.getters.numberOfUnreadMessages;
    }
  }
}
</script>

<style scoped>

</style>