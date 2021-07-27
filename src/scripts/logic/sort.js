import { renderTable } from "../table/renderTable";

const sortStringUp = (key) => (a, b) => a[key] > b[key] ? 1 : -1;
const sortStringDown = (key) => (a, b) => a[key] < b[key] ? 1 : -1;
const sortNumberUp = (key) => (a, b) => a[key] - b[key];
const sortNumberDown = (key) => (a, b) => b[key] - a[key];

export const sortColumn = (e, state) => {
    const newState = { ...state };
    const { key } = e.target.dataset;

    if (e.target.dataset.sortDirection === 'down') {
        newState.tableHeadersName[key].sortDirection = 'up';
        if (key === 'id') {
            newState.currentData = state.currentData.sort(sortNumberDown(key));
        } else {
            newState.currentData = state.currentData.sort(sortStringDown(key));
        }
    } else {
        newState.tableHeadersName[key].sortDirection = 'down';
        if (key === 'id') {
            newState.currentData = state.currentData.sort(sortNumberUp(key));
        } else {
            newState.currentData = state.currentData.sort(sortStringUp(key));
        }
    }

    renderTable(newState);
};