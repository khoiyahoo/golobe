<template>
  <div>
    <ModalLoading v-if="loadingStore.loading" />
    <Toast
      :message="toastStore.toast.message"
      :type="toastStore.toast.type"
      :show="toastStore.toast.show"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import ModalLoading from "~/components/molecules/ModalLoading.vue"
import { useLoadingStore } from "~/stores/loading"
import { useToastStore } from "~/stores/toast"
import Toast from "~/components/atoms/Toast.vue"

const loadingStore = useLoadingStore()
const toastStore = useToastStore()
</script>
