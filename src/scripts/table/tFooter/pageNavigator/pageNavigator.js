import { getTd, getSpan, getBtn } from "../../../createTags/tags";
import { showNextPage } from "./showNexPage";
import { showPrevPage } from "./showPrevPage";
import { showLastPage } from "./showLastPage";
import { showFirstPage } from "./showFirstPage";

export const getPageNavigator = (state) => {
    const newState = {...state};
    const lastPageNumber = Math.ceil(state.currentData.length / state.currentRowPerPage);
    const pageNavigationBox = getTd();

    if (state.currentPage > 1) {
        const prevBtn = getBtn();
        const firstBtn = getBtn();

        prevBtn.innerText = '<';
        firstBtn.innerText = 1;
        prevBtn.classList.add('btn', 'btn-light');
        firstBtn.classList.add('btn', 'btn-light');

        prevBtn.addEventListener('click', () => showPrevPage(newState, state));
        firstBtn.addEventListener('click', () => showFirstPage(newState));

        pageNavigationBox.append(prevBtn, firstBtn);

        if (state.currentPage > 2) {
            const prevNumberBtn = getBtn();
            prevNumberBtn.innerText = state.currentPage - 1;
            prevNumberBtn.addEventListener('click', () => showPrevPage(newState, state));
            prevNumberBtn.classList.add('btn', 'btn-light');
            pageNavigationBox.appendChild(prevNumberBtn);

            if (state.currentPage > 3) {
                const triplePoint1 = getSpan();
                triplePoint1.innerText = '...';;
                pageNavigationBox.append(triplePoint1, prevNumberBtn);
            };
        };
    };

    const activeBtn = getBtn();
    activeBtn.innerText = state.currentPage;
    activeBtn.classList.add('btn', 'btn-secondary');
    pageNavigationBox.appendChild(activeBtn);

    if (state.currentPage !== lastPageNumber) {
        const lastBtn = getBtn();
        const nextBtn = getBtn();

        lastBtn.innerText = lastPageNumber;
        nextBtn.innerText = '>';
        lastBtn.classList.add('btn', 'btn-light');
        nextBtn.classList.add('btn', 'btn-light');

        lastBtn.addEventListener('click', () => showLastPage(newState, state, lastPageNumber));

        nextBtn.addEventListener('click', () => showNextPage(newState, state));
        pageNavigationBox.append(lastBtn, nextBtn);

        if (state.currentPage < (lastPageNumber - 1)) {
            const nextNumberBtn = getBtn();
            nextNumberBtn.innerText = newState.currentPage + 1;
            nextNumberBtn.addEventListener('click', () => showNextPage(newState, state));
            nextNumberBtn.classList.add('btn', 'btn-light');
            pageNavigationBox.append(nextNumberBtn, lastBtn, nextBtn);

            if (state.currentPage < (lastPageNumber - 2)) {
                const triplePoint2 = getSpan();
                triplePoint2.innerText = '...';
                pageNavigationBox.append(nextNumberBtn, triplePoint2, lastBtn, nextBtn);
            };
        };
    };

    return pageNavigationBox;
};