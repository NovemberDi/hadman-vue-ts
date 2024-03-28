import { ref } from "vue";
import GameNote from '@/components/GameNote.vue'

export const useNotification = () => {
    const notification = ref<InstanceType<typeof GameNote> | null>(null);
    const showNotification = () => {
        notification.value?.open()
    }   
    return {
        notification,
        showNotification
    }
}