import { nav, option, iconMenu } from "./inputSel";
import { setVal } from "./logics";
import imgNav from './../images/icon-nav.svg';
import imgClose from './../images//icon-close.svg';

let extendNav = setVal(); //  init in true

function verify(){
    if(extendNav){
        option.style.display = 'flex';
        nav.style = `
        width: 100%;
        padding: 6px;
        height: 55px;
        top:0%;
        right: 0px;
        border-radius: 0px;
        `
        iconMenu.src = imgClose;
    }
    else{
        option.style.display = 'none';
        nav.style = `
        width: 40px;
        height: 40px;`;
        iconMenu.src = imgNav;
    }
    return extendNav = setVal(extendNav)
}


export { verify , extendNav };