import { modalPage, exitIcon } from "./inputSel";
import { setVal } from "./logics";

let d = setVal()
exitIcon.addEventListener('click', ()=> aboutInfo(setVal(d)))
function aboutInfo(va){
    let emptyContent = ``
    if(va) {
        let pageAbout = document.createElement('div');
        pageAbout.innerHTML = `
            <div class="pageInfo">
                <h2>About</h2>
                <footer class="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a href="https://www.frontendmentor.io/profile/IuliusCaesarGR" target="_blank">Julio César García Rodríguez</a>.
                </footer>
            </div>`;
        modalPage.appendChild(pageAbout);
        exitIcon.style.display = 'inline-block'
    } else {
        modalPage.replaceChildren(emptyContent)
        exitIcon.style.display = 'none';
    }
}

export { aboutInfo};