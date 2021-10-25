<template>
  <HeadBar class="headbar" />
  <div class="container">
    <div class="title">
      <router-link to="/about" class="back--link">
        <Icon
          icon="eva:arrow-ios-back-fill"
          color="#196DEB"
          width="30"
          height="30"
        />
        <a>retour</a>
      </router-link>
      <a id="name">Mes informations</a>
    </div>
    <div class="content">
      <img src="../assets/profile.png" alt="" srcset="" />
      <p>
        Je m'apelle Xavier Deredec, je suis un jeune développeur web passionné
        de nouvelles technologies.
      </p>
      <div class="contact-infos">
        <h2>Coordonnées</h2>
        <div class="contact-infos--link">
          <a href="mailto:xavier.deredec@live.fr">xavier.deredec@live.fr</a>
        </div>
        <a href="https://www.malt.fr/profile/xavierderedec" class="contact-infos--link">
          <div class="logo"></div>
          <div class="legend">Malt</div>
        </a>
        <router-link to="/contact" class="contact-infos--link">
          <div class="logo"></div>
          <div class="legend">Formulaire de contact</div>
        </router-link>
      </div>
    </div>
    <router-link to="/" class="home"><div class="bar"></div></router-link>
  </div>
  <Navbar class="navbar" />
</template>
<script>
import { Vue, Options } from "vue-class-component";
import { Icon } from "@iconify/vue";
import HeadBar from "@/components/HeadBar.vue";
import Navbar from "@/components/Navbar.vue";

@Options({
  components: {
    HeadBar,
    Navbar,
    Icon,
  },
})
export default class AboutMe extends Vue {}
</script>
<style lang="scss" scoped>
.headbar {
  background: rgba(38, 38, 38, 0.5);
  backdrop-filter: blur(150px);
}
.navbar {
  display: none;
}
.container {
  height: calc(100vh - 40px);
  width: 100%;
  background: #111;
  overflow: scroll;
  .title {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: "Helvetica";
    background: #111;
    #name {
      color: #fff;
      font-weight: 600;
      padding-left: 10px;
      font-size: 1em;
      margin-top: 1%;
    }
    .back--link {
      display: flex;
      align-items: center;
      text-decoration: none;
      a {
        font-weight: 300;
        color: #196deb;
        font-size: 1.5em;
      }
    }
  }
  .home > .bar {
    width: 70%;
    height: 10px;
    background-color: #fff;
    border-radius: 20px;
    text-decoration: none;
    position: absolute;
    bottom: 10px;
    left: 15%;
    right: 15%;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      color: #fff;
      font-family: "Helvetica";
      text-align: center;
    }
    .contact-infos {
      width: 95%;
      h2 {
        font-family: "Helvetica";
        color: #fff;
      }
      &--link {
        width: calc(100% - 20px);
        height: 50px;
        padding-left: 10px; padding-right: 10px;
        background: #323232;
        display: flex;
        align-items: center;
        text-decoration: none;
        &:nth-child(2) {
          border-radius: 20px 20px 0 0;
        }
        &:nth-child(3) {
          .logo {
            background: url('../assets/malt__logo.png');
            background-size: cover;
          }
        }
        &:nth-child(4) {
          border-radius: 0 0 20px 20px;
          .logo{
            background: url('../assets/Mail__logo.png');
            background-size: cover;
          }
        }
        a,
        .legend {
          color: #fff;
          font-family: "Helvetica";
        }
        .logo {
            width: 35px;
            height: 35px;
            border-radius: 10px;    
            margin-right: 10px;        
        }
      }
    }
  }
}
</style>