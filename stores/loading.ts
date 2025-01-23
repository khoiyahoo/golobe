import { defineStore } from "pinia"
import { ref } from "vue"

export const useLoadingStore = defineStore("loading", () => {
  const loading = ref(false)
  const setLoading = (isLoading: boolean) => {
    console.log(isLoading, "====loading")
    loading.value = isLoading
  }
  return { loading, setLoading }
})
