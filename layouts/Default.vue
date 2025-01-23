<script setup lang="ts">
import { useRoute } from "vue-router"
import { ref, onMounted } from "vue"
import { getAuth, onAuthStateChanged, type User } from "firebase/auth"
import DefaultHeader from "~/components/atoms/Header.vue"
import DefaultFooter from "~/components/atoms/Footer.vue"
import HeaderTop from "~/components/atoms/HeaderTop.vue"
import { cn } from "~/utils/common"
import { useLoadingStore } from "~/stores/loading"

const route = useRoute()
const store = useLoadingStore()
const user = ref<User | null>(null)
onMounted(() => {
  store.setLoading(true)
  const auth = getAuth()

  onAuthStateChanged(auth, (userData: User | null) => {
    if (userData) {
      user.value = userData
    } else {
      user.value = null
    }
    store.setLoading(false)
  })
})
</script>

<template>
  <div>
    <HeaderTop v-if="route.path === '/'" />
    <DefaultHeader v-else />
    <div :class="cn('pt-[5.625rem]', { 'pt-[1.875rem]': route.path === '/' })">
      <slot></slot>
    </div>
    <DefaultFooter />
  </div>
</template>
