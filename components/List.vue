<template functional>
  <div name="list-container">
    <slot
      v-for="elem in props.list"
      :content="elem.content"
    />
  </div>
</template>

<style>
.list-container {
	display: flex;
}
</style>
