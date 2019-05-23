export const state = () => ({
	todos: [
		{
			description: 'Shopping',
			deadline: new Date(),
			status: 'done',
		},
		{
			description: 'Running',
			deadline: new Date(),
			status: 'todo',
		},
		{
			description: 'Coding',
			deadline: new Date(),
			status: 'done',
		}
	],
});

export const getters = {
	entity: state => state.todos,
	byIndex: state => index => state.grid[index],
	byStatus: state => status => state.todos.filter(elem => elem.status === status),
	byDescription: state => input => state.todos.filter(elem => elem.description.includes(input))
};

export const mutations = {
	removeByIndex: (state, { index }) => {
		state.todos.splice(index, 1);
	},
	removeByStatus: (state, { status }) => state.grid.forEach((element, i) => {
		if (element.status === status) {
			state.grid.splice(i, 1);
		}
	}),
	setTodoProp: (state, { name, prop, index }) => {
		state.todos[index][name] = prop;
	},
	addNewTodo: (state, { description, status }) => {
		state.todos.push({ description, deadline: new Date(), status });
	},
	sortTodos: (state, { cb }) => {
		state.todos.sort(cb);
	},
};