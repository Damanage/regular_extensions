let patternG = /Пу/g;   // Флаг g возвращает все совпавшие объекты, не только первый
let patternI = /Пу/i;   // Флаг i убирает регистр


let exOne = 'Ехал путин через реку, видит Путин в реке рак... ';


// console.log(exOne.search(patternI));     // .search() Возвращает массив с номером первого совпавшего попавшегося объекта
// console.log(exOne.split());              // .split() Разбивает строку на слова с разделителем в аргументе
// console.log(exOne.match(patternG));      // .match() Возвращает массив с совпавшими объектами
// console.log(exOne.replace(' ', '.'));       // .replace() Возвращает строку замещая первый аргумент на второй


// console.log(exOne.replace(/Пу/gis, '$&-пу'));
// console.log(exOne.replace(/(пу)(ин)/ig, "$2$1"));

function myFunc(match, offset, str){
    return `Павло-${match}ская лавра`;
}

console.log(exOne.replace(/Путин/ig, myFunc));