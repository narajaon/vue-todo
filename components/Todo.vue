<template>
  <div class="todo-container">
    <div class="todo">
      <v-chip
        class="todo-chip"
        :close="true"
        text-color="#424242"
        @input="remove"
        @click="setProp('status', content.status === 'done' ? 'todo' : 'done')"
      >
        <v-avatar>
          <v-icon
            color="green"
            light
            medium
          >
            {{ content.status === 'done' ? 'check_circle_outline' : '' }}
          </v-icon>
        </v-avatar>
				
        <div class="content subheading font-weight-medium text-truncate">
          {{ content.description }}
        </div>
      </v-chip>
    </div>
    <div class="date">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            :value="dateFormatted"
            prepend-icon="event"
            readonly
            hide-details
            v-on="on"
          />
        </template>
        <v-date-picker
          v-model="date"
          no-title
          show-current
          @input="menu = false"
        />
      </v-menu>
    </div>
  </div>
</template>

<script>
import {
	VChip,
	VAvatar,
	VDatePicker,
} from 'vuetify/lib';

export default {
	components: {
		VChip,
		VAvatar,
		VDatePicker,
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
		},
		setProp: {
			type: Function,
			required: true,
		}
	},
	data: () => ({
		menu: false,
	}),
	computed: {
		dateFormatted() {
			return this.formatDate(this.date);
		},
		date: {
			get() {
				return this.content.deadline.toISOString().substr(0, 10);
			},
			set(val) {
				this.setProp('deadline', new Date(val));
			},
		}
	},
	methods: {
		formatDate(date) {
			const [year, month, day] = date.split('-');
			
			return `${day}/${month}/${year}`;
		},
		parseDate(date) {
			const [day, month, year] = date.split('/');
			
			return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
		}
	}
};
</script>
<style scoped>
.v-chip {
	width: 100%;
	height: fit-content;
}

.v-chip >>> .v-chip__content {
	display: flex;
	width: 100%;
	justify-content: space-between;
}

.v-text-field {
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;
}

.v-text-field >>> input {
	margin: 0;
	padding: 0;
}

.v-input >>> .v-input__slot {
	margin: 0;
}

.todo {
	display: flex;
	width: 50%;
}

.todo-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
