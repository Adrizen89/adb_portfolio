<script>
import Home from './views/HomeView.vue'
import Projects from './views/ProjectsView.vue'
import Services from './views/ServicesView.vue'
import FAQ from './views/FAQView.vue'
import Contact from './views/ContactView.vue'
import { ref, onMounted } from 'vue'
import LoaderPage from './components/LoaderPage.vue'

export default {
  components: {
    Home,
    Services,
    Projects,
    FAQ,
    Contact,
    LoaderPage,
  },
  setup() {
    const isLoading = ref(true)

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false
      }, 2000) // 2 secondes
    })

    return {
      isLoading,
    }
  },
}
</script>

<template>
  <Home />
  <Services />
  <Projects />
  <FAQ />
  <Contact />
  <LoaderPage />
</template>
