<script setup lang="ts">
import Typography from "~/components/atoms/Typography.vue"
</script>

<template>
  <header class="bg-white w-full sticky">
    <div
      class="container w-full flex h-[5.625rem] py-[1.3125rem] justify-between items-center"
    >
      <nav class="flex gap-8 items-center">
        <NuxtLink
          to="/flights"
          class="flex gap-1 items-center justify-center"
        >
          <NuxtImg
            src="/icons/icon-plane-black.svg"
            alt="icon"
            class="size-6"
          />
          <Typography
            title="Find Flight"
            variant="p"
            size="small"
            type="semiBold"
          />
        </NuxtLink>
        <NuxtLink
          to="/stays"
          class="flex gap-1 items-center justify-center"
        >
          <NuxtImg
            src="/icons/icon-bed-black.svg"
            alt="icon"
            class="size-6"
          />
          <Typography
            title="Find Stays"
            variant="p"
            size="small"
            type="semiBold"
          />
        </NuxtLink>
      </nav>
      <NuxtLink to="/">
        <NuxtImg
          src="/images/img-logo-black.svg"
          alt="icon"
        />
      </NuxtLink>

      <nav class="flex items-center gap-4">
        <NuxtLink
          to="/login"
          class="h-12 rounded-lg bg-white hover:bg-gray-100 py-[0.625rem] px-6 flex items-center justify-center"
        >
          <Typography
            title="Login"
            variant="p"
            size="small"
            type="semiBold"
          />
        </NuxtLink>
        <NuxtLink
          to="/signup"
          class="h-12 rounded-lg bg-black-100 py-[0.625rem] px-6 hover:bg-gray-100 flex items-center justify-center"
        >
          <Typography
            title="Sign up"
            variant="p"
            size="small"
            type="semiBold"
            class="text-white"
          />
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
