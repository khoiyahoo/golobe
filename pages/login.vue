<script setup lang="ts">
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"
import { useRouter } from "vue-router"
import { useFirebaseAuth } from "vuefire"
import { Form, Field } from "vee-validate"
import { toTypedSchema } from "@vee-validate/zod"
import * as zod from "zod"
import Typography from "~/components/atoms/Typography.vue"
import Input from "~/components/atoms/Input.vue"
import Button from "~/components/atoms/Button.vue"
import { useLoadingStore } from "~/stores/loading"
import { definePageMeta } from "#imports"

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
    password: zod
      .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
      })
      .nonempty({ message: "Password is required" }),
  }),
)

const router = useRouter()
const auth = useFirebaseAuth()
const store = useLoadingStore()
const handleLoginWithGoogle = async () => {
  if (auth) {
    store.setLoading(true)
    try {
      await signInWithPopup(auth, new GoogleAuthProvider())
      router.replace("/")
      store.setLoading(false)
    } catch (err) {
      console.log(err)
      store.setLoading(false)
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onSubmit = async (values: any) => {
  console.log("Form submitted:", values)
  if (auth) {
    store.setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password)
      router.replace("/")
      store.setLoading(false)
    } catch (err) {
      console.log(err)
      store.setLoading(false)
    }
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleError = (errors: any) => {
  console.log("Validation errors:", errors)
}
</script>

<template>
  <div class="container pt-[6.5rem] w-full h-full">
    <div class="w-1/2">
      <NuxtImg
        src="/images/img-logo-black.svg"
        alt="icon"
        class="w-[6.875rem] h-9"
      />
      <div class="flex flex-col gap-4 mb-12">
        <Typography
          title="Login"
          variant="h4"
          size="xxLarge"
          type="bold"
          class="text-black-100"
        />
        <Typography
          title="Login to access your Golobe account"
          variant="p"
          size="smallMedium"
          type="regular"
          class="text-black-100"
        />
      </div>
      <div class="flex flex-col gap-[2.5rem] items-center w-full">
        <Form
          v-slot="{ errors }"
          class="w-full"
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
            <div class="flex justify-between">
              <div class="flex gap-2 items-center">
                <input type="checkbox" />
                <label>
                  <Typography
                    title="Remember me"
                    variant="p"
                    size="small"
                    type="medium"
                    class="text-black-100"
                  />
                </label>
              </div>

              <NuxtLink to="/forgot-password">
                <Typography
                  title="Forgot password"
                  variant="p"
                  size="small"
                  type="medium"
                  class="text-error-100"
                />
              </NuxtLink>
            </div>
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
                title="Login"
                variant="p"
                size="small"
                type="semiBold"
                class="text-black-100"
              />
            </Button>
            <div class="flex gap-1">
              <Typography
                title="Don’t have an account?"
                variant="p"
                size="small"
                type="medium"
                class="text-black-100"
              />
              <Typography
                title="Sign up"
                variant="p"
                size="small"
                type="medium"
                class="text-error-100"
              />
            </div>
          </div>
        </Form>
        <div class="flex items-center justify-between w-full">
          <hr class="h-[0.0313rem] w-[calc(100%/3)] bg-gray-100" />
          <Typography
            title="Or login with"
            variant="p"
            size="small"
            type="regular"
            class="text-black-100 w-[150px]"
          />
          <hr class="h-[0.0313rem] w-[calc(100%/3)] bg-black-100" />
        </div>
        <button
          class="flex px-6 py-4 border border-primary-100 rounded items-center justify-center gap-2 w-full"
          @click="handleLoginWithGoogle"
        >
          <NuxtImg
            src="/icons/icon-google.svg"
            alt="icon"
            class="size-6"
          />
          <Typography
            title="Google"
            variant="p"
            size="small"
            type="medium"
            class="text-black-100"
          />
        </button>
      </div>
    </div>
  </div>
</template>
