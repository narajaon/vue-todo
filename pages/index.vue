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
    </div>
  </div>
</template>

<script>
import List from '../components/List';
import Todo from '../components/Todo';

export default {
	components: {
		List,
		Todo,
	},
};
</script>

<style>
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
}
</style>
