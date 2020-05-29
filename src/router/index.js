import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import routes from './routes'

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        Vue.$cookies.keys().forEach(item => Vue.$cookies.remove(item))
        next();
    }
    let user = Vue.$cookies.get('username');
    if (!user && to.path !== '/login') {
        next({
            path: '/login'
        })
    } else {
        next();
    }
});

export default router