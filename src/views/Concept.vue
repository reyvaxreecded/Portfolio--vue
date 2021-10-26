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
      <div class="nav--title">Concept</div>
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
      <a id="name">Concept</a>
    </div>
    <div class="content">
      <div class="top-section">
        <Icon icon="clarity:devices-solid" class="branding-logo" />
        <a class="label">DevOS</a>
        <a class="version">Version 1.0.0</a>
      </div>
      <p>
        L’idée de ce portfolio se base sur deux bonnes pratiques de dévelopement
        :<br />
        <u>Le Mobile First et le responsive design</u><br />
        Suite à cela je suis partie d’un postulat, l’interface des systémes
        d’exploitation est la mieux conçue pour s’adapter à la fois aux formats
        mobile, tablette et desktop . J’ai donc conçu ce portfolio en
        m’inspirant des systéme d’exploitation Apple afin que celui ressemble
        respectivement à un iphone pour les smartphone, un ipad pour les
        tablettes et un mac pour les desktop . Cette version n’en est qu’a son
        balbutiement n’hésitez pas à revenir réguliérement afin de ne pas
        manquer les futures features.
      </p>
    </div>
    <router-link to="/" class="home"><div class="bar"></div></router-link>
  </div>
  <Navbar class="navbar" />
</template>
<script>
import { Vue, Options } from "vue-class-component";
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
export default class Concept extends Vue {}
</script>
<style lang="scss" scoped>
.top-nav {
  display: none;
}
.navbar {
  display: none;
}
.headbar {
  background: rgba(38, 38, 38, 0.5);
  backdrop-filter: blur(150px);
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
      font-size: 1.25em;
      margin-top: 1%;
      text-align: center;
      margin-left: 5%;
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
  .content {
    padding-bottom: 50px;
    .top-section {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      .branding-logo {
        width: 100px;
        height: 100px;
        color: #fff;
      }
      .label,
      .version {
        font-family: "Helvetica";
        color: #fff;
      }
      .label {
        font-size: 1.5em;
      }
    }
    p {
      padding-top: 20px;
      width: 90%;
      text-align: center;
      color: #fff;
      font-family: "Helvetica";
      margin: auto;
      font-size: 0.85em;
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
}
@media screen and (min-width: 360px) {
  .container > .title > #name {
    margin-left: 10%;
  }
}
@media screen and (min-width: 390px) {
  .container > .title > #name {
    margin-left: 12.5%;
  }
}
@media screen and (min-width: 410px) {
  .container > .title > #name {
    margin-left: 15%;
  }
}
@media screen and (min-width: 768px) {
  .container > .title > #name {
    margin-left: 27.5%;
    font-size: 2em;
  }
  .container > .content {
    .top-section > .branding-logo {
      width: 200px;
      height: 200px;
    }
    .top-section > .label {
      font-size: 2.5em;
    }
    .top-section > .version {
      font-size: 1.75em;
    }
    p {
      font-size: 1.5em;
    }
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
      grid-template-columns: 0.25fr 0.25fr 0.25fr 0.35fr 0.35fr 0.35fr 1fr 4fr 2.25fr;
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
      .top-section {
        .branding-logo,
        .label,
        .version {
          color: #111;
        }
      }
      p {
        font-size: 1em;
        color: #111;
      }
    }
  }
}
@media screen and (min-width: 1368px) {
  .container {
    width: 60%;
  }
}
</style>