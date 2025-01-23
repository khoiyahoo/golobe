<script setup lang="ts">
import { defineEmits } from "vue"
import { cn } from "~/utils/common"
import Typography from "~/components/atoms/Typography.vue"

type IVariant = "primary" | "secondary"
type IType = "text" | "number" | "password"

type Props = {
  variant: IVariant
  type: IType
  label: string
  placeholder?: string
  supText?: string
  classNames?: string
  isSearch?: boolean
  isError?: boolean
}

const {
  variant,
  type = "text",
  label,
  placeholder = "",
  supText = "",
  classNames = "",
  isSearch = false,
  isError = false,
} = defineProps<Props>()

const emit = defineEmits(["on-change"])

const STYLE_MAPPING: Record<string, string> = {
  container: "py-2 px-4 rounded relative",
  label: cn(
    "absolute text-sm font-normal leading-normal -top-[8px] lef-0 px-1 bg-white",
    {
      "text-black-200": variant === "primary",
    },
    {
      "text-primary-100": variant === "secondary",
    },
  ),
  supText: cn("mt-1 mx-4"),
  input: "w-full h-[2.5rem] outline-none",
  primary: cn("border border-black-300 bg-white caret-black-100"),
  secondary: cn(
    "border-[0.125rem] border-primary-300 bg-white caret-primary-100",
  ),
  search: "flex items-center gap-3",
  error: "flex items-center gap-3 border border-error-100 caret-error-100",
}

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit("on-change", target.value.toUpperCase())
}
</script>

<template>
  <div>
    <div
      :class="
        cn(
          STYLE_MAPPING.container,
          STYLE_MAPPING[variant],
          { [STYLE_MAPPING.search]: isSearch },
          { [STYLE_MAPPING.error]: isError },
          classNames,
        )
      "
    >
      <label :class="cn(STYLE_MAPPING.label, { 'text-error-100': isError })">
        {{ label }}
      </label>
      <NuxtImg
        v-if="isSearch"
        src="/icons/icon-search.svg"
        alt="icon"
        width="24"
        height="24"
      />
      <input
        :type="type"
        :placeholder="placeholder"
        :class="cn(STYLE_MAPPING.input)"
        @input="handleChange"
      />
      <NuxtImg
        v-if="isError"
        src="/icons/icon-error.svg"
        alt="icon"
        width="24"
        height="24"
      />
    </div>
    <Typography
      v-if="!!supText"
      :title="supText"
      :variant="'p'"
      :size="'small'"
      :type="'regular'"
      :class-names="cn(STYLE_MAPPING.supText, { 'text-error-100': isError })"
    />
  </div>
</template>
