let interval, interval2;

export const startTextAnimation = () => {
    let empty = false;
    let pause = false;
    let javascript = "export default { setup(props) { ... } } (Vue)";
    let jsarr = [
        "class HomePage extends Component { ... } (React)",
        "@Component({...}) class HomePage { ... } (Angular)",
        "export default { setup(props) { ... } } (Vue)",
        "const express = require('express'); (Express)",
        "require(['app']); (RequireJS)"
    ]
    let i = 0;
    interval = setInterval( () => {
        if(pause == false) {
            let txt = document.querySelector("#autoFadeCode").innerText;
            if(txt.length > 0 && empty == false) {
                if(txt.length == 1) {
                    pauseShort();
                }
                txt = txt.slice(0, -1);
            } else {
                empty = true;
                txt += javascript[txt.length];
                if(txt.length == javascript.length) {
                    empty = false;
                    pauseShort();
                    changeJavascript();
                }
            }
            document.querySelector("#autoFadeCode").innerText = txt;
        }
    }, 50);

    interval2 = setInterval( () => {
        if(document.querySelector("#cursorCode").style.opacity != 0) {
            document.querySelector("#cursorCode").style = {
                opacity: 0
            };
        } else {
            document.querySelector("#cursorCode").style = {
                opacity: 1
            };
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
};

export const stopTextAnimation = () => {
    clearInterval(interval);
    clearInterval(interval2);
}