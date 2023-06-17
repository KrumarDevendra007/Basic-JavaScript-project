/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr
    .filter((employee) => employee.profession === "developer")
    .map((employee) => console.log(employee));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susano", age: "20", profession: "intern"};
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((item) => item.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray = [
    { id: 4, name: "akash", age: "21", profession: "tester"},
    { id: 5, name: "rohit", age: "23", profession: "analyst"},
    { id: 6, name: "virat", age: "24", profession: "manager"},
  ];

  // Concatenate two arrays
  let concatenateArray = arr.concat(newArray);

  console.log(concatenateArray);
}
