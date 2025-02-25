<template>
  <div class="relative min-w-[425px] min-h-[36.625rem] inline-block">
    <div
      class="absolute top-[1.5rem] right-[-24px] w-full h-full bg-primary-100 z-[-1] rounded-[1.25rem]"
    ></div>
    <div
      class="rounded-[1.25rem] p-6 shadow-review bt-white absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-white"
    >
      <Typography
        title="“A real sense of community, nurtured”"
        variant="h1"
        size="mediumLarge"
        type="bold"
        class="text-black max-h-[4.375rem] overflow-hidden"
      />
      <Typography
        title="Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for "
        variant="p"
        size="small"
        type="regular"
        class="text-black-210 truncate mt-4"
      />
      <NuxtLink to="/">
        <Typography
          title="View more"
          variant="p"
          size="small"
          type="bold"
          class="text-black-210 mt-3 text-right"
        />
      </NuxtLink>
      <div class="mt-4 flex gap-3 items-center">
        <NuxtImg
          v-for="n in 5"
          :key="n"
          src="/icons/icon-star.svg"
          class="size-6"
        />
      </div>
      <div class="flex mt-5 flex-col justify-start">
        <Typography
          title="Olga"
          variant="p"
          size="small"
          type="bold"
          class="text-black-210"
        />
        <Typography
          title="Weave Studios – Kai Tak"
          variant="p"
          size="xSmall"
          type="regular"
          class="text-black-210 mt-1"
        />
        <div class="flex gap-1 items-center mt-3">
          <NuxtImg src="/icons/icon-google.svg"></NuxtImg>
          <Typography
            title="Google"
            variant="p"
            size="xSmall"
            type="regular"
            class="text-black-210"
          />
        </div>
        <div class="mt-[2.5rem]">
          <NuxtImg
            src="/images/img-login.webp"
            class="w-full h-[12.5rem] rounded-[0.5rem]"
          ></NuxtImg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Typography from "~/components/atoms/Typography.vue"
</script>

<style scoped></style>
