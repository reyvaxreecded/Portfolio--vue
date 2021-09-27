<template>
  <div class="main">
    <HeadBar />
    <div class="row">
      <div class="project">
        <div class="folder">
          <img src="../assets/dj-min.png" />
          <img src="../assets/ae-min.png" />
        </div>
        <div class="head">Projets</div>
      </div>
      <div class="skills">
        <a class="app">
          <Icon icon="simple-icons:appstore" color="white" height="90%" />
        </a>
        <div class="head">Compétences</div>
      </div>
      <div class="about">
        <div class="app"></div>
        <div class="head">A propos</div>
      </div>
    </div>
    <Navbar />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HeadBar from "@/components/HeadBar.vue";
import Navbar from "@/components/Navbar.vue";
import { Icon } from "@iconify/vue";

@Options({
  components: {
    HeadBar,
    Navbar,
    Icon,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.main {
  background: url("../assets/wallpaper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 92%;
  min-height: 100vh;
  @media screen and (min-width: 1280px) {
    background-position-x: 0;
  }
  .row {
    width: 100%;
    padding-top: 10px;
    padding-left: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .project {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .folder {
        padding: 10px;
        height: 60px;
        width: 60px;
        background: rgba(144, 144, 144, 0.25);
        backdrop-filter: blur(4px);
        border-radius: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 10%;
        place-items: center;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .head {
        font-weight: 300;
        color: #fff;
        font-family: "Helvetica";
      }
    }
    .skills {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      a {
        background: linear-gradient(180deg, #6dcbff 0%, #14426c 100%);
        border-radius: 10px;
        height: 60px;
        width: 60px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .head {
        font-weight: 300;
        color: #fff;
        font-family: "Helvetica";
      }
    }
    .about {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .app {
        height: 60px;
        width: 60px;
        padding: 10px;
        border-radius: 10px;
        background: url("../assets/setting.jpg");
        background-size: cover;
        background-position-x: 49%;
      }
      .head {
        font-weight: 300;
        color: #fff;
        font-family: "Helvetica";
      }
    }
    @media screen and (min-width:1280px) {
      display: none;
    }
  }
}
</style>
