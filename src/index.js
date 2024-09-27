import { verify } from "./showNav";
import { checkout, addCart } from "./checkout";
import { iconMenu, cart, button } from "./inputSel";


iconMenu.addEventListener('click', verify);
cart.addEventListener('click', checkout);
button.addEventListener('click', addCart);
