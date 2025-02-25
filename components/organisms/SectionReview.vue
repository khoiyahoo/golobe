<script setup lang="ts">
import Typography from "~/components/atoms/Typography.vue"
import Button from "~/components/atoms/Button.vue"
import CardReview from "~/components/atoms/CardReview.vue"
</script>

<template>
  <div class="mt-[4.375rem]">
    <div class="flex items-center justify-between px-[1.875rem]">
      <div>
        <Typography
          title="Reviews"
          variant="h1"
          size="large"
          type="semiBold"
          class="text-black"
        />
        <Typography
          title="What people says about Golobe facilities"
          variant="p"
          size="smallMedium"
          type="regular"
          class="text-black"
        />
      </div>
      <Button
        as="link"
        variant="outlined"
        size="normal"
        href="/"
      >
        <Typography
          title="See All"
          variant="p"
          size="small"
          type="regular"
          class="text-black"
        />
      </Button>
    </div>
    <div class="flex gap-12 w-full overflow-x-auto whitespace-nowrap">
      <CardReview
        v-for="n in 7"
        :key="n"
        class="first:ml-[1.875rem] last:mr-[3.75rem] mt-[2.5rem] mb-6"
      />
    </div>
  </div>
</template>
