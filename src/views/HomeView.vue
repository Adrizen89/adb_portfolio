<script setup>
import { onMounted, ref } from 'vue'
import Services from './ServicesView.vue'
import Projects from './ProjectsView.vue'
import FAQ from './FAQView.vue'
import Contact from './ContactView.vue'

const titleClass = ref('opacity-0')
const contentClass = ref('opacity-0')
const btnClass = ref('opacity-0')
const arrowClass = ref('opacity-0')

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

onMounted(() => {
  setTimeout(() => {
    titleClass.value = 'animate-fadeInUp'
  }, 500)

  setTimeout(() => {
    contentClass.value = 'animate-fadeInUp'
  }, 1000)

  setTimeout(() => {
    btnClass.value = 'animate-fadeInUp'
  }, 1400)
  setTimeout(() => {
    arrowClass.value = 'animate-fadeInUp'
  }, 1600)
})
</script>

<template>
  <section
    id="home"
    class="flex content-center min-h-screen mb-10 w-full mx-auto"
  >
    <div
      class="relative z-2 lg:w-3/4 sm:w-full m-auto text-center flex flex-col gap-10 justify-center items-center"
    >
      <h1
        :class="`font-bold lg:text-5xl sm:text-base text-white ${titleClass}`"
      >
        <span
          class="lg:text-7xl sm:text-3xl bg-gradient-to-r from-violet-600 to-violet-200 text-transparent bg-clip-text"
          >Création</span
        >
        <span class="lg:text-5xl sm:text-2xl">
          de sites web sur mesure pour<br />
          une visibilité
        </span>
        <span
          class="lg:text-7xl sm:text-3xl bg-gradient-to-r from-violet-600 to-violet-200 text-transparent bg-clip-text"
        >
          Optimale</span
        >
      </h1>
      <p
        :class="`text-white font-medium lg:text-base sm:text-sm text-center w-5/6 m-auto ${contentClass}`"
      >
        Je rends la création de sites web professionnels accessible et adaptée
        aux petites entreprises, pour que vous puissiez développer votre
        business sans sacrifier votre budget.
      </p>

      <button @click="scrollToSection('services')" :class="`${arrowClass}`">
        <DotLottieVue
          src="https://lottie.host/96741fec-cdb4-41c1-b9e6-43f2362e12e7/IUCnC6usFm.json"
          background="transparent"
          speed="0.8"
          class="mx-auto lg:w-3/4 sm:w-2/4"
          loop
          autoplay
        />
      </button>
    </div>
  </section>
  <section id="services">
    <Services />
  </section>
  <section id="projects"><Projects /></section>
  <section id="faq"><FAQ /></section>
  <section id="contact"><Contact /></section>
</template>

<style scoped>
/* Ajoutez ici les styles pour les animations si nécessaires */
</style>
