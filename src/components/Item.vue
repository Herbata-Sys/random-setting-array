<template>
  <div
    class="item"
    :class="{ 'item--active': active }"
    @click="$emit('click')"
  >
    {{ item.title }}
  </div>
</template>

<script>
export default {
  name: 'Item',

  props: {
    item: {
      type: Object,
      default: () => {}
    },
    active: Boolean
  }
}
</script>

<style scoped>
.item {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 20px;
  height: 20vh;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0px 0px 6px -2px black;
  cursor: pointer;
  font-size: 2rem;
}

.item--active {
  background: #0056ff;
  color: white;
}
</style>
