import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/what',
        name: 'What',
        component: () =>
            import ('../views/What.vue')
    },
    {
        path: '/example',
        name: 'example',
        component: () =>
            import ('../views/Example.vue')
    },
    {
        path: '/source',
        name: 'source',
        component: () =>
            import ('../views/Source.vue')
    },
    {
        path: '/How',
        name: 'How',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../views/How.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router