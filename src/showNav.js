import { nav, option, iconMenu } from "./inputSel";

function setVal(value) {
    if(value == true){ //true return false
        return !value;
    } else {
        return !value; // false return true
    }
    
}
let x = setVal();
function verify(){
    if(x){
        option.style.display = 'flex';
        nav.style = `
        width: 100%;
        padding: 6px;
        height: 50px;
        top:0%;
        right: 0px;
        border-radius: 0px;
        `
        iconMenu.style.display = 'flex';
    }
    else{
            option.style.display = 'none';
            nav.style = `
            width: 40px;
            height: 40px;
            `;
            iconMenu.style.display = 'inline-flex';
    }
    return x = setVal(x)
}

export { verify };