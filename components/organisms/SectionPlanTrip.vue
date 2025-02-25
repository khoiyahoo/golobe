<script setup lang="ts">
import Typography from "~/components/atoms/Typography.vue"
import Button from "~/components/atoms/Button.vue"
import CardPlan from "~/components/atoms/CardPlan.vue"
</script>

<template>
  <div class="px-[1.875rem] mt-[16.4375rem]">
    <div class="flex items-center justify-between">
      <div>
        <Typography
          title="Plan your perfect trip"
          variant="h1"
          size="large"
          type="semiBold"
          class="text-black"
        />
        <Typography
          title="Search Flights & Places Hire to our most popular destinations"
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
          title="See more places"
          variant="p"
          size="small"
          type="regular"
          class="text-black"
        />
      </Button>
    </div>
    <div
      class="mt-[2.5rem] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <CardPlan
        image="/images/img-login.webp"
        address="Istabun, Turkey"
        services="Flights • Hotels • Resorts"
      />
      <CardPlan
        image="/images/img-login.webp"
        address="Istabun, Turkey"
        services="Flights • Hotels • Resorts"
      />
      <CardPlan
        image="/images/img-login.webp"
        address="Istabun, Turkey"
        services="Flights • Hotels • Resorts"
      />
      <CardPlan
        image="/images/img-login.webp"
        address="Istabun, Turkey"
        services="Flights • Hotels • Resorts"
      />
      <CardPlan
        image="/images/img-login.webp"
        address="Istabun, Turkey"
        services="Flights • Hotels • Resorts"
      />
      <CardPlan
        image="/images/img-login.webp"
        address="Istabun, Turkey"
        services="Flights • Hotels • Resorts"
      />
    </div>
    <div class="w-full flex gap-6 mt-[5rem]">
      <div
        class="bg-flight-section bg-cover w-1/2 h-[300px] rounded-[1.25rem] flex item-end justify-end flex-col pb-6 min-h-[35rem]"
      >
        <div class="flex flex-col gap-2 items-center justify-center">
          <Typography
            title="Flights"
            variant="h2"
            size="xxLarge"
            type="bold"
            class="text-white"
          />
          <Typography
            title="Search Flights & Places Hire to our most popular destinations"
            variant="p"
            size="smallMedium"
            type="regular"
            class="text-white text-center"
          />
        </div>
        <div class="flex justify-center mt-4">
          <Button
            as="button"
            variant="primary"
            size="small"
          >
            <Typography
              title="Show Flights"
              variant="p"
              size="smallMedium"
              type="regular"
            />
          </Button>
        </div>
      </div>
      <div
        class="bg-flight-section bg-cover w-1/2 h-[300px] rounded-[1.25rem] flex item-end justify-end flex-col pb-6 min-h-[35rem]"
      >
        <div class="flex flex-col gap-2 items-center justify-center">
          <Typography
            title="Hotels"
            variant="h2"
            size="xxLarge"
            type="bold"
            class="text-white"
          />
          <Typography
            title="Search hotels & Places Hire to our most popular destinations"
            variant="p"
            size="smallMedium"
            type="regular"
            class="text-white text-center"
          />
        </div>
        <div class="flex justify-center mt-4">
          <Button
            as="button"
            variant="primary"
            size="small"
          >
            <Typography
              title="Show Hotels"
              variant="p"
              size="smallMedium"
              type="regular"
            />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
