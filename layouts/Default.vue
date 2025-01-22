<script setup lang="ts">
import { useRoute } from "vue-router"
import DefaultHeader from "~/components/atoms/Header.vue"
import DefaultFooter from "~/components/atoms/Footer.vue"
import HeaderTop from "~/components/atoms/HeaderTop.vue"
import { cn } from "~/utils/common"

const route = useRoute()
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
