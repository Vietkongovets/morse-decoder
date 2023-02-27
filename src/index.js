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
function decodeMorse(encodedString) {
  // Create a lookup table to map Morse code patterns to letters
  const morseTable = {
    '0000001111': 'a',
    '0000111100': 'b',
    '0000111010': 'c',
    '0000011000': 'd',
    '0000000010': 'e',
    '0000101010': 'f',
    '0000010100': 'g',
    '0000100010': 'h',
    '0000001010': 'i',
    '0000111000': 'j',
    '0000011010': 'k',
    '0000100100': 'l',
    '0000001110': 'm',
    '0000001100': 'n',
    '0000011110': 'o',
    '0000110010': 'p',
    '0000101110': 'q',
    '0000000100': 'r',
    '0000011000': 's',
    '0000000010': 't',
    '0000010010': 'u',
    '0000100010': 'v',
    '0000011010': 'w',
    '0000100100': 'x',
    '0000101010': 'y',
    '0000001100': 'z',
    '**********': ' '
  };

  // Split the encoded string into 10-character chunks
  const chunks = encodedString.match(/.{10}/g);

  // Decode each chunk and concatenate the result
  let decoded = '';
  for (let i = 0; i < chunks.length; i++) {
    decoded += morseTable[chunks[i]];
  }

  return decoded;
}
}

module.exports = {
    decode
}