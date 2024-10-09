
// NAV
const nav = document.querySelector('.navBar'); /** bar navigation */
const option = document.querySelector('.option'); // menu pages and cart
const cart = document.querySelector('.cart'); // cart
const iconMenu = document.querySelector('.menu'); /* menu button */
// 
const button = document.querySelector("#button") // button add to cart
const modal = document.querySelector('.checkout'); // modal of checkout
const quantity = document.querySelector('span'); // Quantity
const msgNotice = document.querySelector('.message'); //message of add


const diag = document.querySelector('.diag') // checkout content for complete 
const iconExit = document.querySelector('.remove');
const modalPage = document.querySelector('.modalPage');

const pages = document.querySelectorAll('.page');
const pagesArray = [...pages]; 
const exitIcon = document.querySelector('.icon-exit')

export { 
    nav,
    option,
    button,
    cart,
    iconMenu, 
    modal,
    quantity, 
    msgNotice, 
    diag,
    iconExit,
    pagesArray,
    modalPage,
    exitIcon
};