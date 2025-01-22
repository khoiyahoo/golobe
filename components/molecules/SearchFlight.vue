<script setup lang="ts">
import { ref } from "vue"
import InputSwitch from "~/components/atoms/InputSwitch.vue"
import InputSelect from "~/components/atoms/InputSelect.vue"
import InputDatePicker from "~/components/atoms/InputDatePicker.vue"
import InputDouble from "~/components/atoms/InputDouble.vue"
import type { ISelectOption } from "~/interfaces/common"

const options: ISelectOption[] = [
  { name: "Return" },
  { name: "Go" },
  { name: "Both" },
]

const selected = ref(options[0])

const valueFrom = ref("")
const valueTo = ref("")

const handleChangeFrom = (value: string) => {
  valueFrom.value = value
}

const handleChangeTo = (value: string) => {
  valueTo.value = value
}

const handleSwitch = () => {
  const temp = valueFrom.value
  valueFrom.value = valueTo.value
  valueTo.value = temp
}

const handleChangeSelect = (value: ISelectOption) => {
  selected.value = value
}
</script>
<template>
  <div class="flex gap-6">
    <InputSwitch
      class="w-[calc((100%-140px)/3)]"
      :model-from="valueFrom"
      :model-to="valueTo"
      :label-from="'From'"
      :label-to="'To'"
      :placeholder-from="'Lahore'"
      :placeholder-to="'Karachi'"
      @on-change-from="handleChangeFrom"
      @on-change-to="handleChangeTo"
      @on-switch="handleSwitch"
    />
    <InputSelect
      v-model="selected"
      :options="options"
      label="Trip"
      class="w-[8.75rem]"
      @on-change="handleChangeSelect"
    />
    <InputDatePicker class="w-[calc((100%-140px)/3)]" />
    <InputDouble class="w-[calc((100%-140px)/3)]" />
  </div>
</template>
