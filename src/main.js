import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; 

import App from './App.vue'
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/teams/UserFooter.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/teams'},
        //with alias the url does not change
        { 
            name: 'teams',
            path: '/teams', 
            components: {default: TeamsList, footer: TeamsFooter },
            children: [
                { name: 'team-members', path: '/teams/:teamId', component: TeamMembers, props:true}
            ] 
        }, //when /teams is loaded a certain component is loaded
        { 
        path: '/users', 
        components: {
            default: UsersList,
            footer: UsersFooter
            } 
        },
        // dynamic parameters should be passed into component as props rather than just $route property
        // :teamId will be passed into the named component as a prop
        {path: '/:notFound(.*)', component: NotFound}
    ],
    linkActiveClass: 'active'
});

const app = createApp(App)
app.use(router)

app.mount('#app');
