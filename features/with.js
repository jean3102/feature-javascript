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

export const withResult = completeTodo(2);
