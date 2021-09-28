<template>
  <HeadBar />
  <div class="container">
    <router-link to="/" class="folder">
      <div class="head">Projets</div>
      <div class="project--list">
        <div class="row">
          <div class="project">
            <div class="app"></div>
            <div class="title">DjKiwixx</div>
          </div>
          <div class="project">
            <div class="app"></div>
            <div class="title">Ae Pierrefeu</div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import { Options, Vue } from "vue-class-component";
import HeadBar from "@/components/HeadBar.vue";

@Options({
  components: {
    HeadBar,
  }
})

export default class Folder extends Vue {}
</script>
<style lang="scss" scoped>
.container {
  .folder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 40px);
    text-decoration: none;
    .head {
      font-family: "Helvetica";
      font-weight: 400;
      color: #fff;
      font-size: 28px;
    }
    .project--list {
      width: 90%;
      height: 300px;
      background: rgba(144, 144, 144, 0.25);
      backdrop-filter: blur(4px);
      border-radius: 30px;
      .row {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 5%;
        padding-top: 5%;
        padding-left: 5%;
        place-items: center;
        .project {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          &:nth-child(1)>.app{
              background: url('../assets/djkiwixx.png');
          }
          &:nth-child(2)>.app{
              background: url('../assets/ae.png') #fff;
          }
          .app{
              width: 60px;
              height: 60px;
              border-radius: 10px;
              background-size: cover !important;
          }
          .title{
              font-family: 'Helvetica';
              font-weight: 400;
              color: #fff;
              font-size: 14px;
              text-align: center;
          }
        }
      }
    }
  }
}
@media screen and (min-width:360px) {
    .project--list{
        height: 350px !important;
    }
}
@media screen and (min-width:768px) {
    .head{
        font-size: 42px !important;
    }
    .project--list {
        width: 70% !important;
        height: 500px !important;
        .row{
            grid-template-columns: 1fr 1fr 1fr 1fr !important;
            .app{
                width: 80px !important;
                height: 80px !important;
            }
            .title{
                font-size: 1.2em !important;
            }
        }
    }
}
</style>
