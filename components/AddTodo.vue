<template>
  <div class="add-todo">
    <v-text-field
      v-if="addMode"
      v-model="newTodo"
      :value="dateFormatted"
      hide-details
    />

    <div class="controls">
      <v-btn
        v-if="addMode"
        color="red"
        round
        depressed
        @click="cancelAdd"
      >
        <v-icon
          color="white"
        >
          cancel
        </v-icon>
      </v-btn>

      <v-btn
        color="green"
        round
        depressed
        @click="toggleAddMode"
      >
        <v-icon
          color="white"
        >
          {{ addMode ? 'save' : 'add' }}
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import {
	VBtn,
} from 'vuetify/lib';

export default {
	components: {
		VBtn,
	},
	data() {
		return {
			addMode: false,
			newTodo: '',
		};
	},
	methods: {
		toggleAddMode() {
			if (this.addMode && this.newTodo.trim()) {
				this.$store.commit('todos/addNewTodo', { description: this.newTodo, status: 'todo' });
				this.newTodo = '';
			}
			this.addMode = !this.addMode;
		},
		cancelAdd() {
			this.addMode = false;
			this.newTodo = '';
		},
	}
};
</script>

<style scoped>
.add-todo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.controls {
}
</style>
