<template>
  <Tag
    :class="
      cn('leading-normal', TEXT_SIZES[size], FONT_WEIGHTS[type], classNames)
    "
  >
    {{ title }}
  </Tag>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
import { cn } from "~/utils/common"

type IVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "p"
type IType = "regular" | "medium" | "semiBold" | "bold"
type ISize =
  | "xxLarge"
  | "xLarge"
  | "large"
  | "mediumLarge"
  | "medium"
  | "smallMedium"
  | "small"
  | "xSmall"
  | "xxSmall"

type Props = {
  title: string
  type: IType
  size: ISize
  variant: IVariant
  classNames?: string
}
const { title, type, size, variant, classNames = "" } = defineProps<Props>()
const Tag = variant

const FONT_WEIGHTS: Record<IType, string> = {
  regular: "font-regular",
  medium: "font-medium",
  semiBold: "font-semibold",
  bold: "font-bold",
}

const TEXT_SIZES: Record<ISize, string> = {
  xxLarge: "text-[2.5rem]",
  xLarge: "text-4xl",
  large: "text-[2rem]",
  mediumLarge: "text-2xl",
  medium: "text-xl",
  smallMedium: "text-base",
  small: "text-sm",
  xSmall: "text-xs",
  xxSmall: "text-[0.625rem]",
}
</script>
