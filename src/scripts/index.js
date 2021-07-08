import './../style/style.scss';
import { people } from './data';

const tBody = document.getElementById('tBody');
const rowNumber = document.getElementById('rowPerPage');
const sort = document.querySelectorAll('.sort');
const firstBtn = document.getElementById('firstBtn');
const firstSpan = document.getElementById('firstSpan');
const prevBtn = document.getElementById('prevBtn');
const activeBtn = document.getElementById('activeBtn');
const nextBtn = document.getElementById('nextBtn');
const lastSpan = document.getElementById('lastSpan');
const lastBtn = document.getElementById('lastBtn');

let currentData = people;

const pageBtnDisplay = () => {
    if (+activeBtn.innerText === 1) {
        firstBtn.classList.add('none');
        firstSpan.classList.add('none');
        prevBtn.classList.add('none');
        lastBtn.classList.remove('none');
        lastSpan.classList.remove('none');
        nextBtn.classList.remove('none');
    } else if (+activeBtn.innerText === 2) {
        firstBtn.classList.add('none');
        firstSpan.classList.add('none');
        prevBtn.classList.remove('none')
        lastBtn.classList.remove('none');
        lastSpan.classList.remove('none');
        nextBtn.classList.remove('none');
    } else if (+activeBtn.innerText === 3) {
        firstSpan.classList.add('none')
        firstBtn.classList.remove('none')
        lastBtn.classList.remove('none');
        lastSpan.classList.remove('none');
        nextBtn.classList.remove('none');
    } else if (+activeBtn.innerText > 3 && +activeBtn.innerText < (+lastBtn.innerText - 2)) {
        firstSpan.classList.remove('none')
        firstBtn.classList.remove('none')
        prevBtn.classList.remove('none')
        lastBtn.classList.remove('none');
        lastSpan.classList.remove('none');
        nextBtn.classList.remove('none');
    } else if (+activeBtn.innerText === +lastBtn.innerText) {
        lastBtn.classList.add('none');
        lastSpan.classList.add('none');
        nextBtn.classList.add('none');
        firstSpan.classList.remove('none');
        firstBtn.classList.remove('none');
        prevBtn.classList.remove('none');
    } else if (+activeBtn.innerText === (+lastBtn.innerText - 1)) {
        lastBtn.classList.add('none');
        lastSpan.classList.add('none');
        nextBtn.classList.remove('none');
        firstSpan.classList.remove('none');
        firstBtn.classList.remove('none');
        prevBtn.classList.remove('none');
    } else if (+activeBtn.innerText === (+lastBtn.innerText - 2)) {
        lastBtn.classList.remove('none');
        lastSpan.classList.add('none');
        nextBtn.classList.remove('none');
        firstSpan.classList.remove('none');
        firstBtn.classList.remove('none');
        prevBtn.classList.remove('none');
    }

    if (+lastBtn.innerText === 5) {
        firstBtn.classList.remove('none');
        firstSpan.classList.add('none');
        prevBtn.classList.remove('none');
        nextBtn.classList.remove('none');
        lastSpan.classList.add('none');
        lastBtn.classList.remove('none');
    } else if (+lastBtn.innerText === 4 && +activeBtn.innerText === 1) {
        firstBtn.classList.add('none');
        firstSpan.classList.add('none');
        prevBtn.classList.add('none');
        nextBtn.classList.remove('none');
        lastSpan.classList.remove('none');
        lastBtn.classList.remove('none');
    } else if (+lastBtn.innerText === 4 && +activeBtn.innerText === 2) {
        firstBtn.classList.add('none');
        firstSpan.classList.add('none');
        prevBtn.classList.remove('none');
        nextBtn.classList.remove('none');
        lastSpan.classList.add('none');
        lastBtn.classList.remove('none');
    } else if (+lastBtn.innerText === 4 && +activeBtn.innerText === 3) {
        firstBtn.classList.remove('none');
        firstSpan.classList.add('none');
        prevBtn.classList.remove('none');
        nextBtn.classList.remove('none');
        lastSpan.classList.add('none');
        lastBtn.classList.add('none');
    } else if (+lastBtn.innerText === 4 && +activeBtn.innerText === 4) {
        firstBtn.classList.remove('none');
        firstSpan.classList.remove('none');
        prevBtn.classList.remove('none');
        nextBtn.classList.add('none');
        lastSpan.classList.add('none');
        lastBtn.classList.add('none');
    }

    if (+lastBtn.innerText === 2 && +activeBtn.innerText === 1) {
        firstBtn.classList.add('none');
        firstSpan.classList.add('none');
        prevBtn.classList.add('none');
        nextBtn.classList.remove('none');
        lastSpan.classList.add('none');
        lastBtn.classList.add('none');
    } else if (+lastBtn.innerText === 2 && +activeBtn.innerText === 2) {
        firstBtn.classList.add('none');
        firstSpan.classList.add('none');
        prevBtn.classList.remove('none');
        nextBtn.classList.add('none');
        lastSpan.classList.add('none');
        lastBtn.classList.add('none');
    }
};

const renderTable = (arr, page = 0) => {
    tBody.innerHTML = '';

    const rowPerPage = +rowNumber.value;
    const firstElementIndex = rowPerPage * page;

    for (let index = firstElementIndex; index < (firstElementIndex + rowPerPage) && index < arr.length; index++) {
        const id = document.createElement('td');
        const firstname = document.createElement('td');
        const surname = document.createElement('td');
        const bornCity = document.createElement('td');
        const diedCity = document.createElement('td');
        const gender = document.createElement('td');
        const prizes = document.createElement('td');
        const born = document.createElement('td');
        const died = document.createElement('td');
        const tr = document.createElement('tr');

        id.innerText = arr[index].id;
        firstname.innerText = arr[index].firstname;
        surname.innerText = arr[index].surname;
        bornCity.innerText = `${arr[index].bornCity}, ${arr[index].bornCountry}`;
        diedCity.innerText = `${arr[index].diedCity}, ${arr[index].diedCountry}`;
        gender.innerText = arr[index].gender;
        prizes.innerText = `${arr[index].prizes[0].category}, ${arr[index].prizes[0].year}`;
        born.innerText = arr[index].born;
        died.innerText = arr[index].died;

        tr.append(id, firstname, surname, bornCity, diedCity, gender, prizes, born, died);
        tBody.appendChild(tr);

        activeBtn.innerText = Math.round((index + 1) / rowPerPage);
        prevBtn.innerText = +activeBtn.innerText - 1;
        nextBtn.innerText = +activeBtn.innerText + 1;
    };
    lastBtn.innerText = Math.round(arr.length / rowPerPage);

    pageBtnDisplay();
};

const sortStringUp = (key) => (a, b) => a[key] > b[key] ? 1 : -1;

const sortStringDown = (key) => (a, b) => a[key] < b[key] ? 1 : -1;

const sortNumberUp = (key) => (a, b) => a[key] - b[key];

const sortNumberDown = (key) => (a, b) => b[key] - a[key];

sort.forEach((el) => {
    el.addEventListener('click', (e) => {
        const sortBy = e.target.dataset.name;
        const sortStatus = e.target.dataset.sort;

        const simpleCase = (field) => {
            if (sortStatus === 'up') {
                e.target.dataset.sort = 'down';
                currentData = people.sort(sortStringUp(field));
            } else {
                e.target.dataset.sort = 'up';
                currentData = people.sort(sortStringDown(field));
            }
        }

        switch (sortBy) {
            case 'id':
                if (sortStatus === 'up') {
                    e.target.dataset.sort = 'down';
                    currentData = people.sort(sortNumberUp('id'));
                } else {
                    e.target.dataset.sort = 'up';
                    currentData = people.sort(sortNumberDown('id'));
                }
                break;
            case 'firstname':
                simpleCase('firstname');
                break;
            case 'surname':
                simpleCase('surname');
                break;
            case 'bornCity':
                simpleCase('bornCity');
                break;
            case 'diedCity':
                simpleCase('diedCity');
                break;
            case 'gender':
                simpleCase('gender');
                break;
            case 'prizes':
                simpleCase('prizes');
                break;
            case 'born':
                simpleCase('born');
                break;
            case 'died':
                simpleCase('died');
                break;

            default:
                break;
        }
        renderTable(currentData);
    })
})

rowNumber.addEventListener('change', () => renderTable(currentData));

firstBtn.addEventListener('click', () => {
    const pageNumber = (+firstBtn.innerText - 1);
    renderTable(currentData, pageNumber);
});

prevBtn.addEventListener('click', () => {
    const pageNumber = (+prevBtn.innerText - 1);
    renderTable(currentData, pageNumber);
});

nextBtn.addEventListener('click', () => {
    const pageNumber = (+nextBtn.innerText - 1);
    renderTable(currentData, pageNumber);
});

lastBtn.addEventListener('click', () => {
    const pageNumber = +lastBtn.innerText;
    renderTable(currentData, pageNumber);
});

renderTable(currentData);