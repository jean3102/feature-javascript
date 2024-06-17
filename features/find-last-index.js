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

export const findLastIndex = users.findLastIndex((user) => user.id === 2);
