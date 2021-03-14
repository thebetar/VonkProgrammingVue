define(['vue', 'jquery'], (Vue, $) => {
    return Vue.component('sitePortfolio', {
        data: () => {
            return {
                cardCount: 0,
                cards: [
                    {
                        id: 'sah',
                        name: 'StudentAanHuis',
                        desc: 'Aan het einde van het eerste jaar van mijn opleiding HBO-ICT ben ik begonnen bij StudentAanHuis. Hier hielp ik mensen met hun computer problemen. Dit ging van printers opnieuw instellen tot hele Windows systemen herstellen.',
                        url: 'sah-logo-min'
                    },
                    {
                        id: 'sanoma',
                        name: 'Sanoma',
                        desc: 'In het tweede jaar van mijn opleiding HBO-ICT heb ik het volledige jaar bij Sanoma Media stage gelopen. Sanoma Media was destijds nog onderdeel van Sanoma. Hier heb ik mij bezig gehouden met software voor advertising. Dit was in de talen <span class="highlight">PHP</span>, <span class="highlight">CSS</span>, <span class="highlight">MySQL</span> en <span class="highlight">HTML</span>.',
                        url: 'sanoma-logo-min'
                    },
                    {
                        id: 'kojac',
                        name: 'Kojac & Innovative cycling',
                        desc: 'Aan het einde van het tweede jaar van mijn opleiding HBO-ICT ben ik begonnen bij het studenten programmeur uitzendbureau Kojac. Hier kreeg ik de opdracht bij Innovative cycling de websites te onderhouden en te updaten. Hier heb ik gebruik gemaakt van <span class="highlight">Javascript</span>, <span class="highlight">PHP</span>, <span class="highlight">CSS</span>, <span class="highlight">MySQL</span> en <span class="highlight">HTML</span>.',
                        url: 'kojac-logo-min'
                    },
                    {
                        id: 'floriade',
                        name: 'Gemeente Almere / Floriade',
                        desc: 'In het derde jaar van mijn opleiding HBO-ICT heb ik stage gelopen voor het Floriade project. Dit was eerst voor de gemeente Almere en werd later verplaatst naar het Floriade gebouw. Hier heb ik mij met een team bezig gehouden met een van de onderdelen van de Floriade. Hier heb ik gebruik gemaakt van <span class="highlight">PHP</span>, <span class="highlight">CSS</span>, <span class="highlight">MySQL</span> en <span class="highlight">HTML</span>.',
                        url: 'floriade-logo-min'
                    },
                    {
                        id: 'medweb',
                        name: 'Medweb B.V.',
                        desc: 'In het laatste jaar van mijn opleiding HBO-ICT heb ik stage gelopen bij het bedrijf Medweb B.V.. Dit is een software bedrijf die zich bezig houdt met een rooster applicatie specifiek gericht op medisch specialisten en artsen. Ik heb mij hier bezig gehouden met het vernieuwen van een van de onderdelen van hun applicatie "Medspace". Hier heb ik gebruik gemaakt van <span class="highlight">VueJS/Javascript</span>, <span class="highlight">IBM Notes</span>, <span class="highlight">IBM Domino designer</span>, <span class="highlight">CSS</span> en <span class="highlight">HTML</span>.',
                        url: 'medweb-logo-min'
                    }
                ]
            }
        },
        methods: {
            moveCard: function(side) {
                //Set var with bool to check if card is at start or end
                var move = true;
                //Check cardCount
                if(side == "prev") {
                    if(this.cardCount >= 1) {
                        this.cardCount--;
                    } else {
                        move = false;
                    }
                } else if (side == "next") {
                    if(this.cardCount <= this.cards.length-2) {
                        this.cardCount++;
                    } else {
                        move = false;
                    }
                }
                //If move is still true move cards
                if(move == true) {
                    var cards = $("div[name='siteContentCard']");
                    cards.each((i, card) => {
                        if(i <= this.cards.length) {
                            switch(true) {
                                case this.cardCount == i:
                                    $(card).css({
                                        left: "0px",
                                        position: "absolute",
                                        opacity: 1,
                                        marginTop: "20px",
                                        zIndex: 2
                                    });
                                    $("#flexHeight").css({
                                        height: card.clientHeight+20
                                    });
                                    $(".cardArrowPrev, .cardArrowNext").css({
                                        height: card.clientHeight
                                    });
                                    break;
                                case this.cardCount+1 == i:
                                    $(card).css({
                                        left: "50%",
                                        opacity: "0.3",
                                        position: "absolute",
                                        marginTop: "0px",
                                        zIndex: 1
                                    });
                                    break;
                                case this.cardCount-1 == i:
                                    $(card).css({
                                        left: "-50%",
                                        opacity: "0.3",
                                        position: "absolute",
                                        marginTop: "0px",
                                        zIndex: 1
                                    });
                                    break;
                                case this.cardCount < i:
                                    $(card).css({
                                        left: "100%",
                                        opacity: "0.3",
                                        position: "absolute",
                                        marginTop: "0px",
                                        zIndex: 1
                                    });
                                    break;
                                case this.cardCount > i:
                                    $(card).css({
                                        left: "-100%",
                                        opacity: "0.3",
                                        position: "absolute",
                                        marginTop: "0px",
                                        zIndex: 1
                                    });
                                    break;
                            }
                        }
                    });
                }
            }
        },
        mounted: function(){
            let vueWin = this;

            //Create vars
            let maxHeight = 0;
            let siteCards = document.getElementsByName('siteContentCard');
            //Set arrow margin for first card
            $(".cardArrowPrev, .cardArrowNext").css({
                height: (siteCards[0].clientHeight+150)
            });
            //Set maxHeight var
            siteCards.forEach(siteCard => {
                if(maxHeight < siteCard.clientHeight+150) {
                    maxHeight = siteCard.clientHeight+150;
                }
            });
 
            $(document).ready(() => {
            
                let touchsurface = document.getElementById('portfolioMedia'),
                    startX,
                    startY,
                    dist,
                    threshold = 150, //required min distance traveled to be considered swipe
                    allowedTime = 200, // maximum time allowed to travel that distance
                    elapsedTime,
                    startTime;
            
                let handleswipe = (isrightswipe, isleftswipe) => {
                    if (isrightswipe)
                        vueWin.moveCard("prev");
                    else if(isleftswipe){
                        vueWin.moveCard("next");
                    }
                };
            
                touchsurface.addEventListener('touchstart', (e) => {
                    let touchobj = e.changedTouches[0];
                    dist = 0;
                    startX = touchobj.pageX;
                    startY = touchobj.pageY;
                    startTime = new Date().getTime(); // record time when finger first makes contact with surface
                }, false);
            
                touchsurface.addEventListener('touchend', (e) => {
                    let touchobj = e.changedTouches[0];
                    dist = touchobj.pageX - startX; // get total dist traveled by finger while in contact with surface
                    elapsedTime = new Date().getTime() - startTime; // get time elapsed
                    // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
                    let swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100);
                    let swipeleftBol = (elapsedTime <= allowedTime && dist <= -threshold && Math.abs(touchobj.pageY - startY) <= 100);
                    handleswipe(swiperightBol, swipeleftBol);
                }, false);
            }, false); // end window.onload
        },
        template: `
            <div>
                <div style="background-position-y: 70%" v-mediaDiv="{id: 'portfolioMedia', media: 'portfolio', height: '100%', size: 'large'}">
                    <div class="mediaHeader" v-on:keyup.left="moveCard('prev')" v-on:keyup.right="moveCard('next')" tabindex="0">
                        <div id="portfolioDiv">
                            Portfolio
                            <div class="cardArrowPrev" @click="moveCard('prev')" >
                                <div class="innerArrowDiv">
                                    <span id="cardArrowPrev" >
                                        <i class="fas fa-arrow-left"></i>
                                    </span>
                                </div>
                            </div>
                            <div v-for="card in cards" v-contentCard="{id: card.id, size: ''}">
                                <img :src="'/media/'+card.url+'.jpg'" class="cardImg">
                                <div class="siteContentCardHeader">{{card.name}}</div>
                                <p v-html="card.desc"></p>
                            </div>
                            <div class="cardArrowNext" @click="moveCard('next')">
                                <div class="innerArrowDiv">
                                    <span id="cardArrowNext" v-on:click="moveCard('next')">
                                        <i class="fas fa-arrow-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    });
});