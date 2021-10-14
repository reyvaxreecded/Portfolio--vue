<template>
  <div class="nav__bar">
    <div class="nav--list">
      <a class="phone" href="tel:+330629386865">
        <Icon icon="carbon:phone-filled" color="white" height="80%" />
      </a>
      <router-link to="/contact" class="mail">
        <Icon icon="uiw:mail" color="white" height="80%" />
      </router-link>
      <a class="github" href="https://github.com/reyvaxreecded">
        <Icon icon="akar-icons:github-fill" color="white" height="80%" />
      </a>
      <router-link to="/competences/all" class="appstore">
        <Icon icon="simple-icons:appstore" color="white" height="80%" />
      </router-link>
      <a class="about-us"></a>
      <a
        class="linkedin"
        href="https://www.linkedin.com/in/xavier-deredec-58bb75113/"
      >
        <Icon icon="cib:linkedin-in" color="white" height="80%" />
      </a>
      <a class="ae-pierrefeu"></a>
      <a class="djkiwixx"></a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Icon } from "@iconify/vue";

@Options({
  components: {
    Icon,
  },
})
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
.nav__bar {
  background: rgba(145, 145, 145, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 15px;
  min-height: 15%;
  position: absolute;
  bottom: 10px;
  left: 5%;
  right: 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .nav--list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    a, router-link {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 55px;
      width: 55px;
      border-radius: 10px;
    }
    .phone {
      background: linear-gradient(225deg, #b0ffa3 0%, #1ccb00 100%);
    }
    .github {
      background: linear-gradient(225deg, #cba3ff 0%, #4100cb 100%);
    }
    .mail {
      background: linear-gradient(
        180deg,
        #14426c -7.5%,
        #3273a8 -7.49%,
        #6dcbff 106.67%
      );
    }
    .linkedin {
      background: linear-gradient(225deg, #a3bcff 0%, #0039cb 100%);
    }
    .appstore,
    .ae-pierrefeu,
    .about-us,
    .djkiwixx {
      display: none !important;
    }
  }
  @media screen and (min-width: 360px) {
    min-height: 12.5%;
    border-radius: 20px;
    a, router-link {
      height: 60px !important;
      width: 60px !important;
    }
  }
  @media screen and (min-width: 390px) and (min-height: 780px) {
    a, router-link {
      height: 70px !important;
      width: 70px !important;
    }
  }
  @media screen and (min-width: 768px) {
    width: 60%;
    left: 20%;
    right: 20%;
    a, router-link {
      width: 80px !important;
      height: 80px !important;
    }
  }
  @media screen and (min-width: 800px) {
    min-height: 10%;
    width: 55%;
    left: 22.5%;
    right: 22.5%;
  }
  @media screen and (min-width: 1280px) {
    width: 45%;
    min-height: 10%;
    left: 27.5%;
    right: 27.5%;
    .nav--list {
      width: 98%;
      a, router-link {
        height: 60px !important;
        width: 60px !important;
        cursor: pointer;
        transition-duration: 0.1s;
        &:hover {
          transition-duration: 0.1s;
          transform: scale(1.5);
        }
      }
      .phone {
        display: none !important;
      }
      .appstore {
        display: flex !important;
        background: linear-gradient(180deg, #6dcbff 0%, #14426c 100%);
      }
      .about-us {
        display: block !important;
        background: url("../assets/setting.jpg");
        background-size: cover;
        background-position-x: 48%;
        background-position-y: 20%;
        background-repeat: no-repeat;
      }
      .ae-pierrefeu {
        display: block !important;
        background: url("../assets/ae.png"), #ffffff;
        background-size: cover;
      }
      .djkiwixx {
        display: block !important;
        background: url("../assets/djkiwixx.png");
        background-size: cover;
      }
    }
  }
  @media screen and (min-width:1368px) {
      width: 30%;
      left: 35%;
      right: 35%;
      min-height: 9%;
  }
}
</style>