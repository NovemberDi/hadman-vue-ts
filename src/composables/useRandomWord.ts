import { getRandomName } from "@/api/getRandomName"
import { onMounted, ref } from "vue"

export const useRandomWord = () => {
    let word = ref('')
    const getRandomWord = async () => {
        try {
            word.value = await getRandomName();
        } catch (err) {
            console.log(err)
            word.value = ''
        }

    }

    onMounted(() => {
        getRandomWord()
    })

    return {
        word,
        getRandomWord
    }
}
