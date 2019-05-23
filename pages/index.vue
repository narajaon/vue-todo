<template>
  <div class="home-page display-1">
    <h1 class="display-2 font-weight-bold">
      Fabien's awesome todos
    </h1>
    <div class="todo-list">
      <List>
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
};
</script>

<style scoped>
.add-todo {
	margin-top: 20px;
}

h1 {
	color: white;
	margin-bottom: 20px;
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
