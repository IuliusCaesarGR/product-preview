import { verify } from "./showNav";
import { iconMenu } from "./inputSel";


iconMenu.addEventListener('click', verify);
/*cart.addEventListener('click', checkout); */

/*
function exits(){
    const diags = document.querySelector('.diag');
    exit.removeChild(diags)
    console.log(diags);
} */
/* onclick="()=> {
    const diags = document.querySelector('.diag');
     exit.removeChild(diags)}" */
/* let c = 0
function checkout() {
    exit.innerHTML= `
    <div class="diag">
    <section>
        <p>This a new article</p>
            <p>you have a ${c}</p>
            <span id="remove" onclick="function exe() { 
                const diags = document.querySelector('.diag');
                const exit = document.querySelector('.checkout');
                exit.removeChild(diags)
                console.log(diags);
                }exe()"
        >X</span>
    </section>
    </div>
` ;
}; 

function call(){
    c++;
    canti.textContent = c;
    console.log(c);
    checkout()
    menu(validation = false); 
    
}  */