
function first() {
  let str1 = prompt("Enter first setence");
  let str2 = prompt("Enter second sentence");

  const regexp = new RegExp(str2, "g", "i");

  const array = [...str1.matchAll(regexp)];

  let output = `Amount of matches ${array.length}`;
  output += array.length
    ? `:\nindexes: ${array
        .map((rep) => rep["index"])
        .join(", ")}` : " (zero) matches";
        
  alert(output);
}

function second() {
  const num = (
    'ECMAScript 2015 (6th Edition, ECMA-262)'.replace(/\D+/g, ' ')
  ).split(' ');
  
  let output = [];

  num.filter(String).forEach(x => output.push(Number(x)));

  console.log(output);
}

function third() {
  const upCase = String(
    'ECMAScript 2015 (6th Edition, ECMA-262)'.match(/[A-Z]/g)
  );
  console.log(upCase);
}
