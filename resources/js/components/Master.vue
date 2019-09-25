<template>
    <router-view></router-view>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      msg: 'Hello'
    }
  },
  computed: {
    greeting(): string {
      return this.greet() + '!'
    }
  },
  methods: {
    // need annotation due to `this` in return type
    greet (): string {
      return this.msg + ' world'
    }
  },
})
</script>