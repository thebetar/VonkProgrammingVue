import VueRouter from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('./pages/HomePage.vue')
    },
    {
        path: '/portfolio',
        component: () => import('./pages/PortfolioPage.vue')
    },
    {
        path: '/contact',
        component: () => import('./pages/ContactPage.vue')
    },
    {
        path: '*',
        redirect: '/'
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    const title = to.path.split('/')[1];
    document.title = `${title.charAt(0).toUpperCase() +
        title.slice(1, title.length)} | VonkProgramming`;
    next();
    window.scrollTo(0, 0);
});

export default router;
