define(['vue', 'router', 'main'], (Vue, router) => {
    return Vue.component('siteNavbar', {
        data: function() {
            return {
                navbar: 0
            };
        },
        directives: {
            headNav: {
                bind: function(el, binding, vnode) {
                    el.id = binding.value;
                    el.setAttribute("title", binding.value);
                    el.className = "siteHeaderListItem";
                }
            }
        },
        methods: {
            showNavbar: function() {
                if (this.navbar == 0) {
                    $("#responsiveNavbar").css({
                        left: 0,
                        opacity: 1
                    });
                    
                    setTimeout( () => {
                        $("#responsiveNavbar a").css({
                            width: "100%"
                        });
                    }, 300);
                    this.navbar++;
                } else {
                    $("#responsiveNavbar a").css({
                        width: "50%"
                    });
                    setTimeout( () => {
                        $("#responsiveNavbar").css({
                            opacity: 0,
                            left: '-100%'
                        });
                    }, 200);
                    this.navbar = 0;
                }
            }
        },
        template: `
            <div>
                <div id="siteHeader" class="siteHeader">
                    <div class="siteHeaderContent">
                        <ul>
                            <li v-headNav="'home'">
                                <router-link name="home" title="Home" to="/home">
                                    <i class="material-icons md-18">
                                        home
                                    </i>
                                    Home
                                </router-link>
                            </li>
                            <li v-headNav="'portfolio'">
                                <router-link name="portfolio" title="Portfolio" to="/portfolio">
                                    <i class="material-icons md-18">
                                        folder
                                    </i>
                                    Portfolio
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <router-link name="home" title="Home" to="/home">
                            <img class="logo" src="/media/logo.png" id="navbarLogo">
                        </router-link>
                    </div>
                    <div class="siteHeaderContent">
                        <ul>
                            <li v-headNav="'contact'">
                                <router-link name="contact" title="Contact" to="/contact">
                                    <i class="material-icons md-18">
                                        call
                                    </i>
                                    Contact
                                </router-link>
                            </li>
                            <li v-headNav="'about'">
                                <router-link name="over" title="Over" to="/about">
                                    <i class="material-icons md-18">
                                        face
                                    </i>
                                    About me
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <button id="responsive-button" v-on:click="showNavbar()">&#8801;</button>
                </div>
                <transition>
                    <div id="responsiveNavbar" class="responsive-navbar">
                        <ul>
                            <li v-headNav="'home'">
                                <router-link name="home" title="Home" to="/home">
                                    <i class="material-icons md-18">
                                        home
                                    </i>
                                    Home
                                </router-link>
                            </li>
                            <li v-headNav="'portfolio'">
                                <router-link name="portfolio" title="Portfolio" to="/portfolio">
                                    <i class="material-icons md-18">
                                        folder
                                    </i>
                                    Portfolio
                                </router-link>
                            </li>
                            <li v-headNav="'contact'">
                                <router-link title="Contact" to="/contact">
                                    <i class="material-icons md-18">
                                        call
                                    </i>
                                    Contact
                                </router-link>
                            </li>
                            <li v-headNav="'contact'">
                                <router-link title="Over" to="/about">
                                    <i class="material-icons md-18">
                                        face
                                    </i>
                                    About me
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </transition>
                <slot></slot>
            </div>
        `
    });
});