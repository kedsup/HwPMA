'use strict';

function first() {
  const n = Number(prompt('Number n'));
  const m = Number(prompt('Number m'));

  let output = '';

  if (isNaN(n, m)) {
    alert('Not a number');
  } else {
    for (let i = n + 1; i < m; i++) {
      output += i + '; ';
    }
  }
  alert(output);
}

function second() {
  const n = prompt('base');
  const m = prompt('power');

  if (isNaN(n, m)) {
    alert('Not a number');
  } else {
    const pow = (base, exp = 2) => {
      if (exp === 1) return base;
      else return pow(base, exp - 1) * base;
    };

    alert(pow(n, m));
  }
}

// // FUNCTION EXPRESSION
//   if (isNaN(n, m)) {
//     alert('Your values are not numbers');
//   } else {
//     function pow1(base, exp) {
//       let result = 1;

//       for (let i = 0; i < exp; i++) {
//         result *= base;
//       }
//       return result;
//     }

//     alert(`${n} raised to the power of ${m} is equal to ${pow1(n, m)}`);
//   }
// }

function third() {
  const n = Number(prompt('Enter first float number'));
  const m = Number(prompt('Enter second float number'));

  if (isNaN(n, m)) {
    alert('Not a number');
  } else {
    const func = arg => Math.round(arg * 0.3);

    alert(
      `${n} * 0.3 ≈ ${func(n)} \n${m} * 0.3 ≈ ${func(
        m
      )}`
    );
  }
}

function fourth() {
  const input1 = Number(prompt('Enter the min number'));
  const input2 = Number(prompt('Enter the max number'));

  function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  alert(
    `Random number from ${input1} to ${input2} is ${randomInt(
      input1,
      input2
    )}`
  );
}
