<template>
  <Meta>
    <Title>Hitch Me - Traditional Dating Modernized</Title>
    <Meta
      name="description"
      content="Say goodbye to swiping! Are you tired of meaningless matches without finding the right one? We've reinvented the dating app experience by doing the matching for you. Sign up today to be the first to know when we launch and start your and start your journey to forever love!"
    />
    <Link rel="canonical" href="https://www.hitchmeapp.com/" />
    <Meta
      property="og:title"
      content="Hitch Me - Traditional Dating Modernized"
    />
    <Meta
      property="og:description"
      content="Say goodbye to swiping! Are you tired of meaningless matches without finding the right one? We've reinvented the dating app experience by doing the matching for you. Sign up today to be the first to know when we launch and start your and start your journey to forever love!"
    />
    <Meta property="og:url" content="https://www.hitchmeapp.com/" />
    <Meta
      property="twitter:title"
      content="Hitch Me - Traditional Dating Modernized"
    />
    <Meta
      property="twitter:description"
      content="Say goodbye to swiping! Are you tired of meaningless matches without finding the right one? We've reinvented the dating app experience by doing the matching for you. Sign up today to be the first to know when we launch and start your and start your journey to forever love!"
    />
    <Metadata />
  </Meta>
  <main class="isolate space-y-20 md:space-y-36">
    <div
      class="isolate relative overflow-hidden bg-gradient-to-b from-rose-100/20"
    >
      <div
        class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <section id="hero-section" class="relative isolate">
        <Header />
        <div class="max-w-custom-container mx-auto px-6 md:px-8 mt-8 md:mt-0">
          <svg
            class="absolute inset-0 -z-10 h-full w-full stroke-zinc-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" class="overflow-visible fill-zinc-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                stroke-width="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
            />
          </svg>
          <div
            class="mt-8 md:mt-0 md:grid md:grid-cols-10 md:items-center md:gap-10"
          >
            <div class="md:col-span-6">
              <div class="mt-6 lg:mt-0 prose prose-base lg:prose-xl">
                <h1 class="tracking-tight">Traditional Dating Modernized.</h1>
                <p>
                  Say goodbye to swiping! Are you tired of meaningless matches
                  without finding the right one? We've reinvented the dating app
                  experience by doing the matching for you. Sign up today to be
                  the first to know when we launch and start your journey to forever love!
                </p>
              </div>
              <div class="flex items-center gap-x-6 mt-10">
                <form
                  @submit.prevent="handleSubmit($event, 'formhome')"
                  class="w-full sm:flex w-full"
                >
                  <div class="flex-1 min-w-0">
                    <label for="hero-email" class="sr-only"
                      >Email address</label
                    >
                    <input
                      v-model="email"
                      id="hero-email"
                      name="EMAIL"
                      type="email"
                      required
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                      title="Please enter a valid email address"
                      class="block w-full rounded-md border border-zinc-300 px-5 py-3 text-base text-zinc-900 placeholder-zinc-500 shadow-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="mt-4 sm:ml-3 sm:mt-0">
                    <button
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      class="block w-full rounded-md border border-transparent bg-rose-500 hover:bg-rose-600 px-10 md:px-5 lg:px-10 py-3 text-base font-medium text-white shadow"
                    >
                      Notify me
                    </button>
                  </div>
                  <div
                    style="position: absolute; left: -5000px"
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_38fdff5e3c161f6dc35b63e9b_53d4ce82f7"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                </form>
              </div>
              <div
                v-if="message"
                :class="{
                  'text-green-500': isSuccess,
                  'text-red-500': !isSuccess,
                }"
                class="mt-4"
              >
                {{ message }}
              </div>
              <p class="mt-6 text-xs text-zinc-700">
                <i
                  >*We will use your email ONLY to notify you when we're ready
                  to launch. You will NOT receive any spam or marketing messages
                  from us.</i
                >
              </p>
            </div>
            <div
              class="flex justify-center md:justify-end md:col-span-4 mt-12 md:mt-4 lg:mt-0"
            >
              <img class="max-h-[650px]" src="/phone-background.png" alt="" />
            </div>
          </div>
          <div
            class="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden md:mx-0 mt-12 md:mt-24 md:max-w-none"
          >
            <div v-for="step in steps" :key="step.name">
              <span
                class="flex items-center text-sm font-semibold leading-6 text-rose-500"
              >
                <svg
                  viewBox="0 0 4 4"
                  class="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx="2" cy="2" r="2" fill="currentColor" />
                </svg>
                {{ step.number }}
                <div
                  class="absolute md:flex-auto md:w-auto md:translate-x-0 -ml-2 md:static h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 md:-mr-6 md:ml-8"
                  aria-hidden="true"
                />
              </span>
              <p
                class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900"
              >
                {{ step.name }}
              </p>
              <p class="mt-1 text-base leading-7 text-gray-600">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"
      />
    </div>
    <section class="max-w-custom-container mx-auto px-6 md:px-8" id="about">
      <div
        class="flex flex-col items-center justify-between gap-8 lg:gap-16 md:mx-0 md:max-w-none md:flex-row"
      >
        <div class="w-full md:max-w-lg md:flex-auto">
          <img
            src="/ring-suit.png"
            alt=""
            class="aspect-[6/5] md:aspect-auto md:h-[28rem] lg:h-[26rem] w-full rounded-2xl bg-gray-50 :mt-10 object-cover"
          />
          <img
            src="/ring-in-hand.png"
            alt=""
            class="hidden md:block aspect-[6/5] md:aspect-auto md:h-[28rem] lg:h-[26rem] w-full rounded-2xl bg-gray-50 mt-12 object-cover"
          />
        </div>
        <div class="w-full lg:max-w-xl lg:flex-auto prose sm:prose-lg">
          <h2>Our Mission</h2>
          <p>
            Our mission at Hitch Me is simple: 'We'll Find You The One.'
            Dedicated to revolutionizing the dating world, we combine
            traditional values with modern technology to foster lasting
            relationships. Unlike typical dating apps that rely on endless
            swiping, Hitch Me uses data-driven criteria to make matches. Think
            of us as your digital matchmaker or a best friend who knows exactly
            what you need in a relationship that’s just right for you.
          </p>
          <p>
            Why should you trust us? Our approach is entirely data-driven. Our
            matching system is backed by years of research in evolutionary
            psychology. Additionally, we ensure every user is thoroughly vetted
            to maintain an authentic and high-quality community, ensuring that
            the people you meet are genuinely seeking a lifelong partner.
          </p>
          <div class="mt-8 flex border-t border-zinc-200 pt-8">
            <a
              href="#signnup"
              class="text-base font-semibold text-rose-500 hover:text-rose-600 no-underline"
              >Register Now <span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>
<script setup>
import { useEmailSubscription } from "~/composables/useEmailSubscription";

const { email, message, isSuccess, handleSubmit } = useEmailSubscription();
const steps = [
  {
    name: "Create Your Account",
    description:
      "Start by creating an account and filling out all your information as accurately as possible. This helps us vet you and curate the perfect match for you!",
    number: "Step 1",
  },
  {
    name: "Wait For Matches",
    description:
      "After your account is set up, leave the rest to us. Simply turn on your notifications and relax while we find great matches for you.",
    number: "Step 2",
  },
  {
    name: "Start Chatting",
    description:
      "Everything ends with YOU! Once matched, we encourage you to fully engage with each match—you never know what might happen!",
    number: "Step 3",
  },
];
</script>
