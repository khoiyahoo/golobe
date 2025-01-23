<script setup lang="ts">
import { signOut } from "firebase/auth"
import { onBeforeUnmount, onMounted, ref } from "vue"
import { useRouter } from "vue-router"
import { useCurrentUser, useFirebaseAuth } from "vuefire"
import Typography from "~/components/atoms/Typography.vue"
import { cn } from "~/utils/common"

const isScrolled = ref(false)
const user = useCurrentUser()
const auth = useFirebaseAuth()
const router = useRouter()
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const handleLogout = async () => {
  if (auth) {
    await signOut(auth)
      .then(() => {
        router.replace("/login")
      })
      .catch(err => {
        console.log(err)
      })
  }
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
        'bg-transparent w-full fixed top-[1.875rem] z-[1000] transition-all duration-300 ease-in-out transparent',
        { 'backdrop-blur-md bg-white/30 top-0': isScrolled },
      )
    "
  >
    <div
      class="container w-full flex h-[5.625rem] py-[1.3125rem] justify-between items-center"
    >
      <nav class="flex gap-8 items-center">
        <NuxtLink
          to="/flights"
          :class="cn('flex gap-1 items-center justify-center relative')"
        >
          <NuxtImg
            src="/icons/icon-plane-white.svg"
            alt="icon"
            class="size-6"
          />
          <Typography
            title="Find Flight"
            variant="p"
            size="small"
            type="semiBold"
            :class-names="'text-white'"
          />
        </NuxtLink>
        <NuxtLink
          to="/stays"
          :class="cn('flex gap-1 items-center justify-center relative')"
        >
          <NuxtImg
            src="/icons/icon-bed-white.svg"
            alt="icon"
            class="size-6"
          />
          <Typography
            title="Find Stays"
            variant="p"
            size="small"
            type="semiBold"
            :class-names="'text-white'"
          />
        </NuxtLink>
      </nav>
      <NuxtLink to="/">
        <NuxtImg
          src="/images/img-logo-white.svg"
          alt="icon"
          class="w-[6.875rem] h-9"
        />
      </NuxtLink>

      <nav class="flex items-center gap-4">
        <NuxtLink
          :to="user ? 'profile' : '/login'"
          class="h-12 rounded-lg bg-transparent hover:bg-gray-100/30 py-[0.625rem] px-6 flex gap-2 items-center justify-center"
        >
          <img
            v-if="!!user?.photoURL"
            :src="user?.photoURL as string"
            alt="avatar"
            class="size-8 rounded-full"
          />
          <Typography
            :title="
              user?.displayName || (user?.email?.split('@')[0] ?? 'Login')
            "
            variant="p"
            size="small"
            type="semiBold"
            :class-names="'text-white'"
          />
        </NuxtLink>
        <button
          v-if="user"
          class="h-12 rounded-lg bg-white py-[0.625rem] px-6 hover:bg-gray-100 flex items-center justify-center"
          @click="handleLogout"
        >
          <Typography
            title="Logout"
            variant="p"
            size="small"
            type="semiBold"
            :class-names="'text-black-100'"
          />
        </button>
        <NuxtLink
          v-else
          to="/signup"
          class="h-12 rounded-lg bg-white py-[0.625rem] px-6 hover:bg-gray-100 flex items-center justify-center"
        >
          <Typography
            title="Sign up"
            variant="p"
            size="small"
            type="semiBold"
            :class-names="'text-black-100'"
          />
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
