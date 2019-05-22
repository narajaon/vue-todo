<template>
  <v-chip
    class="todo"
    :close="true"
  >
    <div class="content">
      {{ content.description }}
      {{ content.status }}
    </div>
  </v-chip>
</template>

<script>
import {
	VChip
} from 'vuetify/lib';

export default {
	components: {
		VChip,
	},
	props: {
		content: {
			validor(obj) {
				return obj.description && obj.deadline && obj.status;
			},
			type: Object,
			required: true,
		},
		remove: {
			type: Function,
			required: true,
		}
	}
};
</script>
<style>
span.v-chip__content {
	display: flex;
	width: 100%;
	justify-content: space-between;
}
</style>
