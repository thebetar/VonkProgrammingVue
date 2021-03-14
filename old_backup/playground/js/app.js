define(['vue', 'axios'], (Vue, axios) => {
    new Vue({
        el: "#app",
        data: {
            loggedIn: false
        },
        created: function () {
            var login = sessionStorage.getItem("username");
            var password = sessionStorage.getItem("password");
            
            var params = new URLSearchParams();
            params.append('username', login);
            params.append('password', password);
            params.append('async', 'true');
            
            var url = window.location.href + "php/db.php";

            axios.post(url, params)
            .then(res => {
                if(res.data != "Success") {
                    location.href ='./login.html';
                }
            })
            .catch(error => {
                console.log(error);
            });
        },
        methods: {
            logout: function () {
                sessionStorage.clear();
                location.reload();
            }
        },
        template: `
            <div id="app">
                <button class="btn" @click="logout">Log out</button>
                <h1>Playground</h1>
                <p>
                    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed pharetra erat. Suspendisse viverra vulputate sapien ut mattis. Donec bibendum felis vel orci rutrum bibendum. Nunc non augue sem. Sed eu tincidunt ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum nec nibh est. Mauris tincidunt erat vel lectus facilisis, id elementum orci volutpat. Curabitur viverra dictum sapien, sed vulputate ante ornare posuere.

    Quisque accumsan tellus nec vulputate ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vitae erat at libero sollicitudin sollicitudin. Suspendisse dictum enim a nisl rhoncus mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ac odio eu lectus tincidunt malesuada a eleifend dolor. Aenean ut mauris dolor. Nulla facilisis tellus in ante euismod, sit amet facilisis mi bibendum. Praesent varius condimentum ex, sit amet auctor dolor accumsan ut. Morbi turpis orci, mollis non aliquam non, porttitor non enim. Fusce imperdiet nisi erat, et mattis turpis sodales dignissim. Pellentesque at eleifend lacus. Sed iaculis lectus at pharetra viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
            </div>
        `
    });
});