<script setup lang="ts">
import { ref } from "vue"
import Typography from "~/components/atoms/Typography.vue"
import Button from "~/components/atoms/Button.vue"
import Input from "~/components/atoms/Input.vue"

const uppercase = ref("")
const handleCustomChange = (s: string) => {
  uppercase.value = s
}
</script>

<template>
  <div class="h-[1000vh]">
    <Typography
      title="Hello World 12"
      variant="h1"
      size="large"
      type="bold"
    />
    <Button
      :as="'button'"
      :type="'outline'"
      :size="'normal'"
      :disabled="true"
      @click="console.log('1111')"
    >
      <Typography
        :title="'Hello word'"
        :variant="'p'"
        :size="'medium'"
        :type="'regular'"
      />
    </Button>
    <Input
      :variant="'secondary'"
      :type="'text'"
      :label="'Label'"
      :class-names="'mt-8'"
      :is-search="true"
      :is-error="true"
      :sup-text="'supporting text'"
      @on-change="handleCustomChange"
    />
    <p>Uppercase: {{ uppercase }}</p>
  </div>
</template>
