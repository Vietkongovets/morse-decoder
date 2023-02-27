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
const morseTable = {
    '0000001111': 'a',
    '0000111111': 'b',
    '0000111011': 'c',
    '0000011111': 'd',
    '0000000001': 'e',
    '0000101111': 'f',
    '0000011011': 'g',
    '0000101010': 'h',
    '0000001010': 'i',
    '0000111100': 'j',
    '0000010111': 'k',
    '0000111000': 'l',
    '0000001110': 'm',
    '0000001100': 'n',
    '0000011100': 'o',
    '0000110101': 'p',
    '0000100110': 'q',
    '0000000100': 'r',
    '0000010100': 's',
    '0000000010': 't',
    '0000010010': 'u',
    '0000100010': 'v',
    '0000011010': 'w',
    '0000100100': 'x',
    '0000110010': 'y',
    '0000001101': 'z'
  };

  let decodedString = '';

  // Split the encoded string into 10-character chunks
  const encodedLetters = encodedString.match(/.{10}/g);

  // Loop through each encoded letter and decode it
  for (let i = 0; i < encodedLetters.length; i++) {
    const encodedLetter = encodedLetters[i];

    // If the encoded letter is a space, add a space to the decoded string
    if (encodedLetter === '**********') {
      decodedString += ' ';
    } else {
      // Otherwise, look up the decoded letter in the Morse code table
      decodedString += morseTable[encodedLetter];
    }
  }

  return decodedString;
}

module.exports = {
    decode
}