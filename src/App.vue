<template>
  <div class="main">
    <router-view v-slot="{ Component }">
      <transition name="route">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>
<script>
import { Options, Vue } from "vue-class-component";
import HeadBar from "@/components/HeadBar.vue";
import Navbar from "@/components/Navbar.vue";

@Options({
  components: {
    HeadBar,
    Navbar,
  },
})
export default class App extends Vue {}
</script>
<style lang="scss">
.main {
  background: url("./assets/wallpaper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 98%;
  height: 100vh;
  overflow-y: hidden;
}
/* Media Queries */

@media screen and (min-width: 1280px) {
  .main {
    background-position-x: 0;
  }
}
</style>
