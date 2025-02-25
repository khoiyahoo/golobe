<script setup lang="ts">
import { sendPasswordResetEmail } from "firebase/auth"
import { useFirebaseAuth } from "vuefire"
import { Form, Field } from "vee-validate"
import { toTypedSchema } from "@vee-validate/zod"
import * as zod from "zod"
import { ref } from "vue"
import Typography from "~/components/atoms/Typography.vue"
import Input from "~/components/atoms/Input.vue"
import Button from "~/components/atoms/Button.vue"
import { useLoadingStore } from "~/stores/loading"
import { definePageMeta, useToastStore } from "#imports"

definePageMeta({
  layout: false,
})

const schema = toTypedSchema(
  zod.object({
    email: zod
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
      })
      .nonempty({ message: "Email is required" })
      .email({ message: "Must be a valid email" }),
  }),
)

const auth = useFirebaseAuth()
const loadingStore = useLoadingStore()
const toastStore = useToastStore()
const isSend = ref("sending")

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onSubmit = async (values: any) => {
  if (auth) {
    loadingStore.setLoading(true)
    try {
      await sendPasswordResetEmail(auth, values.email)
      toastStore.setToast({
        show: true,
        message: "Email sent successfully",
        type: "success",
      })
      isSend.value = "send-success"
    } catch (err) {
      console.log(err)
      toastStore.setToast({
        show: true,
        message: "Email sent fail",
        type: "error",
      })
      isSend.value = "send-error"
    } finally {
      loadingStore.setLoading(false)
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleError = (errors: any) => {
  console.log("Validation errors:", errors)
}
</script>

<template>
  <div class="container pt-[6.5rem] w-full h-full flex gap-8 justify-center">
    <div class="w-1/2">
      <NuxtImg
        src="/images/img-logo-black.svg"
        alt="icon"
        class="w-[6.875rem] h-9"
      />
      <div class="flex flex-col gap-4 mb-12">
        <Typography
          title="Forgot Password"
          variant="h4"
          size="xxLarge"
          type="bold"
          class="text-black-100"
        />
        <Typography
          title="Please enter email to reset password"
          variant="p"
          size="smallMedium"
          type="regular"
          class="text-black-100"
        />
      </div>
      <div class="flex flex-col gap-[2.5rem] items-center w-full">
        <Form
          v-slot="{ errors }"
          class="w-full flex flex-col gap-4"
          :validation-schema="schema"
          @submit="onSubmit"
          @invalid-submit="handleError"
        >
          <div class="flex flex-col gap-6 w-full">
            <Field
              v-slot="{ field }"
              name="email"
            >
              <Input
                v-bind="field"
                name="email"
                variant="primary"
                type="text"
                label="Email"
                placeholder="Enter your email"
                :sup-text="errors.email"
                :is-error="!!errors.email"
              />
            </Field>
          </div>
          <div class="flex flex-col gap-4 w-full items-center">
            <Button
              as="button"
              size="normal"
              type="submit"
              variant="primary"
              class="w-full"
            >
              <Typography
                title="Reset Password"
                variant="p"
                size="small"
                type="semiBold"
                class="text-black-100"
              />
            </Button>
          </div>
          <div
            v-if="isSend === 'send-success'"
            class="mt-4 flex justify-center items-center"
          >
            <Typography
              title="Email have been sent to your email. Please check your email !!"
              variant="p"
              size="small"
              type="semiBold"
              class="text-black-100 text-center"
            />
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
