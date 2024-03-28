<script setup lang="ts">
interface  Props {
wrongLetters: string[]
}
defineProps<Props>()

</script>
<template>
    <div class="wrong-letters-container">
          <div class="wrong-letters">
            <p>Ошибки</p>
            <span v-for="(letter, index) in wrongLetters">
              {{ index === wrongLetters.length - 1 ? letter : letter + ', ' }}
             </span>

          </div>
        </div>
</template>