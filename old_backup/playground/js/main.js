requirejs.config({
    baseUrl: "./js/",
    paths: {
        main: "main",
        vue: "vue",
        jquery: "jquery",
        axios: "axios.min",
        app: "app"
    }
});

require(["main"], () => {
    require(["app", "vue"]);
});