import { pagesArray } from "./inputSel";
import { setVal } from "./logics";

const accountOption= ()=> {
    return`
        <ul class="assa">
            <li>Sign Up</li>
            <li>Profile</li>
        </ul>
    `;
}
let asa = ``
let hasPressed = setVal()
const watchAccount = ()=> {

    alert('account')
    /* pagesArray.map((item)=> { 
        if(item.id == 'account'){
            if(hasPressed){
                /* item.append(accountOption(), '') 
                item.insertAdjacentHTML("afterend", accountOption())
                console.log(item)
            }
        }})
    return hasPressed = setVal(hasPressed) */
}

export {
    watchAccount
}