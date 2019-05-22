<template functional>
  <div>
    {{ props.content }}
  </div>
</template>

<script>
export default {
	props: {
		content: {
			validor(obj) {
				return obj.description && obj.deadline && obj.status;
			},
			type: Object,
			required: true,
		},
	}
};
</script>
