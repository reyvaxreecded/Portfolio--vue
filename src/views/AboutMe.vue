<template>
  <HeadBar class="headbar" />
  <div class="container">
    <div class="top-nav">
      <router-link to="/" class="close"></router-link>
      <div class="growth"></div>
      <div class="reduce"></div>
      <router-link to="/about" class="back">
        <Icon
          icon="eva:arrow-ios-back-fill"
          height="25"
          width="35"
          color="#656564"
        />
      </router-link>
      <div class="next">
        <Icon
          icon="eva:arrow-ios-forward-fill"
          height="25"
          width="35"
          color="#b1b0b0"
        />
      </div>
      <div class="grid">
        <Icon icon="oi:grid-three-up" color="#656564" />
      </div>
      <div class="nav--title">Mes informations</div>
      <div class="nav--search">
        <input type="search" placeholder="     Rechercher" />
      </div>
    </div>
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
        <a
          href="https://www.malt.fr/profile/xavierderedec"
          class="contact-infos--link"
        >
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
      text-align: center;
      margin-left: 0.5%;
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
    padding-bottom: 50px;
    p {
      color: #fff;
      font-family: "Helvetica";
      text-align: center;
      width: 90%;
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
        padding-left: 10px;
        padding-right: 10px;
        background: #323232;
        display: flex;
        align-items: center;
        text-decoration: none;
        &:nth-child(2) {
          border-radius: 20px 20px 0 0;
        }
        &:nth-child(3) {
          .logo {
            background: url("../assets/malt__logo.png");
            background-size: cover;
          }
        }
        &:nth-child(4) {
          border-radius: 0 0 20px 20px;
          .logo {
            background: url("../assets/Mail__logo.png");
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
@media screen and (min-width: 768px) {
  .container > .title > #name {
    margin-left: 23.5%;
    font-size: 1.5em;
  }
  .container > .content > img {
    width: 250px;
    height: 250px;
  }
  .container > .content > p {
    font-size: 1.25em;
  }
  .container > .content > .contact-infos > h2 {
    font-size: 2em;
  }
  .container > .content > .contact-infos > .contact-infos--link {
    height: 75px;
    .logo {
      width: 50px;
      height: 50px;
    }
    a,
    .legend {
      font-size: 1.25em;
    }
  }
}
@media screen and (min-width: 800px) {
  .container > .title > #name {
    margin-left: 25%;
  }
}
@media screen and (min-width: 880px) {
  .container > .title > #name {
    margin-left: 26.5%;
  }
}
@media screen and (min-width: 1280px) {
  .home {
    display: none;
  }
  .headbar {
    background: rgba(255, 255, 255, 0.25);
  }
  .navbar {
    display: flex;
  }
  .container {
    width: 70%;
    min-height: 400px !important;
    margin: auto;
    margin-top: 5%;
    background-color: rgba(255, 255, 255, 0) !important;
    overflow: hidden;
    .title {
      display: none;
    }
    .top-nav {
      width: calc(100% - 25px);
      background: #f4f2f2;
      border-bottom: 1px solid #d6d6d5;
      border-radius: 15px 15px 0px 0px;
      display: grid;
      grid-template-columns: 0.25fr 0.25fr 0.25fr 0.35fr 0.35fr 0.35fr 2fr 2fr 2.25fr;
      grid-template-rows: 50px;
      place-items: center;
      padding-left: 25px;
      .close,
      .growth,
      .reduce {
        width: 15px;
        height: 15px;
        border-radius: 20px;
        &:hover {
          cursor: pointer;
        }
      }
      .close {
        background-color: #ed6a5e;
        border: 1px solid #d04c3f;
        &:hover {
          background-color: #d04c3f;
        }
        &:active {
          box-shadow: inset 0px 0px 10px 1px #6d1c1c;
        }
      }
      .growth {
        background-color: #f4c04f;
        border: 1px solid #d69f3c;
        &:hover {
          background-color: #d69f3c;
        }
      }
      .reduce {
        background-color: #d7d6d6;
        border: 1px solid #b5b3b3;
        cursor: default !important;
      }
      .nav--title {
        color: #000;
        font-family: "Helvetica";
        font-size: 20px;
      }
      .nav--search {
        grid-column-start: 9;
        input {
          height: 30px;
          border-radius: 8px;
          border: 1px solid #b5b3b3;
          &:focus-visible {
            outline: 2px solid #8eabed;
            border-color: #88a4e6;
          }
        }
      }
      .back,
      .next,
      .grid {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .content {
      width: 100%;
      justify-content: flex-start;
      border-top: 1px solid #e0e0df;
      background: #ededec;
      border-radius: 0 0 20px 20px;
      img {
        width: 150px;
        height: 150px;
      }
      p {
        font-size: 1em;
        color: #111;
      }
    }
  }
  .container > .content > .contact-infos > h2 {
    font-size: 1.5em;
    color: #111;
  }
  .container > .content > .contact-infos > .contact-infos--link {
    height: 60px;
    background: #e5e5e4;
    &:hover {
      background: #adadad;
    }
    .logo {
      width: 40px;
      height: 40px;
    }
    a,
    .legend {
      font-size: 1em;
      color: #111;
    }
  }
}
@media screen and (min-width: 1368px) {
  .container {
    width: 60%;
    .top-nav {
      grid-template-columns: 0.25fr 0.25fr 0.25fr 0.35fr 0.35fr 0.35fr 2fr 3fr 2.25fr;
    }
  }
}
</style>