import { verify } from "./showNav";
import { checkout, addCart, remove } from "./checkout";
import { iconMenu, cart, button,iconExit } from "./inputSel";



iconMenu.addEventListener('click', verify);
cart.addEventListener('click', checkout);
iconExit.addEventListener('click', remove);
button.addEventListener('click', addCart);
