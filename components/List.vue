<template functional>
  <div name="list-container">
    <div
      v-for="(elem, index) in props.list"
      :key="elem.description"
    >
      <slot
        :content="elem"
      />
      <button @click="props.remove(index)">
        DELETE
      </button>
    </div>
  </div>
</template>

<style>
.list-container {
	display: flex;
}
</style>
