# ECMAScript 2025 (ES2025)

Here I leave you some of the most interesting developments in javascript 2025

## Overview

ECMAScript 2025 (ES2025) is the next iteration of the ECMAScript standard, building upon the features introduced in ECMAScript 2024. This new edition aims to further enhance the language with additional features, optimizations, and improvements to empower developers to write more expressive and efficient code.

## Requirements

To run this project, you must ensure you have **Node.js version 21 or higher** installed. Some features of the project depend on the enhancements and fixes available in these recent versions of Node.js.

1. **Check the Node.js version**
   ```
   node -v
   ```

2. **Clone repository**

   ```
   git clone https://github.com/jean3102/feature-javascript.git

   ```
3. **Access the folder**

   ```
   cd feature-javascript

   ```
3. **Run app**

```
  npm run dev
```

Then go to the `app.js` file and comment out what you want to test

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

  when you use method .at you can pass negative values ​​to access array of elements.

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

- [with()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with)

  The with() returns a new array with the element at the given index replaced with the given value.

```
   const todoList = [
       {
           id: 1,
           title: 'Learn JavaScript',
           completed: false,
       },
       {
           id: 2,
           title: 'Build a Todo App',
           completed: true,
       },
       {
           id: 3,
           title: 'Deploy the App',
           completed: false,
       },
   ];

   const completeTodo = (id) => {
       const index = todoList.findIndex((todo) => todo.id === id);
       if (index === -1) return 'todo not found';

       const originalTodo = todoList[index];

       if (originalTodo.completed) return 'todo already completed';
       return todoList.with(index, { ...originalTodo, completed: true });
   };

   const withResult = completeTodo(1);
   console.log(withResult);

```

- [findLast()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)

  Iterates the array in reverse order and returns the value of the first element that satisfies

```
   const array = [10, 52, 74, 58, , 85, 96];

   const findLast = array.findLast((element) => element === 58);
   console.log(findLast);

```

- [findLastIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)

  iterates the array in reverse order and returns the index of the first elemen

```
    const users = [
        {
            id: 1,
            name: 'John Doe',
            username: 'johndoe',
            email: 'john.doe@example.com',
        },
        {
            id: 2,
            name: 'Jane Doe',
            username: 'janedoe',
            email: 'jane.doe@example.com',
        },
        {
            id: 3,
            name: 'Alice Smith',
            username: 'alicesmith',
            email: 'alice.smith@example.com',
        },
    ];

    const findLastIndex = users.findLastIndex((user) => user.id === 2);
    console.log(findLastIndex);

```
