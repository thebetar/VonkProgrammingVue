define(['vue-router', 'components/sitecontent', 'components/portfolio', 'components/about', 'components/contact', 'components/error404'], (VueRouter, siteContent, sitePortfolio, siteAbout, siteContact, error404) => {
    return new VueRouter({
        routes: [
            {
                path: '/',
                component: siteContent,
                meta: {
                    title: 'Web development - HTML, PHP, CSS en JavaScript | Vonk Programming'
                }
            },
            {
                path: '/home',
                component: siteContent,
                meta: {
                    title: 'Web development - HTML, PHP, CSS en JavaScript | Vonk Programming'
                }
            },
            {
                path: '/portfolio',
                component: sitePortfolio,
                meta: {
                    title: 'Portfolio | Vonk Programming'
                }
            },
            {
                path: '/about',
                component: siteAbout,
                meta: {
                    title: 'About | Vonk Programming'
                }
            },
            {
                path: '/contact',
                component: siteContact,
                meta: {
                    title: 'Contact | Vonk Programming'
                }
            },
            {
                path: "/*",
                component: error404,
                meta: {
                    title: 'Error 404 | Vonk Programming'
                }
            }
        ],
        mode: 'history'
    });
});