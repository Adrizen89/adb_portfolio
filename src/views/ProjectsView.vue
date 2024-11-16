<script>
import toucypinte1 from '../assets/toucypinte1.png'
import lepetitgourmet1 from '../assets/lepetitgourmet1.png'

export default {
  name: 'projectsView',

  data() {
    return {
      projects: [
        {
          title: 'ToucyPinte',
          content:
            'ToucyPinte est une plateforme web développée pour le club de football UST, permettant une gestion simplifiée et intuitive des consommations lors des événements du club. ',
          imgProject: toucypinte1,
          link: '/project2Page',
          value: '0',
        },
        {
          title: 'Le Petit Gourmet',
          content:
            "Créer un site web rapide et fonctionnel pour un restaurant local fictif nommé 'Le Petit Gourmet'. Le site a pour but de mettre en avant l'identité du restaurant, son menu et ses services, et de faciliter les réservations en ligne. Ce site doit transmettre une ambiance chaleureuse et authentique pour attirer des clients potentiels.",
          imgProject: lepetitgourmet1,
          link: '/project1Page',
          value: '1',
        },
      ],
    }
  },
}
</script>
qz

<template>
  <section
    id="projets"
    class="flex flex-col justify-evenly items-center mt-40 gap-2 mb-20 lg:h-screen sm:min-h-screen"
  >
    <div class="flex flex-col gap-4 sm:w-11/12">
      <h3
        class="text-center md:text-xl sm:text-base font-semibold bg-gradient-to-r from-violet-600 to-violet-200 text-transparent bg-clip-text"
      >
        Découverte de mes réalisations.
      </h3>
      <h2 class="text-center md:text-5xl sm:text-4xl font-bold text-white">
        Un aperçu de mon expertise
      </h2>
      <p class="text-center text-base text-white lg:w-2/4 sm:w-5/6 mx-auto">
        Une sélection de projets réalisés pour des clients satisfaits. Découvrez
        des exemples concrets de notre savoir-faire et laissez-vous inspirer
        pour votre propre projet.
      </p>
    </div>
    <div
      class="flex lg:flex-row justify-evenly items-center sm:flex-col sm:gap-5"
    >
      <article
        v-for="project in projects"
        :key="project.title"
        :value="project.value"
        class="border border-slate-100/10 lg:w-2/6 px-5 py-5 flex flex-col justify-evenly items-center gap-5 rounded-lg sm:w-5/6 sm:mt-10"
      >
        <h3
          class="font-bold md:text-3xl sm:text-2xl text-white text-center pt-5"
        >
          {{ project.title }}
        </h3>
        <img
          class="rounded-lg"
          :alt="project.title"
          :src="project.imgProject"
        />
        <p class="m-0 lx:h-40 lg:h-44">
          {{ project.content }}
        </p>
        <RouterLink
          class="text-gray-300 w-full py-1 hover:text-violet-600"
          :to="project.link"
          ><button
            class="w-full bg-violet-700 rounded-lg text-white py-1 font-semibold hover:bg-violet-500"
          >
            En savoir plus
          </button></RouterLink
        >
      </article>
    </div>
  </section>
</template>

<style></style>
