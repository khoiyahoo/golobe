<script setup lang="ts">
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useRouter } from "vue-router"
import { useFirebaseAuth } from "vuefire"
import Typography from "~/components/atoms/Typography.vue"
import Input from "~/components/atoms/Input.vue"
import Button from "~/components/atoms/Button.vue"
import { definePageMeta } from "#imports"

definePageMeta({
  layout: false,
})

const router = useRouter()
const auth = useFirebaseAuth()
const handleLogin = async () => {
  if (auth) {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider())
      router.replace("/")
    } catch (err) {
      console.log(err)
    }
  }
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
        <div class="flex flex-col gap-6 w-full">
          <Input
            variant="primary"
            type="text"
            label="Email"
            placeholder="Enter your email"
          />
          <Input
            variant="primary"
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
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
            type="primary"
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
          @click="handleLogin"
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
