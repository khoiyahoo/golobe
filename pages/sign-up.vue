<script setup lang="ts">
import type { FirebaseError } from "@firebase/util"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useFirebaseAuth } from "vuefire"
import { Form, Field, type SubmissionHandler } from "vee-validate"
import { toTypedSchema } from "@vee-validate/zod"
import * as zod from "zod"
import { useRouter } from "vue-router"
import Typography from "~/components/atoms/Typography.vue"
import Input from "~/components/atoms/Input.vue"
import Button from "~/components/atoms/Button.vue"
import { useLoadingStore } from "~/stores/loading"
import { useToastStore } from "~/stores/toast"
import { definePageMeta } from "#imports"

type ISignUpForm = {
  email: string
  password: string
  confirmPassword: string
}

definePageMeta({
  layout: false,
})
const schema = toTypedSchema(
  zod
    .object({
      email: zod
        .string({
          required_error: "Email is required",
          invalid_type_error: "Email must be a string",
        })
        .nonempty({ message: "Email is required" })
        .email({ message: "Must be a valid email" }),
      password: zod
        .string({
          required_error: "Password is required",
          invalid_type_error: "Password must be a string",
        })
        .nonempty({ message: "Password is required" }),
      confirmPassword: zod
        .string({
          required_error: "Confirm password is required",
          invalid_type_error: "Confirm password must be a string",
        })
        .nonempty({ message: "Confirm password is required" }),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    }),
)

const auth = useFirebaseAuth()
const router = useRouter()
const loadingStore = useLoadingStore()
const toastStore = useToastStore()

const onSubmit: SubmissionHandler<ISignUpForm> = async values => {
  if (auth) {
    loadingStore.setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password)
      toastStore.setToast({
        show: true,
        message: "Account is created successfully",
        type: "success",
      })
      router.replace("/")
    } catch (err) {
      const error = err as FirebaseError
      let errorMessage = "An error occurred during sign up."
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = `Email address ${values.email} is already in use.`
          break
        case "auth/invalid-email":
          errorMessage = `Email address ${values.email} is invalid.`
          break
        case "auth/operation-not-allowed":
          errorMessage = `Error during sign up.`
          break
        case "auth/weak-password":
          errorMessage =
            "Password is not strong enough. Add additional characters including special characters and numbers."
          break
        default:
          errorMessage = (err as FirebaseError).message
          break
      }
      toastStore.setToast({
        show: true,
        message: errorMessage,
        type: "error",
      })
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
          title="Sign up"
          variant="h4"
          size="xxLarge"
          type="bold"
          class="text-black-100"
        />
        <Typography
          title="Please fill full information to create account"
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
          @submit="onSubmit as SubmissionHandler<ISignUpForm>"
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
            <Field
              v-slot="{ field }"
              name="password"
            >
              <Input
                v-bind="field"
                name="password"
                variant="primary"
                type="password"
                label="Password"
                placeholder="Enter your password"
                :sup-text="errors.password"
                :is-error="!!errors.password"
              />
            </Field>
            <Field
              v-slot="{ field }"
              name="confirmPassword"
            >
              <Input
                v-bind="field"
                name="confirmPassword"
                variant="primary"
                type="password"
                label="Confirm password"
                placeholder="Enter your confirm password"
                :sup-text="errors.confirmPassword"
                :is-error="!!errors.confirmPassword"
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
                title="Sign up"
                variant="p"
                size="small"
                type="semiBold"
                class="text-black-100"
              />
            </Button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
