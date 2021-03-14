new Vue({
    el: "#login",
    data: {
        username: "",
        password: ""
    },
    methods: {
        login: function() {
            sessionStorage.setItem("username", this.username);
            sessionStorage.setItem("password", this.password);
            location.href = "./";
        }
    },
    template: `
        <div id="login">
            <h1>Login</h1>
            <label for="username">
                Gebruikersnaam:
            </label><br>
            <input id="username" name="username" type="text" v-model="username"><br>
            <label for="password">
                Wachtwoord:
            </label><br>
            <input id="password" name="password" type="text" v-model="password"><br>
            <button class="btn" @click="login()" style="margin: 20px;">
                Login
            </button>
        </div>
    `
})