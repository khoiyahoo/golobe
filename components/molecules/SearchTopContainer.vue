<script setup lang="ts">
import Typography from "~/components/atoms/Typography.vue"
import SearchFlight from "~/components/molecules/SearchFlight.vue"
import Button from "~/components/atoms/Button.vue"
</script>

<template>
  <div
    class="w-[90%] absolute bg-white -bottom-[150px] left-1/2 transform translate-x-[-50%] pt-4 px-8 pb-4 flex flex-col items-start gap-12 rounded-2xl shadow-container-search z-[2]"
  >
    <nav class="flex gap-8">
      <div class="flex gap-1 items-center justify-center relative">
        <NuxtImg
          src="/icons/icon-plane-black.svg"
          alt="icon"
          class="size-6"
        />
        <Typography
          title="Flights"
          variant="p"
          size="small"
          type="semiBold"
        />
      </div>
      <div class="w-[0.0625rem] h-12 bg-gray-300"></div>
      <div class="flex gap-1 items-center justify-center relative">
        <NuxtImg
          src="/icons/icon-bed-black.svg"
          alt="icon"
          class="size-6"
        />
        <Typography
          title="Stays"
          variant="p"
          size="small"
          type="semiBold"
        />
      </div>
    </nav>
    <div class="flex flex-col items-end gap-8">
      <SearchFlight />
      <Button
        :icon-left="'/icons/icon-send-black.svg'"
        :as="'button'"
        :type="'primary'"
        :size="'normal'"
      >
        <Typography
          title="Show Flights"
          variant="p"
          size="small"
          type="medium"
        />
      </Button>
    </div>
  </div>
</template>
