// **Bài 1
// Cách 1
square = (a) => {
  return a * a;
};
// console.log(square(4));

// Cách 2
square = (a) => a * a;
// console.log(square(6));

// **Bài 2
// Cách 1
findText = (stringText, text) => {
  if (stringText.includes(text) === true) {
    return console.log(true);
  } else {
    console.log(false);
  }
};
// findText("hello world","world")

// Cách 2
findTextString = (stringText, wordText) => {
  const array1 = stringText.split(" ");
  console.log(array1);
  console.log(wordText);

  for (let i = 0; i <= stringText.length; i++) {
    if (array1[i] === wordText) {
      console.log(true);
      return;
    }
  }
};
findTextString("hello world", "world");

// **Bài 3
let array = ["Một", "Hai", "Ba"];
addPrefix = (array, prelex) => {
  let add = [];
  for (let i = 0; i < array.length; i++) {
    add.push(`${prelex}: ${array[i]}`);
  }
  console.log(add);
};

addPrefix(array, "Number"); // ['Number: Một', 'Number: Hai', 'Number: Ba']


// ** Bài 4
const series = [2, 3, 4];
doubleNumber = (series)=> {
  let result = [];
  for (let i = 0; i < series.length; i++) {
    let a = series[i]*2;
    
    result.push(a)
  }
  console.log(result);
}

doubleNumber(series) // [4, 6, 8]


// ** Bài 5

const arry = [1, 2, 3, 4, 5,6, 7];
filterNumber = (arry)=> {
  let result = [];
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] % 2 !== 0) {
      result.push(arry[i])
    }
    
  }
  console.log(result);
}

filterNumber(arry) // [1, 3, 5, 7]