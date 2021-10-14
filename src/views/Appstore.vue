<template>
  <HeadBar />
  <div class="container">
    <div class="head">{{ title }}</div>
    <div class="skill-list">
      <div v-for="item in skills" :key="item.id" class="skill">
        <div class="logo">
          <Icon :icon="item.logo" height="80%" width="80%" />
        </div>
        <div class="details">
          <div class="name">{{ item.name }}</div>
          <div class="categorie">{{ item.categorie }}</div>
        </div>
        <a class="show-more" :href="item.link" :title="item.name">Ouvrir</a>
      </div>
    </div>
    <div class="tab-bar">
      <router-link to="/competences/all" class="btn" active-class="active">
        <Icon icon="icon-park-outline:page" height="30" width="30" />
        <a title="Toutes">Toutes</a>
      </router-link>
      <router-link to="/competences/Langage" class="btn" active-class="active">
        <Icon icon="ic:baseline-rocket" height="30" width="30" />
        <a title="Langage">Langages</a>
      </router-link>
      <router-link
        to="/competences/Framework"
        class="btn"
        active-class="active"
      >
        <Icon icon="bx:bxs-layer" height="30" width="30" />
        <a title="framework">Frameworks</a>
      </router-link>
      <router-link to="/competences/Api" class="btn" active-class="active">
        <Icon icon="bi:joystick" height="30" width="30" />
        <a title="api">Api</a>
      </router-link>
      <router-link to="/competences/Outil" class="btn" active-class="active">
        <Icon icon="ant-design:setting-filled" height="30" width="30" />
        <a title="outil">Outils</a>
      </router-link>
    </div>
    <router-link to="/" class="home"><div class="bar"></div></router-link>
  </div>
</template>
<script>
import { API } from "aws-amplify";
import { createSkill } from "@/graphql/mutations";
import { listSkills } from "@/graphql/queries";
import { useRoute } from "vue-router";
import { Options, Vue } from "vue-class-component";
import { Icon } from "@iconify/vue";
import HeadBar from "@/components/HeadBar.vue";

@Options({
  components: {
    Icon,
    HeadBar,
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
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    background: rgba(78, 78, 78, 0.25);
    backdrop-filter: blur(15px);
    height: 70px;
    padding-bottom: 10px;
    .btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #666;
      font-family: "Helvetica";
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
</style>