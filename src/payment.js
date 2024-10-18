import { totalPerfume } from "./checkout";
import imgUser from "./../images/favicon-32x32.png";
import imgProduct from "./../images/image-product-mobile.jpg"

const User =  {
    name: 'Anonimus'
}

const sentUser = ()=> {
    return `
    <section class="checkout__account">
        <h5>Infomation</h5>
        <div class="checkout__user">
            <img src="${imgUser}" alt="User">
            <p>Send to: <strong>${User.name}</strong></>
        </div>
        
    </section>`;
}
const articleSend = ()=> {
    return `
    <section class="checkout__preview">
        <div class="checkout__preview--article">
            <img src="${imgProduct}" alt="preview of perfume Gabrielle">
            <div>
                <h4>Gabrielle Essence Eau De Parfum</h4>
                <section>
                    <p>Available</p>
                    <span>$149.99</span>
                </section>
                
            </div>
        </div>
        <p><strong>Quantity:</strong></p>
        <section class="checkout__total">
            <div class="checkout__total--control">
                <button id="rest">-</button>
                ${totalPerfume}
                <button id="toadd">+</button>
            </div>
            <button id="eliminate">Eliminate</button>
        </section>
        
        
    </section>
    `
}

export {
    sentUser,
    articleSend
}