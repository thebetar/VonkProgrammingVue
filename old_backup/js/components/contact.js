define(['vue'], (Vue) => {
    return Vue.component('siteContact', {
        data: function() {
            return {

            };
        },
        methods: {
            sendMail: function() {
                var mail = {};
                mail.naam = document.getElementById('naam').value;
                mail.telefoon = document.getElementById('telefoon').value;
                mail.email = document.getElementById('email').value;
                mail.vraag = document.getElementById('vraag').value;
                if(mail.naam == "" || mail.telefoon == "" || mail.email == "" || mail.vraag == "") {
                    alert("U bent velden vergeten in te vullen");
                    return;
                }
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        $('.formArrange').css({
                            opacity: 0,
                            marginLeft: '20%'
                        });

                        let height = document.getElementsByClassName('contactDiv')[0].clientHeight;
                        $('#formSuccess').css({
                            opacity: 1,
                            right: '40%',
                            marginTop: (height/2)-100
                        });
                    }
                };
                xhttp.open('POST', '/php/mail.php?naam='+mail.naam+'&telefoon='+mail.telefoon+'&email='+mail.email+'&vraag='+mail.vraag, true);
                xhttp.send();
            }
        },
        template: `
            <div>
                <div v-mediaDiv="{id: 'contactMedia', media: 'contact', height: '100%', size: 'large'}">
                    <div class="mediaHeader">
                        <div class="contactCard">
                            <div>
                                Contact
                            </div>
                            <div class="contactDiv">
                                <div id="contactInfo">
                                    <h2>Heeft u vragen?</h2>
                                    <p>
                                        Vul dit formulier in en kom direct in contact met mij!
                                    </p>
                                    <span>
                                        <i class="material-icons md-18">
                                            call
                                        </i>
                                        Phone:
                                    </span><br>
                                    <a href="tel:0639119996"><b>06-39119996</b></a><br>
                                    <span>
                                        <i class="material-icons md-18">
                                            mail
                                        </i>
                                        Email:
                                    </span><br>
                                    <a href="mailto:info@vonkprogramming.nl"><b>info@vonkprogramming.nl</b></a>
                                </div>
                                <div id="form">
                                    <div class="formArrange">
                                        <label for="naam">Naam:</label>
                                    </div>
                                    <div class="formArrange">
                                        <input id="naam" type="text" class="formText" placeholder="Naam">
                                    </div>
                                    <div class="formArrange formMargin">
                                        <label for="telefoon">Telefoonnummer:</label>
                                    </div>
                                    <div class="formArrange">
                                        <input id="telefoon" type="text" class="formText" placeholder="Telefoonnummer">
                                    </div>
                                    <div class="formArrange formMargin">
                                        <label for="email">Emailadres:</label>
                                    </div>
                                    <div class="formArrange">
                                        <input id="email" type="text" class="formText" placeholder="Emailadres">
                                    </div>
                                    <div class="formArrange formMargin">
                                        <label for="naam">Vraag:</label>
                                    </div>
                                    <div class="formArrange">
                                        <textarea id="vraag" class="formText" rows="5" placeholder="Vraag"/>
                                    </div>
                                    <div class="formArrange formMargin">
                                        <button v-on:click="sendMail">Verstuur bericht</button>
                                    </div>
                                </div>
                                <div id="formSuccess">
                                    <h2>Mail verstuurd!</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    });
});