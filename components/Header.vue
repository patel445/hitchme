<template>
  <div
    class="fixed inset-x-0 top-0 z-40 h-[5px] sm:h-[7px] bg-theme"
    :style="{ width: percent }"
  ></div>
  <header
    class="max-w-custom-container mx-auto px-6 md:px-8 py-3 md:py-6 flex items-center justify-between top-0 z-30 shadow-md md:shadow-none md:relative sticky bg-white/95 md:bg-transparent"
  >
    <div class="flex md:flex-1 justify-start">
      <a href="/" class="mt-1">
        <span class="sr-only">Hitch Me</span>
        <img class="h-8 md:h-9" src="/logo-site.png" alt="hitch me logo" />
      </a>
    </div>
    <div class="flex flex-1 space-x-4 items-center justify-end">
      <a v-for="item in social" :key="item.name" :href="item.href">
        <img :src="item.src" class="h-6" />
      </a>
    </div>
  </header>
</template>
<script setup>
const social = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/hitchmeapp",
    src: "/instagram.svg",
  },
  {
    name: "Email",
    href: "mailto:hitchmeapp@gmail.com",
    src: "/email.svg",
  },
];
</script>
<script>
export default {
  data() {
    return {
      percent: "0%",
    };
  },
  watch: {
    $route() {
      this.updatepercentIndicator();
    },
  },
  methods: {
    updatepercentIndicator() {
      const { documentElement, body } = document;
      let windowScroll = body.scrollTop || documentElement.scrollTop;
      let height = documentElement.scrollHeight - documentElement.clientHeight;
      this.percent = (windowScroll / height) * 100 + "%";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updatepercentIndicator);
  },
};
</script>
