<template>
  <div class="flex gap-4 p-4 rounded-[1rem] bg-white shadow-card w-full">
    <NuxtImg
      :src="image"
      alt="nature"
      class="w-[5.625rem] h-[5.625rem] rounded-[0.5rem]"
    ></NuxtImg>
    <div class="flex-1 flex flex-col gap-2 items-start justify-center">
      <Typography
        :title="address"
        variant="p"
        size="smallMedium"
        type="semiBold"
        class="text-black-210 truncate"
      />
      <Typography
        :title="services"
        variant="p"
        size="small"
        type="regular"
        class="text-black-210"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Typography from "~/components/atoms/Typography.vue"

type Props = {
  image: string
  address: string
  services: string
}
const { image, address, services } = defineProps<Props>()
</script>
