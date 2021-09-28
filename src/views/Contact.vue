<template>
  <HeadBar />
  <div class="container">
    <div class="top-nav">
      <router-link to="/" class="close"></router-link>
      <div class="growth"></div>
      <div class="reduce"></div>
      <Icon icon="cil:send" color="#797979" height="70%" class="send" />
      <div class="CC-list">
        <Icon
          icon="ant-design:unordered-list-outlined"
          color="#797979"
          height="70%"
        />
        <Icon icon="dashicons:arrow-down-alt2" color="#797979" />
      </div>
      <Icon icon="bi:reply" color="#797979" height="70%" class="reply" />
      <Icon icon="entypo:attachment" color="#797979" height="70%" />
      <Icon icon="ion:document-attach-outline" color="#797979" height="70%" />
      <Icon icon="carbon:letter-aa-large" color="#797979" height="70%" />
      <Icon icon="fluent:emoji-24-regular" color="#797979" height="70%" />
      <div class="Img-list">
        <Icon icon="ic:round-photo-library" color="#797979" height="70%" />
        <Icon icon="dashicons:arrow-down-alt2" color="#797979" />
      </div>
    </div>
    <form action="" method="POST">
      <div class="head">
        <h1>Contact</h1>
        <div class="submit">
          <Icon icon="bi:arrow-up-circle-fill" color="#196deb" height="3em" />
        </div>
      </div>
      <input type="text" name="firstname" id="firstname" placeholder="Nom :" />
      <input type="text" name="surname" id="surname" placeholder="Prénom :" />
      <input type="email" name="mail" id="mail" placeholder="E-mail :" />
      <input type="text" name="subject" id="subject" placeholder="Sujet :" />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="15"
        placeholder="Message :"
      ></textarea>
    </form>
    <router-link to="/" class="home"><div class="bar"></div></router-link>
    <Navbar class="navbar" />
  </div>
</template>
<script>
import { Options, Vue } from "vue-class-component";
import { Icon } from "@iconify/vue";
import HeadBar from "@/components/HeadBar.vue";
import Navbar from '@/components/Navbar.vue'

@Options({
  components: {
    Icon,
    HeadBar,
    Navbar,
  },
})
export default class Contact extends Vue {}
</script>
<style lang="scss" scoped>
.navbar{
    display: none;
}
.container {
  background-color: #111 !important;
  min-height: calc(100vh - 39px);
  .top-nav {
    display: none;
  }
  form {
    display: flex;
    flex-direction: column;
    .head {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      h1 {
        color: #fff;
        font-family: "Helvetica";
        font-weight: 400;
        text-align: center;
        margin-left: 10%;
      }
      .submit {
        position: relative;
        left: 15%;
      }
    }
    input,
    textarea {
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 2px solid #3d3d3d;
      color: #3d3d3d;
      background: #111;
      font-family: "Helvetica";
      font-size: 1em;
    }
    input {
      height: 2em;
    }
    textarea {
      resize: none;
      height: 9em;
      margin-top: 5px;
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

/* Media Queries */
@media screen and (min-width: 360px) {
  input {
    height: 3em !important;
  }
  textarea {
    height: 16em !important;
    margin-top: 10px !important;
  }
  .submit {
    left: 20% !important;
  }
}
@media screen and (min-width: 768px) {
  input {
    height: 5em !important;
    font-size: 1.25em !important;
  }
  textarea {
    font-size: 1.25em !important;
  }
  .submit {
    left: 30% !important;
  }
}
@media screen and (min-width: 1280px) {
  .navbar {
    display: flex;
  }
  .container {
    width: 50%;
    min-height: 400px !important;
    margin: auto;
    margin-top: calc(5%);
    background-color: rgba(255, 255, 255, 0) !important;
    .top-nav {
      width: 100%;
      background: #f4f2f2;
      filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
      border-radius: 15px 15px 0px 0px;
      display: grid;
      grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.7fr;
      grid-template-rows: 30px;
      place-items: center;
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
        background-color: #d73c3c;
        &:hover {
          background-color: #ff5e5e;
        }
        &:active {
          box-shadow: inset 0px 0px 10px 1px #6d1c1c;
        }
      }
      .growth {
        background-color: #f2b456;
        &:hover {
          background-color: #ffd95b;
        }
      }
      .reduce {
        background-color: #6fd93d;
        &:hover {
          background-color: #7ffa46;
        }
      }
      .send:hover {
        color: #196deb !important;
        cursor: pointer;
      }
      .reply {
        grid-column-start: 7;
      }
      .CC-list,
      .Img-list {
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
    form {
      background: #fff;
      padding-left: 2.5%;
      border-radius: 0px 0px 15px 15px;
      height: 400px;
      .head {
        display: none !important;
      }
      input,
      textarea {
        background: #fff;
        font-size: 1em !important;
        &:focus-visible {
          outline-style: none !important;
        }
      }
      input {
        border-bottom: 1.5px solid #9b9b9b;
        height: 2em !important;
      }
      textarea {
        border-bottom: none;
        margin-top: 10px;
        width: calc(100% - 25px);
        height: 20em !important;
      }
    }
    .home {
      display: none;
    }
  }
}
@media screen and (min-width: 1368px) {
  .container {
    min-height: 500px !important;
    width: 40%;
  }
  form {
    height: 500px !important;
  }
}
</style>