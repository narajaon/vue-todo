<template>
  <div class="list-container">
    <slot
      v-for="(elem, index) in todos"
      :content="elem"
      :remove="removeElement(index)"
      :toggleStatus="toggleElementStatus(index)"
    />
  </div>
</template>

<script>
export default {
	computed: {
		todos() {
			return this.$store.getters['todos/entity'];
		}
	},
	methods: {
		removeElement(index) {
			return () => this.$store.commit('todos/removeByIndex', { index });
		},
		toggleElementStatus(index) {
			return (status) => {
				const newStatus = status === 'done' ? 'todo' : 'done';
				this.$store.commit('todos/setTodoProp', { name: 'status', prop: newStatus, index });
			};
		}
	},
};
</script>

<style scoped>
.list-container {
	display: flex;
	flex-direction: column;
}
</style>
