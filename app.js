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
// Viết arrow function thêm một tiền tố vào mỗi phần tử của một mảng chuỗi
// - Input: Mảng chuỗi: ["one", "two", "three"], Tiền tố: "number: "
// - Output: function(["one", "two", "three"], ’number’)
//             -> ["number: one", "number: two", "number: three"]

// Cách 1
let array = ["Một", "Hai", "Ba"];
addPrefix = (array, prelex) => {
  let add = [];
  for (let i = 0; i < array.length; i++) {
    add.push(`${prelex}: ${array[i]}`);
  }
  console.log(add);
};

addPrefix(array, "Number"); // ['Number: Một', 'Number: Hai', 'Number: Ba']

// Cách 2
let array1 = ["Một", "Hai", "Ba"];
const prelex = ["Number:"];
let add1 = [];
array1.forEach((item) => item && add1.push(`${prelex} ${item}`));
console.log(add1);

// ** Bài 4
// - Input: [1, 2, 3, 4]
// - Output: [2, 4, 6, 8]

// Cách 1
const series = [2, 3, 4];
doubleNumber = (series) => {
  let result = [];
  for (let i = 0; i < series.length; i++) {
    let a = series[i] * 2;
    result.push(a);
  }
  console.log(result);
};

doubleNumber(series); // [4, 6, 8]

// Cách 2

const series1 = [2, 3, 4, 5, 6];
doubleNumber1 = series1.map((item) => item * 2);
console.log(doubleNumber1); // [4, 6, 8, 10, 12]

// ** Bài 5
// Input: [1, 2, 3, 4, 5, 6]
// Output: [1, 3, 5]

// Cách 1
const arry = [1, 2, 3, 4, 5, 6, 7];
filterNumber = (arry) => {
  let result = [];
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] % 2 !== 0) {
      result.push(arry[i]);
    }
  }
  console.log(result);
};
filterNumber(arry); // [1, 3, 5, 7]

// Cách 2: Sử dụng fitler
const arry1 = [1, 2, 3, 4, 5, 6, 7];
filterNumber1 = arry1.filter((item) => item % 2 !== 0);
console.log(filterNumber1); // [1, 3, 5, 7]
// Cách 3
console.log(
  "filterNumber",
  arry1.filter((item) => item % 2 !== 0)
);

// **Bài 6
// Tính tổng số công làm việc của các nhân viên

const employees = [
  { id: 1, name: "John", workingDays: 22 },
  { id: 2, name: "Jane", workingDays: 20 },
  { id: 3, name: "Mark", workingDays: 25 },
];

// cách 1
total = () => {
  let result = 0;
  for (let i = 0; i < employees.length; i++) {
    result += employees[i].workingDays;
  }
  console.log(result);
};
total();

// Cách 2

let sum = 0;
console.log(
  "Tổng ngày công: ",
  employees.reduce((value, item) => value + item.workingDays, sum)
);

// **

let fruits = ["Apple", "Banana", "Cherry"];

// filter
fruits.filter((item) => {
  if (item.toLocaleLowerCase() == "apple") {
    console.log(true);
  }
});

// find()
let numbers = [5, 10, 15, 20, 25];

let findDivisibleByTen = numbers.find((item) => item % 10 === 0);
console.log(findDivisibleByTen); // Số 10 trong chuỗi number là số chia hết ch0 10

// findIndex
let findIndex = numbers.findIndex((item) => item % 10 === 0);
console.log(findIndex); // 1 : Vị trí number[1] là số chia hết cho 10

// *** Bài 7
// Tìm nhân viên có mức lương cao nhất và trả về thông tin của họ

const listEmployees = [
  { id: 1, name: "John", salary: 2000 },
  { id: 2, name: "Jane", salary: 2500 },
  { id: 3, name: "Mark", salary: 3000 },
];

// Hàm sắp xếp từ nhỏ đến lớn
const compare = (a, b) => {
  return b - a;
};

const sortSalaryMax = listEmployees.sort((a, b) => compare(a.salary, b.salary));
if (sortSalaryMax.length > 0) {
  console.log(sortSalaryMax[0]);
}

// *** Bài 8
// Tìm nhân viên làm việc chăm chỉ nhất (công cao nhất)
// công = (workingDays - lateDays)

const listEmployees1 = [
  { id: 1, name: "John", workingDays: 22, lateDays: 2 },
  { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
  { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
];
console.log(
  listEmployees1.sort((a, b) =>
    compare(a.workingDays - a.lateDays, b.workingDays - b.lateDays)
  )
);

const sortWorkingDayMax = listEmployees1.sort((a, b) =>
  compare(a.workingDays - a.lateDays, b.workingDays - b.lateDays)
);
if (sortWorkingDayMax.length > 0) {
  console.log(sortWorkingDayMax[0]);
}

// ***Bài 9
// Tạo một hàm để nhóm các nhân viên theo tên và trả về một object với tên của nhân viên là key và danh sách các nhân viên có cùng tên đó là value

const employees9 = [
  { id: 1, name: "John", salary: 2000 },
  { id: 2, name: "Jane", salary: 2500 },
  { id: 3, name: "Mark", salary: 3000 },
  { id: 4, name: "John", salary: 2200 },
];

function groupByName(employees) {
  return employees9.reduce((keyName, employee) => {
    let { name } = employee;
    // console.log("name: " + name);
    if (!keyName[name]) {
      keyName[name] = [];
    }
    keyName[name].push(employee);
    return keyName;
  }, {});
}

const result = groupByName(employees9);
console.log(result);


{
// ***Bài 10
// Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về số công làm việc, số công đi làm muộn và mức lương của nhân viên.
// Tính hiệu suất của mỗi nhân viên bằng cách chia số ngày làm việc cho mức lương, sau đó tìm nhân viên có hiệu suất cao nhất và trả về thông tin của họ.
// hiệu suất = workingDays / salary
// - Output: { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 }

{
// Cách 1
const employees10 = [
  { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
  { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
  { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
];

const { workingDays, salary } = employees10;
const compare10 = (a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
};
const sortEfficiency = employees10.sort((a, b) =>
  compare10(a.workingDays / a.salary, b.workingDays / b.salary)
);
console.log(sortEfficiency);

console.log(sortEfficiency[0]);
}


{
  // Cách 2 - Bài của bạn Dũng
  const employees = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
  ];

  function checkPerformances(employees) {
    let tmp = 0;
    return employees.reduce((acc, employee) => {
      let { workingDays, salary } = employee;
      let performance = workingDays / salary;

      if (performance > tmp) {
        acc = employee;
        tmp = performance;
      }
      return acc;
    }, {});
  }
  let result = checkPerformances(employees);
  console.log(result);
}
}

{
// ***Bài 11
// Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về số công làm việc của nhân viên. Tạo một biểu đồ phân bố số công làm việc (histogram) trong đó mỗi mốc là số công làm việc, và số lượng nhân viên nằm trong mốc đó.
// - Output: {
//   "20": 2,
//   "22": 2,
//   "24": 1
// }

const employees = [
    { id: 1, name: "John", workingDays: 20 },
    { id: 2, name: "Jane", workingDays: 22 },
    { id: 3, name: "Mark", workingDays: 20 },
    { id: 4, name: "Sam", workingDays: 24 },
    { id: 5, name: "Lucy", workingDays: 22 },
];

function histogarmWorkingdays(employees) {
  return employees.reduce((arr, employee) => {
    let count = 0;
    let { workingDays } = employee;
    if(!arr[workingDays]){
      arr[workingDays]=[];
    }
    arr[workingDays].push(employee);

    return arr;
  },{}
)}
const result = histogarmWorkingdays(employees);
console.log(result);

{
  const employees = [
    { id: 1, name: "John", workingDays: 20 },
    { id: 2, name: "Jane", workingDays: 22 },
    { id: 3, name: "Mark", workingDays: 20 },
    { id: 4, name: "Sam", workingDays: 24 },
    { id: 5, name: "Lucy", workingDays: 22 },
  ];

  function getHistogram(employees) {
    return employees.reduce((obj, employee) => {
      let { workingDays } = employee;
      if (!obj[workingDays]) {
        obj[workingDays] = 0;
      }
      obj[workingDays]++;
      return obj;
    }, {});
  }
  let result = getHistogram(employees);
  console.log(result);
}
}

