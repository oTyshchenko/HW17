import { renderTable } from "../../renderTable";

export const showLastPage = (newState, state, lastPageNumber) => {
    newState.currentPage = lastPageNumber;
    newState.firstElementIndex = (lastPageNumber - 1) * state.currentRowPerPage;
    renderTable(newState);
};