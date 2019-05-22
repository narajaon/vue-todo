import Vue from 'vue';

export const state = () => ({
	todos: [
		{
			description: 'Todo',
			deadline: new Date(),
			status: 'DONE',
		},
		{
			description: 'Coco',
			deadline: new Date(),
			status: 'TODO',
		},
		{
			description: 'Coc',
			deadline: new Date(),
			status: 'DONE',
		}
	],
});

export const getters = {
	entity: state => state.todos,
	byIndex: state => index => state.grid[index],
	byDeadline: state => cb => state.todos.sort(cb),
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
};