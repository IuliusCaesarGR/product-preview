import { modal, quantity, iconMenu} from "./inputSel";
import { verify, x, setVal } from "./showNav";

let total = 0;

function addCart(){
    total++;
    quantity.textContent = total;
    console.log(total);
    total === 1 ? notice() : checkout(); 
} 

function remove(xout){
    return `
    <span id="remove" onclick="function exe(xint) { 
                const diags = document.querySelector('.diag');
                const msg = document.querySelector('.message');
                const exit = document.querySelector('.checkout');
                if(xint == 'ckt'){
                    exit.removeChild(diags)
                }
                if(xint == 'msg'){
                    exit.removeChild(msg)
                }
                }exe('${xout}')"
    >X</span>`;
}
function notice(){
    modal.innerHTML = `
        <div class="message">
            <section>
                <p>Your product is add Cart!</p>
                ${remove('msg')}
            </section>
        </div>
    ` 
    if (x){
        verify()
    }else {
        x = true
        verify()
    }
        
        iconMenu.style = `
        display: flex;
        `
}

function checkout() {
    modal.innerHTML= `
    <div class="diag">
    <section>
        <p>This a new article</p>
            <p>you have a ${total}</p>
            ${remove('ckt')}
    </section>
    </div>
` ;
}; 

export { checkout, addCart, remove }