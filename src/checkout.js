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
    setTimeout(()=> msgNotice.style.display = 'none', 1700);
    //open nav
    if(extendNav){  
        verify()
    }
}

function checkout() {
   diag.innerHTML = `
        <section>
            <p>This a new article</p>
            <p>you have a ${totalPerfume}</p>
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