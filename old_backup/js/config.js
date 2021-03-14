require.config({
    baseUrl: 'js',
    paths: {
        about: 'components/about',
        contact: 'components/contact',
        error: 'components/error404',
        footer: 'components/footer',
        navbar: 'components/navbar',
        portfolio: 'components/portfolio',
        homepage: 'components/sitecontent'
    }
});
require(['main']);