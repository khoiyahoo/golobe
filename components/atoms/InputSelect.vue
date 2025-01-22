vue
<script setup lang="ts">
import { ref, watch } from "vue"
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue"
import { cn } from "~/utils/common"
import type { ISelectOption } from "~/interfaces/common"

type Props = {
  label: string
  options: ISelectOption[]
  modelValue: ISelectOption
}
const props = defineProps<Props>()
const emit = defineEmits(["on-change"])

const selectedValue = ref(props.modelValue)

watch(
  () => props.modelValue,
  newVal => {
    selectedValue.value = newVal
  },
)

watch(selectedValue, newVal => {
  emit("on-change", newVal)
})
</script>

<template>
  <div>
    <Listbox
      v-model="selectedValue"
      as="div"
    >
      <div :class="cn('relative h-full')">
        <ListboxButton
          class="relative w-full h-full cursor-default rounded border border-black-300 bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        >
          <ListboxLabel class="absolute px-1 top-[-12px] left-[8px] bg-white">
            {{ label }}
          </ListboxLabel>
          <span class="truncate h-[2.5rem] flex items-center">
            {{ selectedValue.name }}
          </span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <NuxtImg
              src="/icons/icon-arrow-down.svg"
              alt="icons"
              class="size-6"
            />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-for="item in options"
              v-slot="{ active, selected }"
              :key="item.name"
              :value="item"
              as="template"
            >
              <li
                :class="[
                  active && 'bg-gray-100',
                  'relative w-full cursor-default select-none p-2 text-black-100',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block w-full',
                  ]"
                >
                  {{ item.name }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-black-100"
                />
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
