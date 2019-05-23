<template>
  <div class="home-page display-1">
    <h1 class="display-2 font-weight-bold">
      Fabien's awesome todos
    </h1>
    <div class="todo-list">
      <v-checkbox
        v-model="byStatus"
        label="remove done"
      />
      <List :list="todos">
        <Todo
          slot-scope="content"
          v-bind="content"
        />
      </List>
      <add-todo class="add-todo" />
    </div>
  </div>
</template>

<script>
import List from '../components/List';
import Todo from '../components/Todo';
import AddTodo from '../components/AddTodo';

export default {
	components: {
		List,
		Todo,
		AddTodo,
	},
	data() {
		return {
			byStatus: false,
		};
	},
	computed: {
		todos() {
			const cb = (prev, next) => {
				if (prev.deadline === next.deadline) {
					return prev.description.localCompare(next.description);
				}

				return prev.deadline - next.deadline;
			};

			this.$store.commit('todos/sortTodos', { cb });
			
			if (this.byStatus) {
				return this.$store.getters['todos/entity'].filter(elem => elem.status === 'todo');
			}

			return this.$store.getters['todos/entity'];
		}
	}
};
</script>

<style scoped>
.add-todo {
	margin-top: 20px;
}

h1 {
	color: white;
}

.home-page {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.todo-list {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
