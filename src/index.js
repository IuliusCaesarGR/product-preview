import { verify } from "./showNav";
import { aboutInfo } from "./pages";
import { checkout, addCart, remove } from "./checkout";
import { iconMenu, cart, button,iconExit, pagesArray } from "./inputSel";



iconMenu.addEventListener('click', verify); // extend nav bar
cart.addEventListener('click', checkout);
iconExit.addEventListener('click', remove);
button.addEventListener('click', addCart);
pagesArray.map((page) => {
    page.id == 'about-info'? page.addEventListener('click',  aboutInfo): console.log('left ');
    
})
