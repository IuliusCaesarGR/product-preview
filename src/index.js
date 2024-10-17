import { verify } from "./showNav";
import { aboutInfo } from "./pages";
import { checkout, addCart, remove } from "./checkout";
import { iconMenu, cart, button,iconExit, pagesArray } from "./inputSel";
import { watchAccount } from "./account";
import { lookProducts } from "./products";


iconMenu.addEventListener('click', verify); // extend nav bar
cart.addEventListener('click', checkout);
iconExit.addEventListener('click', remove);
button.addEventListener('click', addCart);
pagesArray.map((page) => {
    switch(page.id){
       case 'about-info':
                page.addEventListener('click',  aboutInfo);
            break;
        case 'account':
                page.addEventListener('click', watchAccount);
            break;
        case 'products':
                page.addEventListener('click', lookProducts);
            break;
        default:
                console.log('Error')
            break;
    }
})
