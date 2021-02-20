"use strict"
// not using class syntax on purpose
const DEF_MAN_YEAR = 2021;
const DEF_BRAND = 'unbranded';
const DEF_PRICE = 1;
const DEF_STRINGS = 6;
const DEF_USED = false;




function ClassicGuitar(manufactureYear = DEF_MAN_YEAR, brand = DEF_BRAND, price = DEF_PRICE, numOfString = DEF_PRICE, used = DEF_USED) {
    this.manufactureYear = (isInRange(manufactureYear, 1900, DEF_MAN_YEAR)) ? manufactureYear : DEF_MAN_YEAR;
    this.brand = brand;
    this.price = (isInRange(price, 0)) ? price : DEF_PRICE;
    this.numOfString = (isInRange(numOfString,1,20))? numOfString : DEF_STRINGS;
    this.used=used;
}

function isInRange(num, min = 0, max = Infinity) {
    num = parseFloat(num);
    if (Number.isFinite && num > min && num < max)
        return num;
    return false;
}🎶