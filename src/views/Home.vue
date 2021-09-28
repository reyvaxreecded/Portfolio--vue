<template>
  <HeadBar />
  <div class="container">
    <div class="row">
      <router-link to="/projet" class="project">
        <div class="folder">
          <div class="dj"></div>
          <div class="ae"></div>
        </div>
        <div class="head">Projets</div>
      </router-link>
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
  </div>
  <Navbar />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/Navbar.vue";
import HeadBar from "@/components/HeadBar.vue";
import { Icon } from "@iconify/vue";

@Options({
  components: {
    Navbar,
    HeadBar,
    Icon,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.container {
  .row {
    width: 100%;
    padding-top: 10px;
    padding-left: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .project {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .folder {
        padding: 5px;
        height: 50px;
        width: 50px;
        background: rgba(144, 144, 144, 0.25);
        backdrop-filter: blur(4px);
        border-radius: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 10%;
        place-items: center;
        .dj,
        .ae {
          width: 15px;
          height: 15px;
          border-radius: 2.5px;
          background-size: cover !important;
        }
        .dj {
          background: url("../assets/djkiwixx.png");
        }
        .ae {
          background: url("../assets/ae.png") #fff;
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
        height: 50px;
        width: 50px;
        padding: 5px;
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
        height: 50px;
        width: 50px;
        padding: 5px;
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
  }
}
@media screen and (min-width: 768px) {
  .row {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr !important;
  }
  .project > .folder,
  .skills > .app,
  .about > .app {
    width: 60px !important;
    height: 60px !important;
  }
}
@media screen and (min-width: 1280px) {
  .row {
    display: none !important;
  }
}
</style>
