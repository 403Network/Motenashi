<template>
    <div>
        <div>
            hi
        </div>
        <router-view></router-view>
    </div>
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
    greet (): string {
      return this.msg + ' world'
    }
  },
})
</script>