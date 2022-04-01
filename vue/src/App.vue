<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { mapState } from "vuex";

export default {
  components: {},
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<template>
  <!-- <pre>{{user}}</pre> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <router-view></router-view>
</template>
