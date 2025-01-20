<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import Typography from "~/components/atoms/Typography.vue"
import { cn } from "~/utils/common"

const route = useRoute()
const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
  <header
    :class="
      cn(
        'bg-white w-full fixed z-[1000] transition-all duration-300 ease-in-out',
        {
          'bg-transparent': !isScrolled,
          'backdrop-blur-md bg-white/30': isScrolled,
        },
      )
    "
  >
    <div
      class="container w-full flex h-[5.625rem] py-[1.3125rem] justify-between items-center"
    >
      <nav class="flex gap-8 items-center">
        <NuxtLink
          to="/flights"
          :class="
            cn('flex gap-1 items-center justify-center relative', {
              'nuxt-exact-active-link': route.path === '/flights',
            })
          "
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
          :class="
            cn('flex gap-1 items-center justify-center relative', {
              'nuxt-exact-active-link': route.path === '/stays',
            })
          "
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
          class="w-[6.875rem] h-9"
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
