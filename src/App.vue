<template>
  {{ word }}
  <div id="app">
    <GameHeader></GameHeader>
    <div class="game-container">
      <GameFigure :wrong-letters-count="wrongLetters.length"></GameFigure>

      <GameWrongLetters
      :wrong-letters="wrongLetters"></GameWrongLetters>

      <GameWord 
      :word="word"
      :correct-letters="correctLetters"
      ></GameWord>
    </div>

    <!-- Container for final message -->
    <GamePopup  ref="popup"  :word="word" @restart="restart"></GamePopup>

    <!-- Notification -->
    <GameNote ref="notification"></GameNote>
  </div>
</template>

<script setup lang="ts">
import GameHeader from '@/components/GameHeader.vue'
import GameFigure from '@/components/GameFigure.vue'
import GameWrongLetters from '@/components/GameWrongLetters.vue'
import GameWord from '@/components/GameWord.vue'
import GamePopup from '@/components/GamePopup.vue'
import GameNote from '@/components/GameNote.vue'
import { computed, ref, watch } from 'vue'
import { useRandomWord } from '@/composables/useRandomWord'
import { useLetters } from '@/composables/useLetters'
import { useNotification } from '@/composables/useNotification'

const { word, getRandomWord } = useRandomWord();
const {letters, correctLetters, wrongLetters, isLoose, isWin, addLetter, resetLetters} = useLetters(word);
const {notification, showNotification} = useNotification();


const popup = ref<InstanceType<typeof GamePopup> | null>(null);







watch(wrongLetters, () => {
  if (isLoose.value){
    popup.value?.open('loose')
  }
})
watch(correctLetters, () => {
  if (isWin.value){
    popup.value?.open('win')
  }
})   

window.addEventListener('keydown', ({key}) => {
  if (isLoose.value || isWin.value) return;
  if (letters.value.includes(key)) {
    showNotification()
    return
  }
  addLetter(key)
})
const restart = async () => {
  await getRandomWord(); 
  resetLetters();
  popup.value?.close();
  
}

</script>

<style scoped></style>