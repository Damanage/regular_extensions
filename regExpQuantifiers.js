//Квантификаторы
// {n}, где n кол-во символов
let pattern         = /\w{1,3}/g,
    rusPattern      = /\W{2,4}[а-я]*/g,
    linkPattern     = /href=".+"/gi,        // жадный поиск
    lazyPattern     = /href=".+?"/,         // ленивый поиск
    nextPattern     = /href="[^"]+"/,
    numberPattern   = /\d+\.+\d+/g,
    datePattern     = /\d{4}\.[0-3][1-9]\.[0-1][1-9]/g;


let str         = 'such a lot of things валера';
let link        = '<a href="http://joe.com" className="joe">';
let numbers     = '33, 0.44, 52, 3.123, 12.3, 126, 32';
let dateNumbers = '22.12.2022, 12.22.2013, 2013.02.23, 2013.23.07, 2017.05.32, 2017.14.13, 2018.03.04';


console.log(dateNumbers.match(datePattern));


// Служебные символы
// ? = {0, 1}       // встречается в паттерне не более 0 или 1 раз
// * = {0,}         // встречается в паттерне ноль или более раз 
// .                // любой символ