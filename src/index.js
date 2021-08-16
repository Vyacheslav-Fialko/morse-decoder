const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const refStr = (expr) => {
  let resArr = [];
  for (let i = 0; i < expr.length; i += 10) {
    let item = expr.substring(i, i + 10);
    item === "**********"
      ? resArr.push(" ")
      : resArr.push(item.substring(item.indexOf("1")));
  }
  return resArr;
};

const morseCode = (arr) => {
  let resArr = [];
  arr.forEach((item) => {
    let resStr = "";
    for (let i = 0; i < item.length; i += 2) {
      let str = `${item[i]}${item[i + 1]}`;
      str === "10"
        ? (resStr += ".")
        : str === "11"
        ? (resStr += "-")
        : (resStr += item[i]);
    }
    resArr.push(resStr);
  });
  return resArr;
};


const decode = (expr) => {
  const chars = refStr(expr);
  const morseChar = morseCode(chars);
  
  return morseChar.map(item => MORSE_TABLE[item] || item).join('');
};

module.exports = {
  decode,
};
