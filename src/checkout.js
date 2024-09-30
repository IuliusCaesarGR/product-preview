import { quantity, iconMenu, msgNotice, iconExit, diag} from "./inputSel";
import { verify, x } from "./showNav";

let total = 0;

function addCart(){
    total++;
    quantity.textContent = total;
    console.log(total);
    total === 1 ? notice() : checkout(); 
} 
function remove() { 
    diag.style.display = 'none';
    iconExit.style.display = 'none';
  console.log('hello')
}

function notice(){
   setTimeout(()=> msgNotice.style.display = 'none', 1700);
    if(x){  //open nav
        verify()
    }
    //changes style
    msgNotice.style = `
    display: block;
    `;
    iconMenu.style = `
    display: flex;
    `
}

function checkout() {
   diag.innerHTML = `
        <section>
            <p>This a new article</p>
            <p>you have a ${total}</p>
        </section>
    `
    iconExit.style.display = 'block';
    diag.style.display = 'flex';
    if(x){ // open nav 
        verify()
    }

}; 

export { checkout, addCart, remove }