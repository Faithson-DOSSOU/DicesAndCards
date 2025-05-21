import { createRouter, createWebHistory } from 'vue-router';
import App from "../App.vue";
import Dashboard from '../components/Dashboard.vue'
import DefaultLayout from "../components/DefaultLayout.vue";

import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";

import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Events from '../components/Events.vue';
import Catalogue from "../components/Catalogue.vue";
import ReservationForm from "../components/ReservationForm.vue";

const routes = [
    {
        path:'/',
        name: 'App',
        component: App,
        redirect: '/Home'
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/DefaultLayout',
        name: 'DefaultLayout',
        component: DefaultLayout,
        redirect: '/Home'
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    },
    {
        path : '/Home',
        name : 'Home',
        component : Home,
    },
    {
        path: '/reservation/:jeuId',
        name: 'ReservationForm',
        component : ReservationForm,
        props: true
    },

    {
        path : '/About',
        name : 'About',
        component : About
    },
    {
        path : '/Events',
        name : 'Events',
        component : Events
    },
    {
        path : '/Catalogue',
        name : 'Catalogue',
        component : Catalogue
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;