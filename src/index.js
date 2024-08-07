function toReadable(number) {
    // Lists of numbers in words
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundreds = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];

    let res = '';

    // Определяем и херачим сотни
    if (number >= 100) {
        res += hundreds[Math.floor(number / 100)]; // Упрощаем до цифры, которая и определяет что будет написано
        number %= 100;
        if (number > 0) {
            res += " "; // Продолжение
        }
    }

    // Определяем и херачим десятки
    if (number >= 20) {
        res += tens[Math.floor(number / 10)];
        number %= 10;
        if (number > 0) {
            res += " ";
        }
    } else if (number >= 11) {  // Все - нам не нужны остальные числа, можно выводить.
        res += teens[number - 11];
        number = 0; //
    } else if (number === 10) {
        res += tens[1];
        number = 0; // Все - нам не нужны остальные числа, можно выводить.
    }

    // Определяем и херачим цифры
    if (number > 0 && number < 10) {
        res += numbers[number];
    }

    // На всякий случай штучка чтоб если число 0
    if (number === 0 && res === '') {
        return "zero";
    }

    return res;
}

module.exports = toReadable; // Перенес чтоб удобно біло