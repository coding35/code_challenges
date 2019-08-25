// Tests based on the following sources
// CoderByte https://coderbyte.com


QUnit.test('Return the factorial. Reverse Loop w/ assignment operator *=', function (assert) {

  // approx 16ms
  let count = 4;
  let factorial = count;

  for (var i = count - 1; i > 0; i--) {
    factorial *= i;
  }
  assert.ok(factorial == 24, 'Passed!');
});


QUnit.test('Return the factorial. Reverse Loop', function (assert) {

  // approx 16ms
  let count = 4;
  let factorial = count;

  for (var i = count - 1; i > 0; i--) {
    factorial = factorial * i;
  }
  assert.ok(factorial == 24, 'Passed!');
});


QUnit.test('Return the factorial. Recursion', function (assert) {

  function Execute(input) {
    if (input === 1) {
      return 1
    } else {
      return input * Execute(input - 1)
    }
  }
  assert.ok(Execute(16) == 20922789888000, 'Passed!');
  assert.ok(Execute(4) == 24, 'Passed!');
});

QUnit.test('Return the factorial. Forward Loop', function (assert) {

  // approx 6ms
  let num = 4;
  let factorial = 1;

  for (var i = 1; i <= num; i++) {
    factorial = factorial * i;
  }

  assert.ok(factorial == 24, 'Passed!');
});


QUnit.test('Return reverse string. split/reverse/join', function (assert) {

  let input = 'Hello World!';
  let output = input.split('').reverse().join('');

  assert.ok(output == '!dlroW olleH', 'Passed!');
});


QUnit.test('Return longest word. Ignore punctuation. Array forEach', function (assert) {

  let input = 'Hello Coding World!';
  let longestWord = '';
  let arr = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(' ');

  arr.forEach(item => {
    if (item.length > longestWord.length) {
      longestWord = item;
    }
  })

  assert.ok(longestWord == 'Coding', 'Passed!');
});


QUnit.test('Return longest word. Ignore punctuation. Array Sort', function (assert) {

  let input = 'Hello Coding World!';
  let longestWord = '';
  let arr = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(' ');

  arr.sort((a, b) => { return b.length - a.length });

  longestWord = arr.shift();

  assert.ok(longestWord == 'Coding', 'Passed!');
});


QUnit.test('Return longest word. Ignore punctuation. Array Sort /w Regex Match', function (assert) {

  let input = 'Hello Coding World!';
  let longestWord = '';
  let arr = input.match(/[a-z0-9]+/gi) // no split operation necessary here

  arr.sort((a, b) => { return b.length - a.length });

  longestWord = arr.shift();

  assert.ok(longestWord == 'Coding', 'Passed!');
});


QUnit.test('Return replaced letter string. Replace each letter with subsequent letter. Then capitalize every vowel. Having defined array to index search', function (assert) {


  function ReplaceLetter(input) {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let output = '';

    function GetLetter(letter) {
      letter = alphabet.substr(alphabet.indexOf(letter) + 1, 1);
      if (vowels.indexOf(letter) > -1) {
        letter = letter.toUpperCase();
      }
      return letter;
    }

    let arr = input.split('');

    arr.forEach((item) => {
      let subsequentLetter = item.toLowerCase();
      if (item.match(/[a-z]+/gi)) {
        subsequentLetter = GetLetter(item);
      }
      output += subsequentLetter;
    });

    return output;
  }

  assert.ok(ReplaceLetter('hello*3') == 'Ifmmp*3', 'Passed!');
  assert.ok(ReplaceLetter('fun times!') == 'gvO Ujnft!', 'Passed!');
});


QUnit.test('Return replaced letter string. Replace each letter with subsequent letter. Then capitalize every vowel. Using character codes', function (assert) {

  function ReplaceLetter(str) {
    var converted = str.replace(/[a-z]/gi, function (char) {
      return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
    });

    // we have now successfully converted each letter to the letter following it
    // in the alphabet, and all we need to do now is capitalize the vowels
    var capitalized = converted.replace(/a|e|i|o|u/gi, function (vowel) {
      return vowel.toUpperCase();
    });

    // return the final string
    return capitalized;
  }

  assert.ok(ReplaceLetter('hello*3') == 'Ifmmp*3', 'Passed!');
  assert.ok(ReplaceLetter('fun times!') == 'gvO Ujnft!', 'Passed!');
});


QUnit.test('Return sum. Add up all the numbers from 1 to input value. Using for loop', function (assert) {

  function Execute(input) {
    let output = 0;
    for (let i = 1; i <= input; i++) {
      output += i
    }
    return output;
  }

  assert.ok(Execute(4) == 10, 'Passed!');
  assert.ok(Execute(140) == 9870, 'Passed!');
});


QUnit.test('Return sum. Add up all the numbers from 1 to input value. Using recursion', function (assert) {

  function Execute(input) {
    if (input === 1) {
      return 1
    } else {
      return input + Execute(input - 1)
    }
  }

  assert.ok(Execute(4) == 10, 'Passed!');
  assert.ok(Execute(140) == 9870, 'Passed!');
});


QUnit.test('Return each word captialized. For loop.', function (assert) {

  function Execute(input) {
    let arr = input.split(' ');

    for (let i = 0; i < arr.length; i++) {
     let char = arr[i].split('')[0];
     arr[i] = arr[i].replace(char, char.toUpperCase());
    }

    return arr.join(' ');
  }

  assert.ok(Execute('hello world') == 'Hello World', 'Passed!');
  assert.ok(Execute('i ran there') == 'I Ran There', 'Passed!');
});


QUnit.test('Return each word captialized. Regex.', function (assert) {

  function Execute(input) {
    return input.replace(/\b[a-z]/gi, (char) => { 
      return char.toUpperCase();
    });
  }

  assert.ok(Execute('hello world') == 'Hello World', 'Passed!');
  assert.ok(Execute('i ran there') == 'I Ran There', 'Passed!');
});

