import Vue from 'vue';

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
	byDate: state => {
		const cpy = state.todos.map(e => e);
		
		return cpy.sort((prev, next) => prev.deadline - next.deadline);
	},
	byIndex: state => index => state.grid[index],
	byDeadline: state => cb => {
		const cpy = state.todos.map(e => e);
		
		return cpy.sort(cb);
	},
	byStatus: state => status => state.todos.filter(elem => elem.status === status),
	byDescription: state => input => state.todos.filter(elem => elem.description.includes(input))
};

export const mutations = {
	removeByIndex: (state, { index }) => {
		state.todos.splice(index, 1);
	},
	// To test
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
	}
};