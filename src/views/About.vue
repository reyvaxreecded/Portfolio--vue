<template>
  <HeadBar class="headbar" />
  <div class="container">
    <div class="top-nav">
      <router-link to="/" class="close"></router-link>
      <div class="growth"></div>
      <div class="reduce"></div>
      <div class="back">
        <Icon
          icon="eva:arrow-ios-back-fill"
          height="25"
          width="35"
          color="#b1b0b0"
        />
      </div>
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
      <div class="nav--title">A propos</div>
      <div class="nav--search">
        <input type="search" placeholder="     Rechercher" />
      </div>
    </div>
    <div class="title">
      <a>A propos</a>
    </div>
    <div class="content">
      <router-link to="/aboutme" class="about-me">
        <img src="../assets/profile.png" />
        <a title="about-me">Xavier Deredec</a>
        <router-link to="/aboutme" class="show-more">
          <div class="logo">
            <Icon
              icon="flat-color-icons:briefcase"
              color="#fff"
              height="80%"
              width="80%"
            />
          </div>
          <div class="legend">Voir plus</div>
        </router-link>
        <Icon
          icon="eva:arrow-ios-forward-fill"
          class="arrow"
          color="#585858"
          height="50%"
        />
      </router-link>
      <div class="menu">
        <div class="menu--list">
          <router-link to="/concept" class="menu--link">
            <div class="logo">
              <Icon
                icon="carbon:idea"
                color="#FFFFFF"
                height="80%"
                width="80%"
              />
            </div>
            <div class="img">
              <Icon icon="flat-color-icons:idea" width="80%" height="80%" />
            </div>
            <div class="legend">Concept</div>
            <Icon
              icon="eva:arrow-ios-forward-fill"
              color="#585858"
              class="arrow"
            />
          </router-link>
          <router-link to="/mockup" class="menu--link">
            <div class="logo">
              <Icon
                icon="uiw:appstore-o"
                color="#FFFFFF"
                height="60%"
                width="60%"
              />
            </div>
            <div class="img">
              <Icon icon="flat-ui:responsive" width="80%" height="80%" />
            </div>
            <div class="legend">Maquéttage</div>
            <Icon
              icon="eva:arrow-ios-forward-fill"
              color="#585858"
              class="arrow"
            />
          </router-link>
          <router-link to="/devlopement" class="menu--link">
            <div class="logo">
              <Icon
                icon="ic:twotone-developer-mode"
                color="#FFFFFF"
                height="80%"
                width="80%"
              />
            </div>
            <div class="img">
              <Icon icon="flat-ui:pc" width="80%" height="80%" />
            </div>
            <div class="legend">Développement</div>
            <Icon
              icon="eva:arrow-ios-forward-fill"
              color="#585858"
              class="arrow"
            />
          </router-link>
        </div>
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
    Icon,
    HeadBar,
    Navbar,
  },
})
export default class About extends Vue {}
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
  min-height: calc(100vh - 115px);
  width: 100%;
  background: #111;
  .title {
    min-height: 50px;
    color: #fff;
    font-family: "Helvetica";
    font-size: 2.5em;
    font-weight: bold;
    padding-left: 20px;
    padding-top: 50px;
  }
  .content {
    height: calc(100vh - 40px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .about-me {
      font-family: "Helvetica";
      text-decoration: none;
      color: #fff;
      font-size: 0.65em;
      background-color: #323232;
      width: 95%;
      display: flex;
      height: 85px;
      align-items: center;
      margin-bottom: 10%;
      border-radius: 10px;
      .show-more {
        display: none;
      }
      img {
        width: 75px;
        height: 75px;
        margin-left: 15px;
      }
      a {
        font-family: "Helvetica";
        font-size: 1.5em;
        margin-left: 15px;
        width: 100%;
      }
    }
    .menu {
      font-family: "Helvetica";
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      color: #fff;
      &--list {
        width: 95%;
        padding-bottom: 25px;
        .menu--link {
          width: 100%;
          height: 50px;
          background: #323232;
          display: flex;
          align-items: center;
          justify-content: space-around;
          text-decoration: none;
          color: #fff;
          &:nth-child(1) {
            border-radius: 10px 10px 0 0;
          }
          &:nth-child(3) {
            border-radius: 0 0 10px 10px;
          }
          .img {
            display: none;
          }
          .logo {
            width: 35px;
            height: 35px;
            border-radius: 10px;
            background: #6d6d6d;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .legend {
            width: 50%;
            font-size: 1em;
          }
          .arrow {
            height: 45px;
            width: 45px;
          }
        }
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
}
@media screen and (min-width: 768px) {
  .container > .content {
    .about-me {
      margin-bottom: 20%;
      height: 125px;
      font-size: 1.25em;
      img {
        height: 100px;
        width: 100px;
      }
    }
    .menu > .menu--list > .menu--link {
      height: 85px;
      .logo {
        width: 60px;
        height: 60px;
      }
      .legend {
        font-size: 1.5em;
      }
    }
  }
}
@media screen and (min-width: 1280px) {
  .navbar {
    display: flex;
  }
  .home {
    display: none;
  }
  .headbar {
    background: rgba(255, 255, 255, 0.25);
  }
  .container {
    width: 70%;
    min-height: 400px !important;
    margin: auto;
    margin-top: 5%;
    background-color: rgba(255, 255, 255, 0) !important;
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
      .about-me {
        background: #ededec;
        border-radius: 0;
        width: 100%;
        height: 15%;
        margin: 0;
        border-bottom: 1px solid #d6d6d5;
        img {
          width: 100px;
          height: 100px;
        }
        a {
          color: #000;
        }
        .show-more {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          margin-right: 5%;
          width: 75px;
          height: 75px;
          cursor: pointer;
          &:hover {
            filter: brightness(115%);
          }
          .logo {
            width: 40px;
            height: 40px;
            background: #ff9430;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .legend {
            text-align: center;
            width: 100%;
            color: #767676;
            font-size: 14px;
          }
        }
        .arrow {
          display: none;
        }
      }
      .menu {
        flex-direction: row;
        background: #e5e5e4;
        align-items: flex-start;
        height: 55%;
        border-radius: 0 0 20px 20px;
        &--list {
          width: 40%;
          padding: 0;
          display: flex;
          justify-content: space-around;
          margin-top: 15px;
          margin-left: 15px;
          height: auto;
          .menu--link {
            flex-direction: column;
            width: 175px;
            background: none;
            justify-content: center;
            height: 100px;
            border-radius: 20px !important;
            padding: 5px;
            &:hover {
              background: #adadad;
            }
            .logo {
              display: none;
            }
            .img {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 75px;
              height: 75px;
            }
            .legend {
              color: #767676;
              font-size: 16px !important;
              width: unset;
            }
            .arrow {
              display: none;
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1368px) {
  .container {
    width: 60%;
  }
  .container > .content {
    .about-me > .show-more {
      .logo {
        width: 50px;
        height: 50px;
      }
      .legend {
        font-size: 16px;
        width: 65px;
      }
    }
    .menu > .menu--list {
      width: 35%;
      .menu--link {
        height: 125px;
      }
    }
  }
}
</style>