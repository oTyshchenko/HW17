import { getFillHeader } from "./tHead/tHead"; 
import { getFillBody } from "./tBody/tBody";
import { getFillFooter } from "./tFooter/tFooter";

export const renderTable = (state) => {
    state.tableBox.innerHTML = '';
    state.tableBox.classList.add('table', 'table-dark', 'table-striped');

    const tHead = getFillHeader(state);
    const tBody = getFillBody(state);
    const tFoot = getFillFooter(state);

    state.tableBox.append(tHead, tBody, tFoot);
};