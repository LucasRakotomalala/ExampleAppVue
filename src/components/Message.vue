<template>
  <div class="card border-bottom" @click="markAsRead()">
    <div class="card-body">
      <div class="media">
        <div class="avatar mr-3">
          <img class="avatar-img" :src="message.sender.profileImage" alt="Profile Image">
        </div>
        <div class="media-body overflow-hidden">
          <div class="d-flex align-items-center mb-auto">
            <h5 class="text-truncate mr-auto">{{ message.sender.name }}</h5>
            <p class="small text-muted text-nowrap ml-4">
              {{ formatDate }}
            </p>
          </div>
          <div class="text-truncate">
            <div v-if="!message.read" class="font-weight-bold">
              {{ message.content }}
            </div>
            <div v-else>
              {{ message.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: Object,
  },
  computed: {
    formatDate() {
      return new Date(this.message.date).getHours() + ":" + String(new Date(this.message.date).getMinutes()).padStart(2, "0");
    },
  }
}
</script>

<style scoped>
.avatar, .avatar > img {
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
</style>