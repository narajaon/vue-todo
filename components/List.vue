<template>
  <div class="list-container">
    <slot
      v-for="(elem, index) in todos"
      :content="elem"
      :remove="removeElement(index)"
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
		}
	},
};
</script>

<style>
.list-container {
	display: flex;
	flex-direction: column;
}
</style>
