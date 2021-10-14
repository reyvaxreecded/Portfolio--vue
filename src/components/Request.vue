<script>
import { API } from "aws-amplify";
import { createSkill } from "@/graphql/mutations";
import { listSkills } from "@/graphql/queries";

export default {
  name: "Request",
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