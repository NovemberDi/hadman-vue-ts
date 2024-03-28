<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref(false)
const open = () => {
  isVisible.value = true
  setTimeout(() => isVisible.value = false, 2000)
}
const close = () => {
  isVisible.value = false
}

defineExpose({
  open,
  close,
  isVisible
})
</script>

<template>
  <div class="notification-container" :class="{ show: isVisible }">
    <p>Вы уже вводили этот символ</p>
  </div>
</template>