<template>
  <HeadBar />
  <div class="container">
    <div class="right">
      <div class="head">{{ title }}</div>
      <div class="skill-list">
        <div v-for="item in skills" :key="item.id" class="skill">
          <div class="logo">
            <Icon :icon="item.logo" height="80%" width="80%" />
          </div>
          <div class="line">
            <div class="details">
              <div class="name">{{ item.name }}</div>
              <div class="categorie">{{ item.categorie }}</div>
            </div>
            <a class="show-more" :href="item.link" :title="item.name">Ouvrir</a>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-bar">
      <div class="top-nav">
        <router-link to="/" class="close"></router-link>
        <div class="growth"></div>
        <div class="reduce"></div>
      </div>
      <div class="search">
        <Icon icon="fluent:search-12-filled" color="#333" class="logo" />
        <p>Rechercher</p>
      </div>
      <router-link to="/competences/all" class="btn" active-class="active">
        <Icon icon="icon-park-outline:page" class="icon" />
        <a title="Toutes">Toutes</a>
      </router-link>
      <router-link to="/competences/Langage" class="btn" active-class="active">
        <Icon icon="ic:baseline-rocket" class="icon" />
        <a title="Langage">Langages</a>
      </router-link>
      <router-link
        to="/competences/Framework"
        class="btn"
        active-class="active"
      >
        <Icon icon="bx:bxs-layer" class="icon" />
        <a title="framework">Frameworks</a>
      </router-link>
      <router-link to="/competences/Api" class="btn" active-class="active">
        <Icon icon="bi:joystick" class="icon" />
        <a title="api">Api</a>
      </router-link>
      <router-link to="/competences/Outil" class="btn" active-class="active">
        <Icon icon="ant-design:setting-filled" class="icon" />
        <a title="outil">Outils</a>
      </router-link>
    </div>
    <router-link to="/" class="home"><div class="bar"></div></router-link>
  </div>
  <Navbar class="navbar" />
</template>
<script>
import { API } from "aws-amplify";
import { createSkill } from "@/graphql/mutations";
import { listSkills } from "@/graphql/queries";
import { useRoute } from "vue-router";
import { Options, Vue } from "vue-class-component";
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
export default class Appstore extends Vue {
  title;
  async created() {
    const route = useRoute();
    const param = route.params.filter;
    this.getSkills(param);
  }
  async updated() {
    const route = useRoute();
    const param = route.params.filter;
    this.getSkills(param);
  }
  data() {
    return {
      name: "",
      categorie: "",
      logo: "",
      link: "",
      skills: [],
    };
  }
  async createSkill() {
    const { name, categorie, logo, link } = this;
    if (!name || !categorie || !logo || !link) return;
    const skill = { name, categorie, logo, link };
    await API.graphql({
      query: createSkill,
      variables: { input: skill },
    });
    this.name = "";
    this.categorie = "";
    this.logo = "";
    this.link = "";
  }
  async getSkills(param) {
    if (param == "all") {
      const skills = await API.graphql({
        query: listSkills,
      });
      this.title = "Toutes";
      this.skills = skills.data.listSkills.items;
    } else {
      let filter = {
        categorie: {
          eq: param,
        },
      };
      const skills = await API.graphql({
        query: listSkills,
        variables: { filter: filter },
      });
      this.title = param + "s";
      this.skills = skills.data.listSkills.items;
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  display: none;
}
.top-nav {
  display: none;
}
.container {
  background-color: #111;
  min-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  .head {
    color: #fff;
    font-family: "Helvetica";
    font-weight: bold;
    border-bottom: 1px solid #5f5f5f;
    font-size: 3em;
    padding: 10px;
  }
  .skill-list {
    display: flex;
    flex-direction: column;
    padding-bottom: 90px;
    .skill {
      border-bottom: 1px solid #5f5f5f;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .logo {
        width: 60px;
        height: 60px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
      }
      .line {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: calc(100% - 70px);
        height: 60px;
      }
      .details {
        width: 30%;
        color: #fff;
        font-family: "Helvetica";
        display: flex;
        justify-content: center;
        flex-direction: column;
        .name {
          font-weight: bold;
          font-size: 1.25em;
        }
      }
      .show-more {
        width: 40%;
        height: 35px;
        background-color: #fff;
        color: #196deb;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        font-size: 18px;
        font-family: "Helvetica";
        font-weight: bold;
      }
    }
  }
  .tab-bar {
    .top-nav {
      display: none;
    }
    .search {
      display: none;
    }
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    position: fixed;
    bottom: 0;
    background: rgba(78, 78, 78, 0.25);
    backdrop-filter: blur(15px);
    height: 85px;
    .btn {
      padding: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #666;
      font-family: "Helvetica";
      .icon {
        width: 30px;
        height: 30px;
      }
    }
  }
  .home > .bar {
    width: 70%;
    height: 10px;
    background-color: #fff;
    border-radius: 20px;
    text-decoration: none;
    position: fixed;
    bottom: 10px;
    left: 15%;
    right: 15%;
  }
}
.active {
  color: #196deb !important;
}
@media screen and (min-width: 768px) {
  .home > .bar {
    width: 40% !important;
    left: 30% !important;
    right: 30% !important;
  }
  .skill-list {
    padding-bottom: 115px !important;
    .skill {
      .logo {
        width: 80px !important;
        height: 80px !important;
      }
      .line {
        width: calc(100% - 95px) !important;
        height: 80px !important;
      }
      .details {
        .name {
          font-size: 26px !important;
        }
        .categorie {
          font-size: 20px;
        }
      }
      .show-more {
        font-size: 24px !important;
        height: 45px !important;
      }
    }
  }
  .tab-bar {
    height: 115px !important;
    .btn {
      font-size: 20px;
      .icon {
        width: 50px !important;
        height: 50px !important;
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
  .container {
    width: 80%;
    min-height: 400px !important;
    height: 500px;
    margin: auto;
    margin-top: 5%;
    flex-direction: row-reverse;
    justify-content: flex-end;
    background-color: transparent !important;
    .right {
      display: flex;
      flex-direction: column;
      width: 70%;
      height: 500px;
      padding-top: 20px;
      background-color: #fff;
      border-radius: 0 20px 20px 0;
      padding-bottom: 10px;
      .head {
        border-bottom: none;
        font-size: 36px !important;
        color: #111;
      }
      .skill-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-right: 10px;
        overflow-y: scroll;        
        .skill {
          width: 45%;
          border-bottom: none;
          .logo {
            width: 60px !important;
            height: 60px !important;
          }
          .line {
            width: calc(100% - 60px) !important;
            height: 60px !important;
            border-bottom: 1px solid #b1b1b1;
          }
          .details {
            width: 35%;
            .name {
              font-size: 18px !important;
              color: #111;
            }
            .categorie {
              font-size: 14px !important;
              color: #111;
            }
          }
          .show-more {
            height: 25px !important;
            font-size: 18px !important;
            background-color: #ededed;
          }
        }
      }
    }
    .tab-bar {
      position: relative;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding-top: 10px;
      height: 520px !important;
      width: 30%;
      border-radius: 20px 0 0 20px;
      .top-nav {
        display: flex;
        width: 90%;
        .close,
        .growth,
        .reduce {
          width: 15px;
          height: 15px;
          border-radius: 20px;
          margin: 5px;
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
      }
      .search {
        display: flex;
        align-items: center;
        width: 70%;
        height: 30px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.25);
        margin: 10px;
        .logo {
          width: 25px;
          height: 25px;
          padding-right: 10px;
        }
        p {
          font-family: "Helvetica";
          color: rgba(115, 66, 66, 0.35);
          font-size: 20px;
        }
      }
      .btn {
        flex-direction: row;
        justify-content: flex-start;
        width: 90% !important;
        padding: 5px;
        border-radius: 8px;
        .icon {
          width: 20px !important;
          height: 20px !important;
          color: #196deb !important;
        }
        a {
          color: #111;
        }
      }
    }
  }
  .active {
    color: unset !important;
    background: rgba(255, 255, 255, 0.25) !important;
  }  
}
@media screen and (min-width: 1368px) {
  .container {
    .right {
      height: 600px !important;
    }
    .tab-bar {
      height: 620px !important;
    }
  }
}
</style>