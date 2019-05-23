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
			return this.$store.getters['todos/byDate'];
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
