// Tests based on the following sources
// CoderByte https://coderbyte.com
QUnit.test('Return the first factorial. Reverse Loop', function (assert) {

  function Execute(input) {
    var output = input;
    for (var i = input; i >= 1; i--) {
      if (i !== 1) {
        output = output * (i - 1)
      }
    }

    return output;
  }
  assert.ok(Execute(4) == 24, 'Passed!');
  assert.ok(Execute(8) == 40320, 'Passed!');
});

QUnit.test('Return the first factorial. Forward Loop w/ Reduce', function (assert) {

  function Execute(input) {
    var arr = [];
    for (let i = 1; i <= input; i++) {
      arr.push(i);
    }
    return arr.reduce((a, b) => a * b);
  }
  assert.ok(Execute(4) == 24, 'Passed!');
  assert.ok(Execute(8) == 40320, 'Passed!');
});

QUnit.test('Return the first factorial. Recursion', function (assert) {

  function Execute(input) {
    if (input === 0 || input === 1) {
      return 1;
    }
    else {
      return input * Execute(input - 1);
    }
  }
  assert.ok(Execute(4) == 24, 'Passed!');
  assert.ok(Execute(8) == 40320, 'Passed!');
});


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


/* Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an
  acceptable sequence by either returning the string true or false. The str parameter will be composed
  of + and = symbols with several characters between them (ie. ++d+===+c++==a) and for the string to be
  true each letter must be surrounded by a + symbol. The string will not be empty and will have at least one letter. 
*/

QUnit.test('Return truthy if string validates.', function (assert) {

  function Execute(input) {

    if (/^[a-z]/gm.test(input) || /[a-z]$/gm.test(input)) {
      return false;
    } else if (/[^+][a-z]/gm.test(input) || /[a-z][^+]/gm.test(input)) {
      return false;
    }
    else {
      return true;
    }
  }

  assert.ok(Execute('+d+=3=+s+') == true, 'Passed!');
  assert.ok(Execute('f++d+') == false, 'Passed!');
});


QUnit.test('Return string if for condition num2 > num1 || num1 === num2', function (assert) {

  function Execute(num1, num2) {

    if (num2 > num1) {
      return "true"
    } else if (num1 === num2) {
      return "-1"
    }

    return "false";
  }

  assert.ok(Execute(3, 122) == "true", 'Passed!');
  assert.ok(Execute(67, 67) == "-1", 'Passed!');
});


/* 
Have the function TimeConvert(num) take the num parameter being passed and 
return the number of hours and minutes the parameter converts to 
(ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 
*/

QUnit.test('Return the number of hours and minutes the parameter converts to without trailing zero.', function (assert) {

  function Execute(num) {
    let conversion = (num / 60).toString().split('.');
    return (conversion[0] + ":" + (conversion[1] * 60).toString().replace(/0/g, ''))
  }

  assert.ok(Execute(126) == "2:6", 'Passed!');
  assert.ok(Execute(45) == "0:45", 'Passed!');
});


QUnit.test('Return the number of hours and minutes the parameter converts to without trailing zero using Math.floor and Modulus', function (assert) {

  /*   If the operands are numbers, regular arithmetic division is performed, and the remainder of that division is returned.
    If the dividend is Infinity or the divisor is 0, the result is NaN.
    If Infinity is divided by Infinity, the result is NaN.
    If the divisor is an infinite number, the result is the dividend.
    If the dividend is 0, the result is 0.
   */

  function Execute(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;

    return hours + ":" + minutes;
  }

  assert.ok(Execute(126) == "2:6", 'Passed!');
  assert.ok(Execute(45) == "0:45", 'Passed!');
});


QUnit.test('Return the string in alphabetic order', function (assert) {

  function Execute(str) {
    return str.split('').sort().join('')
  }

  assert.ok(Execute("coderbyte") == "bcdeeorty", 'Passed!');
  assert.ok(Execute("hooplah") == "ahhloop", 'Passed!');
});


/*
  Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number),
  and subtract the smaller number from the bigger number. Then repeat the previous step.
  Performing this routine will always cause you to reach a fixed number: 6174. Then performing 
  the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return
  the number of times this routine must be performed until 6174 is reached. 
  For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. 
*/

QUnit.test('Return Kaprekar\'s Constant', function (assert) {

  var iteration = 0;
  function Calculate(num) {
    iteration = iteration + 1;
    num = num.toString().split('').sort();
    var asc = num.join('')
    var desc = num.reverse().join('');
    var smallest = asc > desc ? desc : asc;
    var largest = asc < desc ? desc : asc;


    return parseInt(largest, 10) - parseInt(smallest, 10);
  }

  function Execute(num) {
    /*     if (num !== 6174) {
          Execute(Calculate(num));
        } 
        console.log(iteration);
        return iteration; */


    // top solution on codebyte
    const KAP = 6174;
    var count = 0;
    while (true) {
      var num = evaluator(num)
      if (num === true) {
        return count;
      }
    }

    function evaluator(num) {
      count++
      var minNumArr = num.toString().split('').sort();
      var maxNumArr = minNumArr.slice(0).reverse();
      var littleNum = parseInt(minNumArr.join(''), 10);
      var bigNum = parseInt(maxNumArr.join(''), 10);
      while (bigNum < 1000) {
        bigNum = bigNum * 10;
      }

      return bigNum - littleNum === KAP ? true : bigNum - littleNum;
    }
  }

  assert.ok(Execute(2345) == 3, 'Passed!');
  assert.ok(Execute(2111) == 5, 'Passed!');
});




/* 
  Have the function QuestionsMarks(str) take the str string parameter,
  which will contain single digit numbers, letters, and question marks,
  and check if there are exactly 3 question marks between every pair of
  two numbers that add up to 10. If so, then your program should return
  the string true, otherwise it should return the string false. If there
  aren't any two numbers that add up to 10 in the string, then your program
  should return false as well.

  For example: if str is "arrb6???4xxbl5???eee5" then your program should return
  true because there are exactly 3 question marks between 6 and 4, and 3 question
  marks between 5 and 5 at the end of the string.
 */

QUnit.test('string manipulation, searching, hash table', function (assert) {

  function Execute(str) {
    var t = /\?{3}?/.test(str);
    if (/\?{3}?/.test(str)) {
      var arr = str.split('???');

      console.log(arr)
      for (let i = 0; i < arr.length; i++) {
        if(i % 2){
          var x = arr[i].split('');
          x.forEach(e => {
            
            if(/[0-9]/.test(e)){
              console.log(e)
            }
          });

          console.log(parseInt(x))
        }
   
        
      }

      return true;
    } else {
      return false;
    }


    console.log(t)

    return null;
  }

  //assert.ok(Execute('aa6?9') == false, 'Passed!');
  //assert.ok(Execute('acc?7??sss?3rr1??????5') == true, 'Passed!');
  assert.ok(Execute('arrb6???4xxbl5???eee5') == true, 'Passed!');

});


/* 
  Have the function ChessboardTraveling(str) read str which will be a string
  consisting of the location of a space on a standard 8x8 chess board with
  no pieces on the board along with another space on the chess board.
  The structure of str will be the following: "(x y)(a b)" where (x y)
  represents the position you are currently on with x and y ranging 
  from 1 to 8 and (a b) represents some other space on the chess board
  with a and b also ranging from 1 to 8 where a > x and b > y. 
  Your program should determine how many ways there are of traveling 
  from (x y) on the board to (a b) moving only up and to the right. 
  
  For example: if str is (1 1)(2 2) then your program should output 2 
  because there are only two possible ways to travel from space (1 1) 
  on a chessboard to space (2 2) while making only moves up and to the right. 
 
  */



QUnit.test('Chessboard', function (assert) {

  function Execute(num) {

  }

  //assert.ok(Execute('(1 1)(3 3)') == 6, 'Passed!');
  //assert.ok(Execute('(2 2)(4 3)') == 3, 'Passed!');
});
