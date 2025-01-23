<template>
  <div>
    <ModalLoading v-if="store.loading" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import ModalLoading from "~/components/molecules/ModalLoading.vue"
import { useLoadingStore } from "~/stores/loading"

const store = useLoadingStore()
</script>
