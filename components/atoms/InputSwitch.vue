<script setup lang="ts">
import { defineEmits } from "vue"
import { cn } from "~/utils/common"

type Props = {
  labelFrom: string
  labelTo: string
  placeholderFrom?: string
  placeholderTo?: string
  modelFrom: string
  modelTo: string
}

const {
  labelFrom,
  labelTo,
  placeholderFrom = "",
  placeholderTo = "",
  modelFrom,
  modelTo,
} = defineProps<Props>()

const emit = defineEmits(["on-change-from", "on-change-to", "on-switch"])

const STYLE_MAPPING: Record<string, string> = {
  container:
    "py-2 px-4 rounded relative rounded border border-black-300 bg-white flex items-center gap-2",
  label: cn(
    "absolute text-sm font-normal leading-normal -top-[12px] lef-0 px-1 bg-white",
  ),
  input: "w-full h-[2.5rem] outline-none",
}

const handleChangeFrom = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit("on-change-from", target.value)
}
const handleChangeTo = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit("on-change-to", target.value)
}
</script>

<template>
  <div :class="cn(STYLE_MAPPING.container)">
    <label :class="cn(STYLE_MAPPING.label)">
      {{ labelFrom }} - {{ labelTo }}
    </label>
    <input
      :value="modelFrom"
      type="text"
      :placeholder="placeholderFrom"
      :class="cn(STYLE_MAPPING.input)"
      @input="handleChangeFrom"
    />

    <NuxtImg
      src="/icons/icon-swap.svg"
      alt="icon"
      class="size-6 cursor-pointer"
      @click="emit('on-switch')"
    />
    <input
      :value="modelTo"
      type="text"
      :placeholder="placeholderTo"
      :class="cn(STYLE_MAPPING.input)"
      @input="handleChangeTo"
    />
  </div>
</template>
