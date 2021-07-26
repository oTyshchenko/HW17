import { renderTable } from "../table/renderTable";

const sortStringUp = (key) => (a, b) => a[key] > b[key] ? 1 : -1;
const sortStringDown = (key) => (a, b) => a[key] < b[key] ? 1 : -1;
const sortNumberUp = (key) => (a, b) => a[key] - b[key];
const sortNumberDown = (key) => (a, b) => b[key] - a[key];

const sortColumn = (e, state) => {
    const newState = Object.assign(state);

    console.log(e.target.dataset.key)
    const key = e.target.dataset.key;

    if (e.target.dataset.sortDirection === 'down') {
        switch (key) {
            case ('id'):
                newState.tableHeadersName.id.sortDirection = 'up';
                newState.currentData = state.currentData.sort(sortNumberDown('id'));
                break;
            case ('firstName'):
                newState.tableHeadersName.firstName.sortDirection = 'up';
                newState.currentData = state.currentData.sort(sortStringDown('firstName'));
                break;
            case ('lastName'):
                newState.tableHeadersName.lastName.sortDirection = 'up';
                newState.currentData = state.currentData.sort(sortStringDown('lastName'));
                break;
            case ('bornLocation'):
                newState.tableHeadersName.bornLocation.sortDirection = 'up';
                newState.currentData = state.currentData.sort(sortStringDown('bornLocation'));
                break;
            case ('diedLocation'):
                newState.tableHeadersName.diedLocation.sortDirection = 'up';
                newState.currentData = state.currentData.sort(sortStringDown('diedLocation'));
                break;
            case ('gender'):
                newState.tableHeadersName.gender.sortDirection = 'up';
                newState.currentData = state.currentData.sort(sortStringDown('gender'));
                break;
            case ('prizes'):
                newState.tableHeadersName.prizes.sortDirection = 'up';
                newState.currentData = state.currentData.sort(sortStringDown('prizes'));
                break;
            case ('born'):
                newState.tableHeadersName.born.sortDirection = 'up';
                newState.currentData = state.currentData.sort(sortStringDown('born'));
                break;
            case ('died'):
                newState.tableHeadersName.died.sortDirection = 'up';
                newState.currentData = state.currentData.sort(sortStringDown('died'));
                break;

            default:
                break
        }
    } else {
        switch (key) {
            case ('id'):
                newState.tableHeadersName.id.sortDirection = 'down';
                newState.currentData = state.currentData.sort(sortNumberUp('id'));
                break;
            case ('firstName'):
                newState.tableHeadersName.firstName.sortDirection = 'down';
                newState.currentData = state.currentData.sort(sortStringUp('firstName'));
                break;
            case ('lastName'):
                newState.tableHeadersName.lastName.sortDirection = 'down';
                newState.currentData = state.currentData.sort(sortStringUp('lastName'));
                break;
            case ('bornLocation'):
                newState.tableHeadersName.bornLocation.sortDirection = 'down';
                newState.currentData = state.currentData.sort(sortStringUp('bornLocation'));
                break;
            case ('diedLocation'):
                newState.tableHeadersName.diedLocation.sortDirection = 'down';
                newState.currentData = state.currentData.sort(sortStringUp('diedLocation'));
                break;
            case ('gender'):
                newState.tableHeadersName.gender.sortDirection = 'down';
                newState.currentData = state.currentData.sort(sortStringUp('gender'));
                break;
            case ('prizes'):
                newState.tableHeadersName.prizes.sortDirection = 'down';
                newState.currentData = state.currentData.sort(sortStringUp('prizes'));
                break;
            case ('born'):
                newState.tableHeadersName.born.sortDirection = 'down';
                newState.currentData = state.currentData.sort(sortStringUp('born'));
                break;
            case ('died'):
                newState.tableHeadersName.died.sortDirection = 'down';
                newState.currentData = state.currentData.sort(sortStringUp('died'));
                break;

            default:
                break
        }
    }
    
    renderTable(newState);
};

export { sortColumn };