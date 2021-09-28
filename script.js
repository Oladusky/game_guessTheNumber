// let InputMin = document.getElementById('input_min');
// let InputMax = document.getElementById('input_max');

// // let value1 = InputMin;
// // minValue = value1 || '0';
// // minValue = (value1 < -999) ? -999 : value1;

// // let value2 = InputMax;
// // maxValue = value2 || '100';
// // maxValue = (value2 > 999) ? 999 : value2;

// document.getElementById('btnStartGame').addEventListener('click',  () => {
//     alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
// });

// let answerNumber = Math.floor((minValue + maxValue) / 2);
// let orderNumber = 1;
// let gameRun = true;
// const orderNumberField = document.getElementById('orderNumberField');
// const answerField = document.getElementById('answerField');

//-----------работающее------------------------------------------
let value1 = parseInt(prompt('Минимальное значение числа для игры', '0'));
let minValue = value1 || '0';
minValue = (value1 < -999) ? -999 : value1;

let value2 = parseInt(prompt('Максимальное значение числа для игры', '100'));
let maxValue = value2 || '100';
maxValue = (value2 > 999) ? 999 : value2;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');


// -------------------------------------------------
let stringNum;
let numberAsText;
stringNum = convertToText(answerNumber.toString());
function convertToText(stringNum) {
    const hundreds = {
        0: '',
        1: 'сто ',
        2: 'двести ',
        3: 'триста ',
        4: 'четыреста ',
        5: 'пятьсот ',
        6: 'шестьсот ',
        7: 'семьсот ',
        8: 'восемьсот ',
        9: 'девятьсот ',
        10: 'одна тысяча '
    }

    const tens = {
        0: '',
        1: '',
        2: 'двадцать ',
        3: 'тридцать ',
        4: 'сорок ',
        5: 'пятьдесят ',
        6: 'шестьдесят ',
        7: 'семьдесят ',
        8: 'восемьдесят ',
        9: 'девяносто ',
    }

    const integers = {
        0: '',
        1: 'один',
        2: 'два',
        3: 'три',
        4: 'четыре',
        5: 'пять',
        6: 'шесть',
        7: 'семь',
        8: 'восемь',
        9: 'девять',
        10: 'десять',
        11: 'одиннадцать',
        12: 'двенадцать',
        13: 'тринадцать',
        14: 'четырнадцать',
        15: 'пятнадцать',
        16: 'шестнадцать ',
        17: 'семнадцать ',
        18: 'восемнадцать ',
        19: 'девятнадцать ',
    }

    let [nums, desc, hun] = stringNum.split('').reverse();
    if (desc == 1) {
        desc == 0;
        nums += 10;
    }
    numberAsText = "";
    if (stringNum == 0) {
        numberAsText = "ноль";
    } else if (stringNum > 0 && stringNum < 20) {
        numberAsText = integers[nums];
    } else if (stringNum > 20 && stringNum < 99) {
        numberAsText = tens[desc] + integers[nums];
    } else if (stringNum > 99 && stringNum < 999) {
        numberAsText = hundreds[hun] + tens[desc] + integers[nums];
    } 
    numberAsText = (numberAsText.length > 20) ? stringNum : numberAsText;
    numberAsText = (stringNum < 0) ? stringNum : numberAsText;
    return numberAsText;
}



orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${numberAsText}?`;

// кнопка больше

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            let stringNum;
            let numberAsText;

            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            stringNum = convertToText(answerNumber.toString());
            stringNum.length > 20 ? numberAsText = answerNumber : numberAsText = stringNum;
        

            const answerRandom = Math.round(Math.random() * 4);
            if (answerRandom === 2) {
                answer = `Вы загадали число + ${numberAsText}?`;
            } else if (answerRandom === 3) {
                answer = `Легко! Это число ${numberAsText }?`;
            } else {
                answer = `Кажется, я знаю - это ${numberAsText }?`;
            }
            answerField.innerText = answer;
        }

    }
})

// кнопка меньше

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            let stringNum;
            let numberAsText;

            maxValue = answerNumber - 1;
            answerNumber = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            stringNum = convertToText(answerNumber.toString());
            stringNum.length > 20 ? numberAsText = answerNumber : numberAsText = stringNum;
         

            const answerRandom = Math.round(Math.random() * 4);
            if (answerRandom === 2) {
                answer = `Вы загадали число ${numberAsText }?`;
            } else if (answerRandom === 3) {
                answer = `Легко! Это число ${numberAsText }?`;
            } else {
                answer = `Кажется, я знаю - это ${numberAsText }?`;
            }
            answerField.innerText = answer;
        }
    }
})


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        if (answerNumber === 0) {
            answerField.innerText = `Очень банально`;
        } else if (answerNumber < 0) {
            answerField.innerText = `Не люблю отрицательные числа!`;
        } else if (answerNumber > 100) {
            answerField.innerText = `С вами приятно иметь дело!`;
        } else if (answerNumber > 10) {
            answerField.innerText = `Какой я молодец!`;
        }
        gameRun = false;
    }
})


// кнопка заново

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumberField.innerText = 1;
    prompt('Минимальное знание числа для игры', '0');
    prompt('Максимальное знание числа для игры', '100');
    answerNumber = Math.floor((minValue + maxValue) / 2);
    const answerRandom = Math.round(Math.random() * 4);
    let stringNum;
    let numberAsText;
    stringNum = convertToText(answerNumber.toString());
    stringNum.length > 20 ? numberAsText = answerNumber : numberAsText = stringNum;
    if (answerRandom === 2) {
        answer = `Вы загадали число ${numberAsText }?`;
    } else if (answerRandom === 3) {
        answer = `Легко! Это число ${numberAsText }?`;
    } else {
        answer = `Кажется, я знаю - это ${numberAsText }?`;
    }
    answerField.innerText = answer;
    gameRun = true;
})