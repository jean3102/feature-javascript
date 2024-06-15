const users = [
	{ name: 'John', age: 30 },
	{ name: 'Jane', age: 25 },
	{ name: 'Bob', age: 40 },
];

// a-b is ascending  and b-a is descending
const sortByTypeNumbers = users.toSorted((a, b) => a.age - b.age);
const sortByTypeString = users.toSorted((a, b) => a.name.localeCompare(b.name));

export { sortByTypeNumbers, sortByTypeString };
