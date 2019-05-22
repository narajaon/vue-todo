<template>
  <div>
    <List
      :list="todos"
      :remove="removeElement"
    >
      <Todo
        slot-scope="content"
        v-bind="content"
      />
    </List>
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
	computed: {
		todos() {
			return this.$store.getters['todos/entity'];
		}
	},
	methods: {
		removeElement(index) {
			this.$store.commit('todos/removeByIndex', { index });
		}
	}
};
</script>
