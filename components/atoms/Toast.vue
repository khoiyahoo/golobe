<template>
  <div
    :class="
      cn(
        'flex items-center p-4 rounded-md fixed top-[-5rem] right-[0.625rem] border-2 min-w-[15rem] z-50 justify-center transition-all duration-300 ease-in-out bg-white',
        {
          'border-primary-500 text-primary-500': type === 'success',
          'border-error-100 text-error-100': type === 'error',
          'top-[0.625rem]': show,
        },
      )
    "
  >
    <NuxtImg
      icon
      :src="`/icons/icon-${type}.svg`"
      alt="icon"
      class="size-6"
    />
    <span class="ml-2 font-bold">{{ message }}</span>
  </div>
</template>

<script lang="ts" setup>
import { watch } from "vue"
import { cn } from "~/utils/common"
import { useToastStore } from "~/stores/toast"

type IType = "success" | "error"

type Props = {
  type: IType
  message: string
  show: boolean
}
const { type, message, show } = defineProps<Props>()
const toastStore = useToastStore()

watch(
  () => show,
  newVal => {
    if (newVal) {
      setTimeout(() => {
        toastStore.toast.show = false
      }, 3000)
    }
  },
)
</script>
