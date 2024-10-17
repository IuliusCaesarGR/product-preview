import { modalPage, exitIcon } from "./inputSel";
import { setVal } from "./logics";

let openPagInf = setVal()
exitIcon.addEventListener('click', ()=> aboutInfo(setVal(openPagInf)))
function aboutInfo(va){
    let emptyContent = ``
    if(va) {
        let pageAbout = document.createElement('div');
        pageAbout.innerHTML = `
            <div class="pageInfo">
                <h2>About</h2>
                <p>This is not real project</p>
                <footer class="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a><br>
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