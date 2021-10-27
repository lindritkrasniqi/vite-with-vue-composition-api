<template>
  <div v-if="$store.state.auth.loggedIn">
    <div class="card shadow rounded-lg">
      <div class="card-header">Dashboard</div>
      <div class="card-body">
        <div class="lead">
          Welcome, <em>{{ $store.state.auth.user.name }}</em
          >!
        </div>
      </div>
    </div>
  </div>

  <div v-else class="col-12 col-md-8">
    <div class="card shadow rounded-lg py-5">
      <div class="card-body">
        <div class="row align-items-center">
          <logo-vue class="col-xl-6" />

          <login-vue class="col-xl-6" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LogoVue from "../components/Logo.vue";
import LoginVue from "../components/Forms/Login.vue";

document.title = "Vue with Vite";
</script>