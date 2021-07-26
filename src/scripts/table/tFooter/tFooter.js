import { getTr, getTd } from "../../createTags/tags";
import { changeTableSize } from "../../logic/changeTableSize";
import { getPageNavigator } from "./pageNavigator/pageNavigator";

export const getFillFooter = (state) => {
    const tFoot = document.createElement('tfoot');
    const tr = getTr();
    const rowPerPageBox = getTd();
    const pageNavigationBox = getPageNavigator(state);
    const select = document.createElement('select');

    state.rowPerPageArr.forEach((el) => {
        const option = document.createElement('option');
        if (state.currentRowPerPage === el) {
            option.selected = 'selected';
        };
        option.innerText = el;
        select.appendChild(option);
    })

    select.addEventListener('change', (e) => changeTableSize(e, state));
    select.classList.add('form-select');
    pageNavigationBox.colSpan = '7';
    pageNavigationBox.align = 'right';
    rowPerPageBox.colSpan = '2';

    rowPerPageBox.appendChild(select);
    tr.append(rowPerPageBox, pageNavigationBox);
    tFoot.appendChild(tr);

    return tFoot;
};