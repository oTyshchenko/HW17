import { getTr, getTd } from "../../createTags/tags";

export const getFillBody = (state /*dataArr, firstElementIndex = (currentRowPerPage * (currentPage - 1))*/) => {
    const tBody = document.createElement('tbody');
    
    for (let i = state.firstElementIndex; i < (state.firstElementIndex + state.currentRowPerPage) && i < state.currentData.length; i++) {
        const tr = getTr();

        for (const key in state.currentData[i]) {
            const td = getTd();
            td.innerText = state.currentData[i][key];
            tr.appendChild(td);
        }

        tBody.appendChild(tr);
    }
    return tBody;
};