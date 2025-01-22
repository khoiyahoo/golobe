<script setup lang="ts">
import Typography from "~/components/atoms/Typography.vue"
import SearchTopContainer from "~/components/molecules/SearchTopContainer.vue"
</script>

<template>
  <div class="px-[1.875rem]">
    <div
      class="bg-hero-top bg-cover bg-no-repeat rounded-[1.5rem] w-full h-[37.5rem] relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-hero-drop after:rounded-[1.5rem] after:z-[1]"
    >
      <div
        class="flex items-center justify-center w-full h-full flex-col absolute z-[2]"
      >
        <Typography
          title="Helping Others"
          variant="h1"
          size="mediumLarge"
          type="bold"
          :class-names="'text-[2.8125rem] leading-normal text-white'"
        />
        <Typography
          title="LIVE & TRAVEL"
          variant="h1"
          size="xxLarge"
          type="bold"
          :class-names="'text-[5rem] leading-normal text-white'"
        />
        <Typography
          title="Special offers to suit your plan"
          variant="h1"
          size="medium"
          type="semiBold"
          :class-names="'leading-normal text-white'"
        />
      </div>
      <SearchTopContainer />
    </div>
  </div>
</template>
