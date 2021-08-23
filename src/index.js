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
    let answer = '';
    let check = '';
    for (let i = 0; i <= expr.length; i += 2) {
      if (i % 10 === 0) {
        if (check === 'xxxxx') {
          answer += ' ';
        }
        for (let key in MORSE_TABLE) {
          if (key === check) {
            answer += MORSE_TABLE[key]
          }
        }
        check = '';
      }
      if (expr[i] + expr[i + 1] === '11') {
        check += '-';
      }
      if (expr[i] + expr[i + 1] === '10') {
        check += '.';
      }
      if (expr[i] === '*') {
        check += 'x'
      }
    }
    return answer
  }
module.exports = {
    decode
}