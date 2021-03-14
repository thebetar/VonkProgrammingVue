define(['vue'], (Vue) => {
    return Vue.component('error404', {
        template: `
            <div class="siteContentRow errorDiv">
                <div class="errorText">
                    Error 404, page not found!
                </div>
            </div>
        `
    });
});