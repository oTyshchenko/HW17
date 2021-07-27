import { renderTable } from "../table/renderTable";

export const changeTableSize = (e, state) => {
    const newState = {...state};
    newState.currentRowPerPage = Number(e.target.options[e.target.selectedIndex].value);
    newState.currentPage = Math.floor(state.firstElementIndex / state.currentRowPerPage + 1);

    renderTable(newState);
};