<template>
  <component :is="$route.meta.layout || 'default'">
    <router-view />
  </component>
</template>