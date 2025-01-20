<script setup lang="ts">
import { cn } from "~/utils/common"

type IType = "primary" | "secondary" | "tertiary" | "outline"
type ISize = "normal" | "small"
interface ButtonProps {
  href?: never
  target?: never
  as: "button"
}

interface LinkProps {
  href: string
  target?: string
  as: "link"
}

interface BaseProps {
  size: ISize
  type: IType
  className?: string
  disabled?: boolean
  iconLeft?: string
  iconRight?: string
}
type Props = BaseProps & (LinkProps | ButtonProps)
const {
  size,
  type,
  className = "",
  disabled = false,
  iconLeft = "",
  iconRight = "",
} = defineProps<Props>()

const STYLE_BTN: Record<string, string> = {
  normal: "py-[0.7188rem] px-4 rounded flex items-center justify-center gap-1",
  small: "py-[0.7188rem] px-4 rounded flex items-center justify-center gap-1",
  primary: "bg-primary-100",
  secondary: "bg-primary-200",
  tertiary: "bg-primary-400",
  outline: "bg-white border border-primary-100",
  disabled:
    type === "outline"
      ? "bg-white border border border-gray-100"
      : "bg-gray-100",
}
</script>

<template>
  <button
    v-if="as === 'button'"
    :class="
      cn(
        STYLE_BTN[type],
        STYLE_BTN[size],
        {
          [STYLE_BTN.disabled]: disabled,
        },
        className,
      )
    "
  >
    <NuxtImg
      v-if="iconLeft"
      :src="iconLeft"
      class="w-4 h-4"
    />
    <slot />
    <NuxtImg
      v-if="iconRight"
      :src="iconRight"
      class="w-4 h-4"
    />
  </button>
  <NuxtLink
    v-else-if="as === 'link'"
    :class="
      cn(
        STYLE_BTN[type],
        STYLE_BTN[size],
        {
          [STYLE_BTN.disabled]: disabled,
        },
        className,
      )
    "
    :target="target"
    :href="href"
  >
    <NuxtImg
      v-if="iconLeft"
      :src="iconLeft"
      class="w-4 h-4"
    />
    <slot />
    <NuxtImg
      v-if="iconRight"
      :src="iconRight"
      class="w-4 h-4"
    />
  </NuxtLink>
</template>
