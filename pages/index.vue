<template>
  <div>
    <List :list="todos">
      <Todo
        slot-scope="item"
        :content="item.content"
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
	data() {
		return {
			todos: [
				{
					content: 'Todo',
					id: 'yo',
				},
				{
					content: 'Coco',
					id: 'o',
				},
				{
					content: 'Coc',
					id: 'yu',
				}
			],
			type: 'Todo',
		};
	},
};
</script>
