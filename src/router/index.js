import {createRouter, createWebHashHistory} from 'vue-router';
import grassrootsPartyBuilding from '../pages/grassrootsPartyBuilding/index.vue'
import cadreStyle from '../pages/cadreStyle/index.vue'
import themeEducation from '../pages/themeEducation/index.vue'
import collectiveEconomy from '../pages/collectiveEconomy/index.vue'
import serviceManagement from '../pages/serviceManagement/index.vue'
import underConstruc from "../pages/underConstruc.vue";
const routes = [
    {
        path: '/',
        redirect: '/grassrootsPartyBuilding',
    },
    {
        path: '/grassrootsPartyBuilding',
        component: grassrootsPartyBuilding,
    },
    {
        path: '/cadreStyle',
        component: underConstruc,
    },
    {
        path: '/themeEducation',
        component: underConstruc,
    },
    {
        path: '/collectiveEconomy',
        component: underConstruc,
    },
    {
        path: '/serviceManagement',
        component: underConstruc,
    }
];

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes
})

export default router;
