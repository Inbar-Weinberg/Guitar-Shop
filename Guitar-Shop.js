"use strict"
// not using class syntax on purpose
const DEF_MAN_YEAR = 2021;
const DEF_BRAND = 'unbranded';
const DEF_PRICE = 1;
const DEF_STRINGS = 6;
const DEF_STRINGS_BASS = 4;
const DEF_USED = false;
const DEF_LONG_NECK = false;



function ClassicGuitar(manufactureYear = DEF_MAN_YEAR, brand = DEF_BRAND, price = DEF_PRICE, numOfString = DEF_STRINGS, used = DEF_USED) {
    this.manufactureYear = (isInRange(manufactureYear, 1900, DEF_MAN_YEAR)) ? manufactureYear : DEF_MAN_YEAR;
    this.brand = (typeof brand === 'string') ? brand : DEF_BRAND;;
    this.price = (isInRange(price, 0)) ? price : DEF_PRICE;
    this.numOfString = (isInRange(numOfString, 1, 20)) ? numOfString : DEF_STRINGS;
    this.used = (typeof used === 'boolean') ? used : DEF_USED;


    ClassicGuitar.prototype.play = function () {
        this.price *= 90 / 100;
        this.used = true;
        return "🎶🎶🎶";
    }
    ClassicGuitar.prototype.getManufactureYear = function () {
        return this.manufactureYear;
    }

    ClassicGuitar.prototype.getBrand = () => this.brand;
    ClassicGuitar.prototype.getPrice = () => this.price;
    ClassicGuitar.prototype.setPrice = (newPrice) => { this.price = newPrice };


    function isInRange(num, min = 0, max = Infinity) {
        num = parseFloat(num);
        if (Number.isFinite && num > min && num < max)
            return num;
        return false;
    }

}
// לסיים שיטות סטטיות

// רלוונטי רק לclass 

this.numOfString = (isInRange(numOfString, 1, 20)) ? numOfString : DEF_STRINGS;
this.used = used;
function ElectricGuitar(manufactureYear = DEF_MAN_YEAR, brand = DEF_BRAND, price = DEF_PRICE, numOfString = DEF_STRINGS_BASS, used = DEF_USED, longNeck = DEF_LONG_NECK,) {

    ClassicGuitar.call(this, manufactureYear, brand, price, numOfString, used);
    this.longNeck = (typeof longNeck === 'boolean') ? longNeck : DEF_LONG_NECK;

    ElectricGuitar.prototype= Object.create(ClassicGuitar.prototype);
    Object.defineProperty(ElectricGuitar.prototype, 'constructor', {
        value: ElectricGuitar,
        enumerable: false, // so that it does not appear in 'for in' loop
        writable: true
    });

}





