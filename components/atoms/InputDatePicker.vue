<template>
  <div
    class="relative rounded border border-black-100 py-2 px-4 flex gap-4 items-center"
  >
    <label class="px-1 bg-white absolute top-[-12px] left-[8px]">
      Depart-Return
    </label>
    <VueDatePicker
      v-model="date"
      :auto-position="false"
      :enable-time-picker="false"
      position="bottom"
      :clearable="false"
      :hide-input-icon="true"
    ></VueDatePicker>
    <div class="w-[0.0625rem] h-full bg-gray-100"></div>
    <VueDatePicker
      v-model="date"
      :auto-position="false"
      :enable-time-picker="false"
      position="bottom"
      :clearable="false"
      :hide-input-icon="true"
    ></VueDatePicker>
  </div>
</template>

<script setup>
import { ref } from "vue"
import VueDatePicker from "@vuepic/vue-datepicker"
import "@vuepic/vue-datepicker/dist/main.css"

const date = ref(new Date())
</script>

<style>
.dp__input {
  border: none;
  padding: 0;
}
</style>
