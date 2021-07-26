import { renderTable } from "../../renderTable";

export const showNextPage = (newState, state) => {
    newState.currentPage = state.currentPage + 1;
    newState.firstElementIndex = state.firstElementIndex + state.currentRowPerPage;
    renderTable(newState);
};