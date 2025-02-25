import { defineStore } from "pinia"
import { ref } from "vue"

type IToast = {
  message: string
  type: "success" | "error"
  show: boolean
}

export const useToastStore = defineStore("toast", () => {
  const toast = ref<IToast>({
    message: "",
    type: "success",
    show: false,
  })
  const setToast = (newToast: IToast) => {
    toast.value = newToast
  }
  return { toast, setToast }
})
