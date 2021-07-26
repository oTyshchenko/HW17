import { renderTable } from "../table/renderTable"; 

const sortStringUp = (key) => (a, b) => a[key] > b[key] ? 1 : -1;
const sortStringDown = (key) => (a, b) => a[key] < b[key] ? 1 : -1;
const sortNumberUp = (key) => (a, b) => a[key] - b[key];
const sortNumberDown = (key) => (a, b) => b[key] - a[key];

const sortColumn = (e, state) => {
    const newState = Object.assign(state);

    const value = e.target.innerText;
    if (value === 'id↓') {
        newState.currentData.sort(sortNumberDown('id'));
        newState.tableHeadersName = ['id↑', 'First name↓', 'Last name↓', 'Born location↓', 'Died location↓', 'Gender↓', 'Prizes↓', 'Born↓', 'Died↓'];
    } else if (value === 'id↑') {
        newState.currentData.sort(sortNumberUp('id'));
        newState.tableHeadersName = ['id↓', 'First name↓', 'Last name↓', 'Born location↓', 'Died location↓', 'Gender↓', 'Prizes↓', 'Born↓', 'Died↓'];
    } else if (value === 'First name↓') {
        newState.currentData.sort(sortStringDown('firstName'));
        newState.tableHeadersName = ['id↓', 'First name↑', 'Last name↓', 'Born location↓', 'Died location↓', 'Gender↓', 'Prizes↓', 'Born↓', 'Died↓'];
    } else if (value === 'First name↑') {
        newState.currentData.sort(sortStringUp('firstName'));
        newState.tableHeadersName = ['id↓', 'First name↓', 'Last name↓', 'Born location↓', 'Died location↓', 'Gender↓', 'Prizes↓', 'Born↓', 'Died↓'];
    } else if (value === 'Last name↓') {
        newState.currentData.sort(sortStringDown('lastName'));
        newState.tableHeadersName = ['id↓', 'First name↓', 'Last name↑', 'Born location↓', 'Died location↓', 'Gender↓', 'Prizes↓', 'Born↓', 'Died↓'];
    } else if (value === 'Last name↑') {
        newState.currentData.sort(sortStringUp('lastName'));
        newState.tableHeadersName = ['id↓', 'First name↓', 'Last name↓', 'Born location↓', 'Died location↓', 'Gender↓', 'Prizes↓', 'Born↓', 'Died↓'];
    } else if (value === 'Born location↓') {
        newState.currentData.sort(sortStringDown('bornLocation'));
        newState.tableHeadersName = ['id↓', 'First name↓', 'Last name↓', 'Born location↑', 'Died location↓', 'Gender↓', 'Prizes↓', 'Born↓', 'Died↓'];
    } else if (value === 'Born location↑') {
        newState.currentData.sort(sortStringUp('bornLocation'));
        newState.tableHeadersName = ['id↓', 'First name↓', 'Last name↓', 'Born location↓', 'Died location↓', 'Gender↓', 'Prizes↓', 'Born↓', 'Died↓'];
    } else if (value === 'Died location↓') {
        newState.currentData.sort(sortStringDown('diedLocation'));
        newState.tableHeadersName = ['id↓', 'First name↓', 'Last name↓', 'Born location↓', 'Died location↑', 'Gender↓', 'Prizes↓', 'Born↓', 'Died↓'];
    } else if (value === 'Died location↑') {
        newState.currentData.sort(sortStringUp('diedLocation'));
        newState.tableHeadersName = ['id↓', 'First name↓', 'Last name↓', 'Born location↓', 'Died location↓', 'Gender↓', 'Prizes↓', 'Born↓', 'Died↓'];
    } else if (value === 'Gender↓') {
        newState.currentData.sort(sortStringDown('gender'));
        newState.tableHeadersName = ['id↓', 'First name↓', 'Last name↓', 'Born location↓', 'Died location↓', 'Gender↑', 'Prizes↓', 'Born↓', 'Died↓'];
    } else if (value === 'Gender↑') {
        newState.currentData.sort(sortStringUp('gender'));
        newState.tableHeadersName = ['id↓', 'First name↓', 'Last name↓', 'Born location↓', 'Died location↓', 'Gender↓', 'Prizes↓', 'Born↓', 'Died↓'];
    } else if (value === 'Prizes↓') {
        newState.currentData.sort(sortStringDown('prizes'));
        newState.tableHeadersName = ['id↓', 'First name↓', 'Last name↓', 'Born location↓', 'Died location↓', 'Gender↓', 'Prizes↑', 'Born↓', 'Died↓'];
    } else if (value === 'Prizes↑') {
        newState.currentData.sort(sortStringUp('prizes'));
        newState.tableHeadersName = ['id↓', 'First name↓', 'Last name↓', 'Born location↓', 'Died location↓', 'Gender↓', 'Prizes↓', 'Born↓', 'Died↓'];
    } else if (value === 'Born↓') {
        newState.currentData.sort(sortStringDown('born'));
        newState.tableHeadersName = ['id↓', 'First name↓', 'Last name↓', 'Born location↓', 'Died location↓', 'Gender↓', 'Prizes↓', 'Born↑', 'Died↓'];
    } else if (value === 'Born↑') {
        newState.currentData.sort(sortStringUp('born'));
        newState.tableHeadersName = ['id↓', 'First name↓', 'Last name↓', 'Born location↓', 'Died location↓', 'Gender↓', 'Prizes↓', 'Born↓', 'Died↓'];
    } else if (value === 'Died↓') {
        newState.currentData.sort(sortStringDown('died'));
        newState.tableHeadersName = ['id↓', 'First name↓', 'Last name↓', 'Born location↓', 'Died location↓', 'Gender↓', 'Prizes↓', 'Born↓', 'Died↑'];
    } else if (value === 'Died↑') {
        newState.currentData.sort(sortStringUp('died'));
        newState.tableHeadersName = ['id↓', 'First name↓', 'Last name↓', 'Born location↓', 'Died location↓', 'Gender↓', 'Prizes↓', 'Born↓', 'Died↓'];
    }

    renderTable(newState);
};

export { sortColumn };