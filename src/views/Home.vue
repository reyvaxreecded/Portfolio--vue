<template>
<div class="main">
  <HeadBar/>
  <Navbar/>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeadBar from '@/components/HeadBar.vue';
import Navbar from '@/components/Navbar.vue';


@Options({
  components: {
    HeadBar,
    Navbar
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
  .main{
    background:url("../assets/wallpaper.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: 92%;
    min-height: 100vh;
    @media screen and (min-width:1280px) {
      background-position-x: 0;
    }
  }
</style>
