define(['vue'], (Vue) => {
    return Vue.component('siteContent', {
        data: () => {
            return {

            }
        },
        template: `
            <div>
                <div v-mediaDiv="{id: 'homemedia', media: 'bg-website', height: '100%'}">
                    <div class="mediaHeaderHome">
                        <div>
                            <img src="/media/logo.png">
                            <div id="autoFadeIn" class="mediaHeaderSmall">
                                Van idee naar website!
                            </div>
                        </div>
                        <div id="codeFadeDiv">
                            <div id="autoFadeCode" class="mediaHeaderSmall" style="display: inline"></div>
                            <span id="cursorCode" style="margin-top: -16px;">|</span>
                        </div>
                    </div>
                </div>
                <div class="siteContentRow" style="flex-direction: column;">
                    <h1 style="font-family: 'Dancing Script', cursive; font-size: 42px;" class="siteContentHeader">
                        Welkom bij Vonk programming!
                    </h1>
                    <div id="fadeInText" class="fadeInText siteContentText">
                        <p>
                            VonkProgramming is een Web development bedrijf dat zich bezighoudt met maatwerk software solutions.<br>
                            Voor iedere klant maken wij op maat gemaakte software, afgestemd op zijn/haar behoeften.
                        </p>
                    </div>
                    <div class="siteContentTextDiv">
                        <div id="fadeInText5" class="fadeInText siteContentText">
                            <p style="text-align: center;">
                                <b>Procesbeschrijving</b><br>
                                <ol style="text-align: left;">
                                    <li>Voorafgaand vindt er een kennsmakingsgesprek plaats waarin de context van het probleem wordt besproken.</li>
                                    <li>Op basis van de besproken details wordt er een product ontwerp gemaakt. Gedurende dit proces is het belangrijk dat de klant tevreden is met het ontwerp en dat de software voldoet aan de gestelde eisen.</li>
                                    <li>Zodra het eindproduct klaar is zorgt VonkProgramming ervoor dat enige bugs eruit gefilterd worden tot dat de klant tevreden is met het eindresultaat.</li>
                                </ol>
                            </p>
                            <p>
                                VonkPorgramming levert expertise in een breed begrip. Samen met IT specialisten, grafisch ontwerpers en software develoopers bieden wij gegarandeerd een oplossing voor jouw probleem.
                            </p>
                        </div>
                        <div id="fadeInText6" class="fadeInText siteContentText">
                            <p>
                                <b>Webapplicatie Development:</b><br>
                                Om garantie te geven dat jij daadwerkelijk profiteert van je nieuwe website, wordt ervoor gezorgd dat tijdens het ontwikkelen van de website er rekening gehouden wordt met SEO. 
                                Niet alleen zorgen wij ervoor dat de website direct goed vindbaar is, maar gebruiken wij ook de nieuwste development technieken waardoor schaalbaarheid en snelheid vanzelfsprekend is.
                            </p>
                        </div>
                    </div>
                </div>
                <div v-mediaDiv="{id: 'home2', media: 'bg-website-2', height: '65%', offset: '-100px', gradient: 'off'}">
                    <div class="mediaHeader">
                        Responsief ontwerp
                        <div class="mediaHeaderSmall">
                            Bereik uw publiek op elk apparaat
                        </div>
                    </div>
                </div>
                <div class="siteContentRow" style="flex-direction: column;">
                    <div class="siteContentHeader">
                        Van idee naar website!
                    </div>
                    <div id="fadeInText2" class="fadeInText siteContentText">
                        VonkProgramming heeft contact met verschillende ontwerpers om uw idee perfect vorm te geven.
                        Hierbij wordt er rekening gehouden met <span class="highlight">responsiviteit</span>, <span class="highlight">schaalbaarheid</span> en <span class="highlight">SEO</span>.<br>
                        VonkProgramming richt zich op een flexibele aanpak. Van software solutions tot simpele portfolio websites.
                    </div>
                    <div class="siteContentTextDiv">
                        <div id="fadeInText3" class="fadeInText siteContentText">
                            <p>
                                <b>SEO</b><br>
                                SEO, staat voor Search Engine Optimization. Dit is een score die wordt bijgehouden door Google. Hoe beter deze score hoe hoger uw website komt in zoekresultaten!
                            </p>
                        </div>
                        <div id="fadeInText4" class="fadeInText siteContentText">
                            <p>
                                <b>Schaalbaarheid</b><br>
                                VonkProgramming maakt gebruik van de nieuwste technieken binnen Web Development om uw Webapplicatie snel en toekomstbestendig te maken.
                            </p>
                        </div>
                    </div>
                </div>
                <div v-mediaDiv="{id: 'home3', media: 'bg-website-3', height: '65%', offset: '-255px', gradient: 'off'}" style="border-bottom: 2px solid black;">
                    <div class="mediaHeader">
                        <span>SEO</span>
                        <div class="mediaHeaderSmall">
                            Search Engine Optimization wordt tegenwoordig steeds belangrijker.<br>
                            Wilt u snel gevonden worden op het internet?<br>
                            VonkProgramming kan SEO op uw nieuwe of huidige webapplicatie toepassen.
                        </div>
                    </div>
                </div>
            </div>
        `
    });
});