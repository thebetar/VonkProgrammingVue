define(['vue'], (Vue) => {
    return Vue.component('siteAbout', {
        template: `
            <div itemtype="https://schema.org/AboutPage">
                <div v-mediaDiv="{id: 'aboutMedia', media: 'about', height: '65%'}">
                    <div class="mediaHeader">
                        Over mij
                    </div>
                </div>
                <div class="siteContentRow">
                    <div class="siteContentText siteContentTextAbout" itemprop="about">
                        <p itemprop="headline"><b>Wie ben ik?</b></p>
                        <p>
                            Ik ben Lars, 4de jaars HBO-ICT student aan Windesheim in Almere. 
                            Ik werk naast mijn opleiding al een tijd bij het studenten uitzendbureau Kojac B.V. <br>
                            Ik had al langere tijd de behoefte gehad om voor mezelf te beginnen en dit heb ik in November 2019 dan ook gedaan.<br>
                            Ik heb veel ervaring in talen als <span class="highlight">Javascript</span>, <span class="highlight">PHP</span>, <span class="highlight">CSS</span>, <span class="highlight">MySQL</span> en <span class="highlight">HTML</span>
                        </p>
                        <p>
                            <b>KVK-nummer: </b><br>
                                76516857
                        </p>
                    </div>
                    <img src="media/about-img-min.jpg" class="rowimg" style="margin-top: 48px;">
                </div>
            </div>
        `
    });
});