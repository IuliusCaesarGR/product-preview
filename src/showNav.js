import { nav, option, iconMenu } from "./inputSel";
import { setVal } from "./logics";

let extendNav = setVal(); //  init in true

function verify(){
    if(extendNav){
        option.style.display = 'flex';
        nav.style = `
        width: 100%;
        padding: 6px;
        height: 50px;
        top:0%;
        right: 0px;
        border-radius: 0px;
        `
        iconMenu.src = './../images/icon-close.svg';
    }
    else{
        option.style.display = 'none';
        nav.style = `
        width: 40px;
        height: 40px;`;
        iconMenu.src = './../images/icon-nav.svg';
    }
    return extendNav = setVal(extendNav)
}


export { verify , extendNav };