import { quantity, iconMenu, msgNotice, iconExit, diag} from "./inputSel";
import { verify, extendNav } from "./showNav";

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
const sentUser = ()=> {
    return `
    <section class="checkout__account">
        <h5>Info</h5>
        <div>
            <img alt="User">
            <p>Send to User</p>
        </div>
        
    </section>`;
}
const articleSend = ()=> {
    return `
    <section class="checkout__preview-article">
        <p>you have a ${totalPerfume}</p>
    </section>
    `
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

export { checkout, addCart, remove }