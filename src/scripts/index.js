import './../style/style.scss';
import { people } from './data';
import { renderTable } from './table/renderTable';
import { getDataWithoutUndefined } from "./logic/getDataWithoutUndefined";

const tableBox = document.getElementById('tableBox');
const tableHeadersName = {
    id: { name: 'id', sortDirection: 'down', key: 'id' },
    firstName: { name: 'First name', sortDirection: 'down', key: 'firstName' },
    lastName: { name: 'Last name', sortDirection: 'down', key: 'lastName' },
    bornLocation: { name: 'Born location', sortDirection: 'down', key: 'bornLocation' },
    diedLocation: { name: 'Died location', sortDirection: 'down', key: 'diedLocation' },
    gender: { name: 'Gender', sortDirection: 'down', key: 'gender' },
    prizes: { name: 'Prizes', sortDirection: 'down', key: 'prizes' },
    born: { name: 'Born', sortDirection: 'down', key: 'born' },
    died: { name: 'Died', sortDirection: 'down', key: 'died' },
};
const rowPerPageArr = [5, 10, 25, 50, 100, 250];
const startCurrentRowPerPage = 10;
const startCurrentPage = 1;
const startFirstElementIndex = 0;
const currentData = people.map((el) => {
    const bornLocation = getDataWithoutUndefined(el.bornCity, el.bornCountry);
    const diedLocation = getDataWithoutUndefined(el.diedCity, el.diedCountry);
    const prizes = getDataWithoutUndefined(el.prizes[0].category, el.prizes[0].year);

    return {
        id: el.id || '',
        firstName: el.firstname || '',
        lastName: el.surname || '',
        bornLocation: bornLocation,
        diedLocation: diedLocation,
        gender: el.gender || '',
        prizes: prizes,
        born: el.born || '',
        died: el.died || ''
    }
});
const startState = {
    currentRowPerPage: startCurrentRowPerPage,
    currentPage: startCurrentPage,
    tableBox: tableBox,
    tableHeadersName: tableHeadersName,
    firstElementIndex: startFirstElementIndex,
    rowPerPageArr: rowPerPageArr,
    currentData: currentData,
}

renderTable(startState);