import {createRouter, createWebHashHistory} from 'vue-router';
import grassrootsPartyBuilding from '../pages/grassrootsPartyBuilding/index.vue'
import cadreStyle from '../pages/cadreStyle/index.vue'
import themeEducation from '../pages/themeEducation/index.vue'
import collectiveEconomy from '../pages/collectiveEconomy/index.vue'
import serviceManagement from '../pages/serviceManagement/index.vue'
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
        component: cadreStyle,
    },
    {
        path: '/themeEducation',
        component: themeEducation,
    },
    {
        path: '/collectiveEconomy',
        component: collectiveEconomy,
    },
    {
        path: '/serviceManagement',
        component: serviceManagement,
    }
];

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes
})

export default router;
