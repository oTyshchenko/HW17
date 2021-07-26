import { getTr } from "../../createTags/tags";
import { sortColumn } from "../../logic/sort";

export const getFillHeader = (state) => {
    const tHead = document.createElement('thead');
    const tr = getTr();
    state.tableHeadersName.forEach(el => {
        const th = document.createElement('th');
        /*if(false) {

        } else {
            th.innerText = el + '↓';
        }*/
        th.innerText = el;

        th.addEventListener('click', (e) => sortColumn(e, state));
        tr.appendChild(th);
    });
    tHead.appendChild(tr);
    return tHead;
};