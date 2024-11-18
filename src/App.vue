<script setup>
import { RouterView, useRoute } from 'vue-router'
import HeaderComponent from './components/Header.vue'
import HeaderProject from './components/HeaderProject.vue'
import FooterComponent from './components/Footer.vue'
import LoaderPage from './components/LoaderPage.vue'

import { ref, onMounted } from 'vue'

const isLoading = ref(true)
const route = useRoute()

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})
</script>

<template>
  <div v-if="isLoading"><LoaderPage /></div>
  <div
    v-else
    class="min-h-screen bg-gradient-to-tr from-slate-950 from-25% via-violet-950 via-50% to-slate-950 to-70% scroll-smooth"
  >
    <HeaderComponent
      v-if="
        !route.path.includes('/project1Page') &&
        !route.path.includes('/project2Page') &&
        !route.path.includes('/contactFormView')
      "
    />
    <HeaderProject v-else />

    <transition name="fade" mode="out-in">
      <RouterView />
    </transition>
    <FooterComponent />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
