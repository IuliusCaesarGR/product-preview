import { quantity, iconMenu, msgNotice, iconExit, diag} from "./inputSel";
import { verify, extendNav } from "./showNav";
import { sentUser, articleSend } from "./payment";

let totalPerfume = 0;

function addCart(){
    totalPerfume++;
    quantity.textContent = totalPerfume; 
    totalPerfume === 1 ? notice() : checkout(); 
} 
function remove() { 
    diag.style.display = 'none';
    iconExit.style.display = 'none';
}

function notice(){
    //changes style
    msgNotice.style = `display: block;`;
    iconMenu.style = `display: flex;`
    // hide notice
    setTimeout(()=> msgNotice.style.display = 'none', 2000);
    //open nav
    if(extendNav){  
        verify()
    }
}

function checkout() {
   diag.innerHTML = `
        <section class="checkout">
            ${sentUser()}
            ${articleSend()}
            ${articleSend()}
        </section>
    `
    iconExit.style.display = 'block';
    diag.style.display = 'flex';
    // open nav 
    if(extendNav){ 
        verify()
    }

}; 

export { checkout, addCart, remove, totalPerfume }