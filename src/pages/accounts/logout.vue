<template>
  <div class="col text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="lead">Please wait...</div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";

const store = useStore();
const router = useRouter();

document.title = `Please wait...`;

onMounted(() =>
  store.dispatch("auth/logout").then(() => router.push({ name: "index" }))
);
</script>