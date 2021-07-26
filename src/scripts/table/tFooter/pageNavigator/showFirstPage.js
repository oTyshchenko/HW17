import { renderTable } from "../../renderTable";

export const showFirstPage = (newState) => {
    newState.currentPage = 1;
    newState.firstElementIndex = 0;
    renderTable(newState);
};