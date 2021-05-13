<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <!-- simulate creating a way to navigate to another component down the line sequentially -->
    <router-link to="/teams/t2">Go to Next Team</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  //remember when importing props from path, the prop HAS TO MATCH whats in the prop
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: []
    };
  },
  // computed:{
  //   nextId(){
  //     const teamId = this.$route.params.teamId;
  //     const currentTeam = this.teams.find(team=>team.id = teamId);
  //     const index = this.teams.indexOf(currentTeam);
  //     if(index+1 > this.teams.length){
  //       return 1;
  //     }else{
  //       return index+1;
  //     }
  //   }
  // },
  methods:{
    //dont forget to use different namespaces....the overuse in these examples is....a choice....
    loadTeamMembers(teamId){
      //the name after .params is the same as what you put in Path in main.js
    // const teamId = route.params.teamId;
    const selectedTeam = this.teams.find((team)=>team.id === teamId);
    const members = selectedTeam.members;
    const selectedMembers = []
    for(const member of members){
      const selectedUser = this.users.find((user)=> user.id === member)
      selectedMembers.push(selectedUser);
    }
    this.members = selectedMembers;
    this.teamNane = selectedTeam.name;
    }
  },
  created(){
    this.loadTeamMembers(this.teamId);
    console.log(this.$route.query)
  },
  watch: {
    teamId(newId){
      this.loadTeamMembers(newId)
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>