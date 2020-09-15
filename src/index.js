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
    return getLetters(expr);
}

function getArray(expr) {
    let letters = [];
    for ( let i = 0; i < expr.length; i +=10 ){
        letters.push( expr.slice(i, i +10) ); 
    }
    return letters;
}

function getLetters(expr) {
    let arrNum = getArray(expr);
    let letters = [];
    let dota = '10';
    let dash = '11';
    let space = '**********';
    let key;
    for ( let i = 0; i < arrNum.length; i++ ) {
        if ( arrNum[i] == space ) {
            letters.push(' ');
            continue;
        }
        key = '';
        for ( let j = 0; j < 10; j+=2 ) {
            if ( arrNum[i][j] + arrNum[i][j+1] == dota ) {
                key += '.';
            } else if ( arrNum[i][j] + arrNum[i][j+1] == dash ) {
                key += '-';
            } 
        }

        letters.push( MORSE_TABLE[key] );
    }
    return letters.join('');
}

module.exports = {
    decode
}
