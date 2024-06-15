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
 
 - [toSorted()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)

    The toSorted() method of Array instances is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.
    
 ```
const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 40 }
];

// a-b is ascending  and b-a is descending
const sortByTypeNumbers = users.toSorted((a, b) => a.age - b.age);
const sortByTypeString = users.toSorted((a, b) => a.name.localeCompare(b.name));

console.log(sortByTypeString)
console.log(sortByTypeNumbers)

 ```
 
 - [toSpliced()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)

    The toSpliced() method of Array instances is the copying version of the splice() method. It returns a new array with some elements removed and/or replaced at a given index.

 ```
const fruits = ['🍎', '🍌', '🍒', '🍇', '🍊', '🍍'];

const index = 2;
const deleteCount = 1;
const newElement = '🍉';

export const tospliced = fruits.toSpliced(index, deleteCount, newElement);
console.log(tospliced);

 ```

