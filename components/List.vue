<template>
  <div class="list-container">
    <slot
      v-for="(elem, index) in todos"
      :content="elem"
      :remove="removeElement(index)"
      :setProp="setElementProp(index)"
    />
  </div>
</template>

<script>
export default {
	computed: {
		todos() {
			const cb = (prev, next) => {
				
				if (prev.deadline === next.deadline) {
					return prev.description.localCompare(next.description);
				}

				return prev.deadline - next.deadline;
			};

			this.$store.commit('todos/sortTodos', { cb });
			
			return this.$store.getters['todos/entity'];
		}
	},
	methods: {
		removeElement(index) {
			return () => this.$store.commit('todos/removeByIndex', { index });
		},
		setElementProp(index) {
			return (name, prop) => {
				this.$store.commit('todos/setTodoProp', { name, prop, index });
			};
		},
	},
};
</script>

<style scoped>
.list-container {
	display: flex;
	flex-direction: column;
	width: 100%;
}
</style>
