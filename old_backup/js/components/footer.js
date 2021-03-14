define(['vue'], (Vue) => {
    return Vue.component('siteFooter', {
        data: function() {
            return {

            }
        },
        template: `
            <div class="siteContentFooter">
                <div class="siteContentBox" style="width: 400px;">
                    <span class="footerContentListHeader">
                        Contact
                    </span>
                    <div class="footerLink">
                        <a href="tel:0639119996">
                            <i class="fas fa-phone-square"></i>
                            <span>06-39119996</span>
                        </a>
                        <a href="mailto:info@vonkprogramming.nl">
                            <i class="fas fa-envelope-square"></i>
                            <span>info@vonkprogramming.nl</span>
                        </a>
                        <a href="https://www.linkedin.com/in/lars-v-82455612a" target="_blank" class="clickable">
                            <i style="font-size: 28px; color: #2867B2;" class="fab fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                    </div>    
                </div>
                <div id="footerContentList" class="siteContentBox">
                    <span class="footerContentListHeader">
                        Pagina's
                    </span>
                    <ul class="siteContentList">
                        <li id="home" @click="setActive('home')" class="siteHeaderListItem">
                            <router-link to="/home">
                                <i class="material-icons md-18">
                                    home
                                </i>
                                Home
                            </router-link>
                        </li>
                        <li id="portfolio" @click="setActive('portfolio')" class="siteHeaderListItem">
                            <router-link to="/portfolio">
                                <i class="material-icons md-18">
                                    folder
                                </i>
                                Portfolio
                            </router-link>
                        </li>
                        <li id="contact" @click="setActive('contact')" class="siteHeaderListItem">
                            <router-link to="/contact">
                                <i class="material-icons md-18">
                                    call
                                </i>
                                Contact
                            </router-link>
                        </li>
                        <li id="about" @click="setActive('about')" class="siteHeaderListItem">
                            <router-link to="/about">
                                <i class="material-icons md-18">
                                    face
                                </i>
                                About me
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        `
    });
});