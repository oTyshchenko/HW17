export const getDataWithoutUndefined = (el1, el2) => {
    let name;

    if (el1 && el2) {
        name = `${el1}, ${el2}`;
    } else if (el1 === undefined && el2 === undefined) {
        name = '';
    } else if (el1 === undefined) {
        name = el2;
    } else if (el2 === undefined) {
        name = el1;
    }

    return name;
};