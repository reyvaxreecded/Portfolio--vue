<template>
  <div id="admin">
    <h1>Skill app</h1>
    <input type="text" v-model="name" placeholder="name" />
    <input type="text" v-model="categorie" placeholder="categorie" />
    <input type="text" v-model="logo" placeholder="logo" />
    <input type="text" v-model="link" placeholder="link" />
    <button v-on:click="createSkill">Create Skill</button>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Categorie</th>
          <th>Logo</th>
          <th>Link</th>
        </tr>
      </thead>
      <tr v-for="item in skills" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.categorie }}</td>
        <td>{{ item.logo }}</td>
        <td>{{ item.link }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { API, graphqlOperation } from "aws-amplify";
import { createSkill } from "@/graphql/mutations";
import { listSkills } from "@/graphql/queries";

export default {
  name: "Admin",
  async created() {
    this.getSkills();
  },
  data() {
    return {
      name: "",
      categorie: "",
      logo: "",
      link: "",
      skills: [],
    };
  },
  methods: {
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
    },
    async getSkills() {
      let filter = {
          categorie: {
              eq: "Framework"
          }
      };  
      const skills = await API.graphql({query:listSkills, variables: {filter: filter}});
      this.skills = skills.data.listSkills.items;
    },
  },
};
</script>
<style lang="scss" scoped>
#admin {
  background: rgb(88, 193, 219);
  min-height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  table {
    margin: 5%;
    background: #fff;
    box-shadow: 1px 1px 100px black;
    border-spacing: 0;
    th {
      width: 25%;
      background: #fff;
      color: #000;
      font-family: "Helvetica";
      font-size: 20px;
    }
    tr:nth-child(even) {
      background-color: gray;
    }
    tr:nth-child(odd) {
      color: #000;
    }
    td {
      text-align: center;
      height: 40px;
      font-family: "Helvetica";
      font-size: 18px;
    }
  }
}
</style>