import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; 

import App from './App.vue'
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/teams', component: TeamsList }, //when /teams is loaded a certain component is loaded
        { path: '/users', component: UsersList } ,
        // dynamic parameters should be passed into component as props rather than just $route property
        // :teamId will be passed into the named component as a prop
        { path: '/teams/:teamId', component: TeamMembers, props:true}
    ],
    linkActiveClass: 'active'
});

const app = createApp(App)
app.use(router)

app.mount('#app');
