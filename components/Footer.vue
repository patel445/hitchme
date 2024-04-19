<template>
  <footer class="md:pt-24">
    <section id="signnup" class="relative pt-16 md:py-24">
      <div aria-hidden="true" class="hidden sm:block">
        <div class="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-zinc-50" />
        <svg
          class="absolute left-1/2 top-8 -ml-3"
          width="404"
          height="392"
          fill="none"
          viewBox="0 0 404 392"
        >
          <defs>
            <pattern
              id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-zinc-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="392"
            fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
          />
        </svg>
      </div>
      <div class="max-w-custom-container mx-auto md:px-8">
        <div
          class="relative overflow-hidden px-6 sm:px-12 py-16 sm:py-20 shadow-lg md:rounded-2xl bg-rose-500"
        >
          <div
            aria-hidden="true"
            class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
          >
            <svg
              class="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              viewBox="0 0 1463 360"
            >
              <path
                class="text-rose-400 text-opacity-60"
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
              />
              <path
                class="text-rose-600 text-opacity-70"
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
              />
            </svg>
          </div>
          <div class="relative">
            <div class="sm:text-center mx-auto prose sm:prose-lg">
              <h2 class="tracking-tight text-white">
                Get notified when we're launching.
              </h2>
              <p class="text-rose-100">
                We're creating a special community just for you! Sign up below to receive a notification when we launch, and be the first to find your soulmate.
              </p>
            </div>
            <form
              @submit.prevent="handleSubmit($event, 'formfooter')"
              class="sm:flex sm:mx-auto mt-12 sm:max-w-lg"
            >
              <div class="min-w-0 flex-1">
                <label for="cta-email" class="sr-only">Email address</label>
                <input
                  v-model="email"
                  id="cta-email"
                  type="email"
                  required
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                  title="Please enter a valid email address"
                  class="block w-full rounded-md px-5 py-3 text-sm text-zinc-900 placeholder-zinc-500 shadow-sm"
                  placeholder="Enter your email"
                />
              </div>
              <div class="mt-4 sm:ml-3 sm:mt-0">
                <button
                  type="submit"
                  class="block w-full rounded-md px-5 sm:px-10 py-3 bg-zinc-900 hover:bg-black text-sm font-medium text-white shadow"
                >
                  Notify me
                </button>
              </div>
            </form>
            <p
            :class="{
              'text-green-500': isSuccess,
              'text-red-500': !isSuccess,
            }"
            class="md:text-center mt-4"
          >
            {{ message }}
          </p>
          </div>
        </div>
      </div>
    </section>
    <div
      class="max-w-custom-container mx-auto px-6 md:px-8 py-8 flex items-center justify-between"
    >
      <div class="text-left">
        <p class="text-15">&copy; 2024 HitchMe</p>
      </div>
      <div class="flex sm:mt-0">
        <div class="flex flex-1 space-x-4">
          <a
            href="/terms"
            class="text-15 hover:text-rose-500 border-r-2 border-zinc-200 pr-4"
          >
            Terms
          </a>
          <a v-for="item in social" :key="item.name" :href="item.href">
            <img :src="item.src" class="h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { useEmailSubscription } from '~/composables/useEmailSubscription';

const { email, message, isSuccess, handleSubmit } = useEmailSubscription();
const social = [
  {
    name: "Instagram",
    href: "https://instagram.com/hitchmeapp",
    src: "/instagram.svg",
  },
  {
    name: "Email",
    href: "mailto:hitchme@gmail.com",
    src: "/email.svg",
  },
];
</script>
