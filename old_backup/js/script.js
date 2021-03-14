define(['jquery'], ($) => {
    $(document).ready(() => {
        setTimeout( ()=> {
            $("#autoFadeIn").css({
                opacity: 1,
                marginLeft: 0
            });
        }, 1000);

        let empty = false;
        let pause = false;
        let javascript = "document.getElementById('website').innerHTML;";
        let jsarr = [
            "document.getElementById('website').innerHTML;",
            "$('#website').html();",
            "Vue.component('website', { ... });",
            "$('div[id=\"website\"]').text();",
            "require(['app']);"
        ]
        let i = 0;
        setInterval( () => {
            if(pause == false) {
                $("#autoFadeCode").text((_, txt) => {
                    if(txt.length > 0 && empty == false) {
                        if(txt.length == 1) {
                            pauseShort();
                        }
                        return txt.slice(0, -1);
                    } else {
                        empty = true;
                        txt += javascript[txt.length];
                        if(txt.length == javascript.length) {
                            empty = false;
                            pauseShort();
                            changeJavascript();
                        }
                        return txt;
                    }
                });
            }
        }, 50);
        setInterval( () => {
            if($("#cursorCode").css('opacity') != 0) {
                $("#cursorCode").css({
                    opacity: 0
                });
            } else {
                $("#cursorCode").css({
                    opacity: 1
                });
            }
        }, 600);

        let pauseShort = () => {
            pause = true;
            setTimeout(() => {
                pause = false;
            }, 2000);
        }

        let changeJavascript = () => {
            i++;
            if(i == jsarr.length) i = 0;
            javascript = jsarr[i];
        }
    });

    $(window).scroll(() => {
        var pos = $(window).scrollTop();
        if(pos == 0) {
            $("#siteHeader").css({
                backgroundColor: 'transparent',
                borderBottom: 'none'
            });
            if($("#navbarLogo").css("display") == "inline") {
                $("#navbarLogo").slideUp();
            } 
        }
        if(pos > 2000) {
            $("#fadeInText3").css({
                opacity: 1,
                top: 0
            });
            setTimeout( () => {
                $("#fadeInText4").css({
                    opacity: 1,
                    top: 0
                });
            }, 200);
        }
        if(pos > 1800) {
            $("#fadeInText2").css({
                opacity: 1,
                top: 0
            });
        }
        if(pos > 500) {
            $("#fadeInText5").css({
                opacity: 1,
                top: 0
            });
            setTimeout(() => {
                $("#fadeInText6").css({
                    opacity: 1,
                    top: 0
                });
            }, 200);
        }
        if(pos > 200) {
            $("#fadeInText").css({
                opacity: 1,
                top: 0
            });
        }
        if(pos > 40) {
            $("#siteHeader").css({
                backgroundColor: 'white',
                borderBottom: '2px solid black'
            });
            if($("#navbarLogo").css("display") == "none") {
                $("#navbarLogo").slideDown();
            }
        }
    });
});