import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Chart from '../Chart.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/chart',
        name: 'Cahrt',
        component: Chart
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Login.vue')
    },
    // Scheduler
    {
        path: '/scheduler',
        name: 'scheduler',
        component: () =>
            import ('../views/Scheduler.vue')
    },
    // Profile
    {
        path: '/profile',
        name: 'profile',
        component: () =>
            import ('../views/Profile/Profile.vue')
    },
    {
        path: '/pkey',
        name: 'pkey',
        component: () =>
            import ('../views/Profile/Pkey.vue')
    },
    {
        path: '/chartboard',
        name: 'chartboard',
        component: () =>
            import ('../views/Chartboard.vue')
    },
    // Reception
    {
        path: '/recepton',
        name: 'reception',
        component: () =>
            import ('../views/Reception/Reception.vue'),
    },
    {
        path: '/recepton/guests',
        name: 'rec_guests',
        component: () =>
            import ('../views/Reception/Guests.vue'),
    },
    // Guests
    {
        path: '/guests',
        name: 'guests',
        component: () =>
            import ('../views/Guests/Guests.vue'),
    },
    {
        path: '/guests/guest',
        name: 'guest',
        component: () =>
            import ('../views/Guests/Guest.vue'),
    },
    // Finance
    {
        path: '/finance',
        name: 'finance',
        component: () =>
            import ('../views/Finance/Finance.vue'),
    },
    // Statistics
    {
        path: '/statistics',
        name: 'Statistics',
        component: () =>
            import ('../views/Statistics/Statistics.vue'),
    },
    {
        path: '/statistics/user',
        name: 'StatisticsUser',
        component: () =>
            import ('../views/Statistics/User.vue'),
    },
    // SEttings
    {
        path: '/settings',
        name: 'settings',
        component: () =>
            import ('../views/Settings/Settings.vue'),
    },
    {
        path: '/settings/registration',
        name: 'registration',
        component: () =>
            import ('../views/Settings/Registration.vue')
    },
    {
        path: '/settings/requisites',
        name: 'requisites',
        component: () =>
            import ('../views/Settings/Requisites.vue')
    },
    {
        path: '/settings/rols',
        name: 'rols',
        component: () =>
            import ('../views/Settings/Rols/Rols.vue')
    },
    {
        path: '/settings/rols/add/:id',
        name: 'role_add',
        component: () =>
            import ('../views/Settings/Rols/Add.vue')
    },
    {
        path: '/settings/rols/edit/:id',
        name: 'role_edit',
        component: () =>
            import ('../views/Settings/Rols/Edit.vue')
    },
    {
        path: '/settings/rooms',
        name: 'rooms',
        component: () =>
            import ('../views/Settings/Rooms/Rooms.vue')
    },
    {
        path: '/settings/rooms/edits',
        name: 'rooms_edits',
        component: () =>
            import ('../views/Settings/Rooms/Edit.vue')
    },
    {
        path: '/settings/floors',
        name: 'floors',
        component: () =>
            import ('../views/Settings/Block/Floors.vue')
    },
    {
        path: '/settings/floors/edits',
        name: 'floors_edits',
        component: () =>
            import ('../views/Settings/Block/Edit.vue')
    },
    {
        path: '/settings/partners',
        name: 'partners',
        component: () =>
            import ('../views/Settings/Partner/Partners.vue')
    },
    {
        path: '/settings/partners/tours',
        name: 'tours',
        component: () =>
            import ('../views/Settings/Partner/Tours.vue')
    },
    {
        path: '/settings/rules',
        name: 'rulse',
        component: () =>
            import ('../views/Settings/Rules/Rules.vue')
    },
    {
        path: '/settings/documents',
        name: 'documents',
        component: () =>
            import ('../views/Settings/Documents/Documents.vue')
    },

    {
        path: '/settings/documents/settings',
        name: 'documents_setting',
        component: () =>
            import ('../views/Settings/Documents/Settings.vue')
    },
    {
        path: '/settings/facilities',
        name: 'facilities',
        component: () =>
            import ('../views/Settings/Facilities/Facilities.vue')
    },
    {
        path: '/settings/tariffs',
        name: 'tariffs',
        component: () =>
            import ('../views/Settings/Tariffs/Tariffs.vue')
    },
    {
        path: '/settings/tariffs/new',
        name: 'new_tariffs',
        component: () =>
            import ('../views/Settings/Tariffs/New.vue')
    },
    {
        path: '/settings/tariffs/settings',
        name: 'sett_tariffs',
        component: () =>
            import ('../views/Settings/Tariffs/Settings.vue')
    },
    {
        path: '/settings/tariffs/settings/calculation',
        name: 'setcal_tariffs',
        component: () =>
            import ('../views/Settings/Tariffs/Calculation.vue')
    },
    {
        path: '/settings/price',
        name: 'price',
        component: () =>
            import ('../views/Settings/Price/Price.vue')
    },
    {
        path: '/settings/activation',
        name: 'activation',
        component: () =>
            import ('../views/Settings/Activation/Activation.vue')
    },
    {
        path: '/settings/activation/key',
        name: 'activation_key',
        component: () =>
            import ('../views/Settings/Activation/Key.vue')
    }

]

const router = new VueRouter({
    routes
})

export default router