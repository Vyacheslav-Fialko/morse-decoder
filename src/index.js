const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
        let chars = [];
    let morseChar = [];
    let resultArr = [];

    //array of encoded letters, each encoded letter's length is 10
    for (let i = 0; i < expr.length; i = i + 10) {
        chars.push(expr.substr(i, 10));
    }

    chars.forEach(item => {
        if (item == '**********') resultArr.push(' ');
        let splitted = item.split('');

        //remove zeros from the beginning
        for (let i = 0; i < splitted.length; i++) {
            if (splitted[i] == 0) {
                splitted.shift();
                i = -1;
            } else break;
        }
        //10 stands for dot(.), 11 stands for dash(-).
        for (let i = 0; i < splitted.length; i = i + 2) {
            if (splitted[i].concat(splitted[i + 1]) == '10') {
                morseChar.push('.')
            } else if (splitted[i].concat(splitted[i + 1]) == '11') {
                morseChar.push('-')
            }
        }
        let morseStr = morseChar.join('');

        for (let key in MORSE_TABLE) {
            if (key == morseStr) {
                resultArr.push(MORSE_TABLE[key]);
            }
        }
        morseChar = [];
    });

    let resultStr = resultArr.join('');
    return resultStr;
}

module.exports = {
    decode
}
