import './../style/style.scss';
import { people } from './data';
import { renderTable } from './table/renderTable';
import { getDataWithoutUndefined } from "./logic/getDataWithoutUndefined";

const tableBox = document.getElementById('tableBox');
const tableHeadersName = ['id↓', 'First name↓', 'Last name↓', 'Born location↓', 'Died location↓', 'Gender↓', 'Prizes↓', 'Born↓', 'Died↓'];
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
    currentData: currentData
}

renderTable(startState);