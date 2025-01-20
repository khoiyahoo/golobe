<template>
  <div>
    <DefaultHeader />
    <div class="pt-[5.625rem]">
      <slot></slot>
    </div>
    <DefaultFooter />
  </div>
</template>

<script>
import DefaultHeader from "~/components/atoms/Header.vue"
import DefaultFooter from "~/components/atoms/Footer.vue"

export default {
  components: {
    DefaultHeader,
    DefaultFooter,
  },
}
</script>
