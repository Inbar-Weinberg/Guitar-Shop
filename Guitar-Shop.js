"use strict"
// not using class syntax on purpose
const DEF_MAN_YEAR = 2021;
const DEF_BRAND = 'unbranded';
const DEF_PRICE = 1;
const DEF_STRINGS = 6;
const DEF_STRINGS_BASS = 4;
const DEF_USED = false;
const DEF_LONG_NECK = false;

function isInRange(num, min = 0, max = Infinity) {
    num = parseFloat(num);
    if (Number.isFinite && num > min && num < max)
        return num;
    return false;
}

function ClassicGuitar(manufactureYear = DEF_MAN_YEAR, brand = DEF_BRAND, price = DEF_PRICE, numOfString = DEF_STRINGS, used = DEF_USED) {
    this.manufactureYear = (isInRange(manufactureYear, 1900, DEF_MAN_YEAR)) ? manufactureYear : DEF_MAN_YEAR;
    this.brand = (typeof brand === 'string') ? brand : DEF_BRAND;;
    this.price = (isInRange(price, 0)) ? price : DEF_PRICE;
    this.numOfString = (isInRange(numOfString, 1, 20)) ? numOfString : DEF_STRINGS;
    this.used = (typeof used === 'boolean') ? used : DEF_USED;

    this.play = function () {
        this.price *= 90 / 100;
        this.used = true;
        return "🎶🎶🎶";
    }
    this.getManufactureYear = function () { return this.manufactureYear; }
    this.getBrand = function () { return this.brand };
    this.getPrice = () => this.price;
    this.setPrice = (newPrice) => { this.price = newPrice };
}
ClassicGuitar.detectSound = function (sound) {
    if (sound == "🎸") return 'ElectricGuitar';
    if (sound === "🔊") return 'BassGuitar';
    return 'sound not recognized'
}



function BassGuitar(manufactureYear = DEF_MAN_YEAR, brand = DEF_BRAND, price = DEF_PRICE, numOfString = DEF_STRINGS_BASS, used = DEF_USED) {
    ClassicGuitar.call(this, manufactureYear, brand, price, numOfString, used);
    BassGuitar.prototype = Object.create(ClassicGuitar.prototype);
    Object.defineProperty(BassGuitar.prototype, 'constructor', {
        value: BassGuitar,
        enumerable: false, // so that it does not appear in 'for in' loop
        writable: true
    });

    this.play = function () {
        this.price *= 90 / 100;
        this.used = true;
        return "🔊🔊🔊";
    }
    this.playSolo = function () {
        const length = Math.floor(Math.random() * 19 + 1); // random length between 1 to 20 strings long
        let sounds = ["💥", "🤘", "🎵", "📢", "💢", "🕺"]
        let solo = '';
        for (let i = 1; i <= length; i++) {
            solo += sounds[Math.floor(Math.random() * 6)];
        }
        return solo;
    }
}

function ElectricGuitar(manufactureYear = DEF_MAN_YEAR, brand = DEF_BRAND, price = DEF_PRICE, numOfString = DEF_STRINGS, used = DEF_USED, longNeck = DEF_LONG_NECK) {
    ClassicGuitar.call(this, manufactureYear, brand, price, numOfString, used, longNeck);
    this.longNeck = (typeof longNeck === 'boolean') ? longNeck : DEF_LONG_NECK;

    ElectricGuitar.prototype = Object.create(ClassicGuitar.prototype);
    Object.defineProperty(ElectricGuitar.prototype, 'constructor', {
        value: ElectricGuitar,
        enumerable: false, // so that it does not appear in 'for in' loop
        writable: true
    });

    this.play = function () {
        this.price *= 90 / 100;
        this.used = true;
        return "🎸🎸🎸";
    }
}
