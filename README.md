# ECMAScript 2025 (ES2025) Readme

Here I leave you some of the most interesting developments in javascript 2025

## Overview
ECMAScript 2025 (ES2025) is the next iteration of the ECMAScript standard, building upon the features introduced in ECMAScript 2024. This new edition aims to further enhance the language with additional features, optimizations, and improvements to empower developers to write more expressive and efficient code.


## New Features

- [Object.groupBy()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)

    The returned object has separate properties for each group.

``` 
const employees = [
    {
        name: "Alice Smith",
        department: "Engineering",
        title: "Software Engineer",
        employeeId: "E001"
    },
    {
        name: "Bob Johnson",
        department: "Marketing",
        title: "Marketing Manager",
        employeeId: "M002"
    },
    {
        name: "Charlie Brown",
        department: "Sales",
        title: "Sales Representative",
        employeeId: "S003"
    },
    {
        name: "David Lee",
        department: "Human Resources",
        title: "HR Specialist",
        employeeId: "HR004"
    }
];
const groupBy = Object.groupBy(employees, employee => employee.department)

console.log(groupBy)

```
 - [at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

    when you use method .at you can pass negative values ​​to   access array of elements.

 ```
const numbers = [1, 2, 3, 4, 5];
const at = numbers.at(-1);
console.log(at)
 ```
 
 - [toReversed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)

    It returns a new array with the elements in reversed order.

 ```
const array = [1, 2, 3, 4, 5];

const reversed = array.toReversed();
console.log(reversed);
 ```

