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
  xxLarge: "text-[2.5rem]", // 40px
  xLarge: "text-4xl", // 36px
  large: "text-[2rem]", // 32px
  mediumLarge: "text-2xl", // 24px
  medium: "text-xl", // 20px
  smallMedium: "text-base", // 16px
  small: "text-sm", // 14px
  xSmall: "text-xs", // 12px
  xxSmall: "text-[0.625rem]", // 10px
}
</script>
