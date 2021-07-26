import { getTr } from "../../createTags/tags";
import { sortColumn } from "../../logic/sort";

export const getFillHeader = (state) => {
    const tHead = document.createElement('thead');
    const tr = getTr();

    for (const key in state.tableHeadersName) {
        const value = (state.tableHeadersName[key]);
        const th = document.createElement('th');
        if (value.sortDirection === 'down') {
            th.innerText = value.name + '↓';
        } else {
            th.innerText = value.name + '↑';
        }
        th.dataset.sortDirection = value.sortDirection;
        th.dataset.key = value.key;
        th.addEventListener('click', (e) => sortColumn(e, state));
        tr.appendChild(th);
    };

    tHead.appendChild(tr);
    return tHead;
};