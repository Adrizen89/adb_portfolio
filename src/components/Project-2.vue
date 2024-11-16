<script>
import ContactComponent from './ContactComponent.vue'
import BreadcrumpComponent from '../components/HeaderProject.vue'

export default {
  name: 'Project2Page',
  components: {
    ContactComponent,
    BreadcrumpComponent,
  },
  data() {
    return {
      tabs: [
        {
          title: 'Quel est l’objectif principal de ToucyPinte ?',
          content:
            'ToucyPinte est une plateforme conçue pour simplifier la gestion des consommations au sein du club de foot UST. Elle permet de suivre les consommations, de gérer les paiements et les dettes des membres, et d’assurer une répartition transparente et équitable des coûts.',
          value: '0',
        },
        {
          title: 'Qui peut utiliser ToucyPinte ?',
          content:
            'ToucyPinte est destinée aux responsables du club de foot UST. Les responsables peuvent gérer les consommations et les paiements.',
          value: '1',
        },
        {
          title: 'Est-ce que ToucyPinte est accessible sur mobile ?',
          content:
            "Oui, la plateforme est conçue pour être responsive, ce qui signifie qu’elle s’adapte à tous les appareils (ordinateurs, tablettes, et smartphones) afin de permettre une utilisation facile, peu importe l'appareil.",
          value: '2',
        },
        {
          title: 'Les données personnelles sont-elles sécurisées ?',
          content:
            'ToucyPinte utilise Firebase pour le stockage des données, assurant une sécurité renforcée pour les informations des utilisateurs.',
          value: '3',
        },
        {
          title:
            'Est-ce que les paiements peuvent être effectués directement via ToucyPinte ?',
          content:
            'ToucyPinte permet de gérer les dettes et de sélectionner un moyen de paiement, mais elle ne prend pas en charge les paiements en ligne pour l’instant. Les transactions sont effectuées en personne, et les responsables mettent à jour les paiements sur la plateforme.',
          value: '4',
        },
      ],
    }
  },
}
</script>

<template>
  <BreadcrumpComponent
    :breadcrumbs="[
      { label: 'Accueil', href: '/#home' },
      { label: 'Projets', href: '/#projets' },
      { label: 'ToucyPinte' },
    ]"
  />
  <section
    id="projets"
    class="flex flex-col justify-center items-center lg:w-4/6 sm:w-5/6 mx-auto pt-20 gap-10 min-h-screen"
  >
    <div class="flex flex-wrap justify-between gap-10 lg:flex-row md:flex-col">
      <article
        class="border border-slate-100/10 w-full px-5 py-5 flex lg:flex-row sm:flex-col justify-evenly lg:items-center sm:items-start gap-5 rounded-lg h-1/4"
      >
        <div class="flex flex-col gap-4 lg:w-4/6">
          <h1 class="lg:text-4xl sm:text-3xl text-white font-bold">
            ToucyPinte
          </h1>
          <p>
            ToucyPinte est une plateforme web développée pour le club de
            football UST, permettant une gestion simplifiée et intuitive des
            consommations lors des événements du club. La plateforme aide les
            responsables à suivre et organiser les achats de consommations,
            gérer les paiements et les dettes de chaque membre, et assurer une
            répartition transparente des montants dus. Avec une interface claire
            et des fonctionnalités adaptées aux besoins des événements de club,
            ToucyPinte simplifie le suivi des consommations tout en réduisant
            les erreurs de gestion.
          </p>
        </div>
        <div class="lx: 2/6 lg:w-2/6 md:2/4 sm:w-3/4">
          <img class="rounded-lg" src="../assets/toucypinte.svg" alt="" />
        </div>
      </article>

      <article
        class="border border-slate-100/10 lg:w-6/12 sm:w-full px-5 py-5 flex flex-col justify-evenly items-start gap-5 rounded-lg"
      >
        <h2 class="text-white text-xl font-semibold">
          📌 Objectifs Spécifiques
        </h2>
        <p>
          Gestion Simplifiée des Consommations : Faciliter la gestion des
          tournées et des paiements pour les responsables du club. <br />Suivi
          des Dettes et Paiements : Permettre aux responsables de visualiser les
          dettes et de régler les consommations facilement. <br />Transparence
          et Organisation : Garantir une répartition équitable des coûts et un
          suivi des transactions en temps réel.
        </p>
        <h2 class="text-white text-xl font-semibold">
          📣 Fonctionnalités principales
        </h2>
        <p>
          Gestion des Consommations : Enregistrement des consommations par
          tournée, avec le détail des boissons et montants associés. <br />Suivi
          des Dettes et Paiements : Affichage des dettes individuelles pour
          chaque membre et des options de paiement pour solder ses dettes.
          <br />Tableau récapitulatif : Vue récapitulative des dettes
          remboursées, des montants dus, et des paiements effectués, permettant
          aux responsables de gérer les consommations en toute transparence.
          <br />Historique des Transactions : Archivage des consommations et
          paiements pour un suivi des dépenses à long terme.
        </p>
      </article>
      <aside
        class="border border-slate-100/10 lg:w-5/12 sm:w-full px-5 py-5 flex flex-col justify-start items-start gap-10 rounded-lg"
      >
        <h3 class="text-white text-xl font-semibold">✨ Style Visuel</h3>
        <p>
          Palette de Couleurs : Bleu, blanc et accents de vert pour refléter les
          couleurs de l’UST et apporter une touche conviviale et sportive.
          <br />Typographie : Modernité et clarté pour faciliter la lecture et
          la prise en main de la plateforme. <br />Interface Utilisateur :
          Responsive et épurée, adaptée pour une utilisation sur ordinateur et
          mobile.
        </p>

        <h3 class="text-white text-xl font-semibold">👉 Résultat attendu</h3>
        <p>
          ToucyPinte doit devenir l’outil central de gestion des consommations
          pour l’UST, avec une interface intuitive et un accès rapide aux
          informations pour chaque membre. L’objectif est d'offrir aux membres
          et aux responsables un suivi précis et efficace des consommations,
          assurant une transparence et une expérience utilisateur optimisée.
        </p>
      </aside>
    </div>

    <div class="w-full">
      <img src="../assets/toucypinte1.png" alt="" class="rounded-lg mx-auto" />
    </div>

    <div class="mt-20">
      <h3
        class="text-center lg:text-xl sm:text-base font-semibold bg-gradient-to-r from-violet-600 to-violet-200 text-transparent bg-clip-text"
      >
        Foire aux questions
      </h3>
      <h2 class="text-center lg:text-5xl sm:text-4xl font-bold text-white">
        Des questions ?
      </h2>
    </div>
    <div class="w-full mx-auto my-10">
      <div class="space-y-5">
        <details
          v-for="tab in tabs"
          :key="tab.title"
          :value="tab.value"
          class="group border border-white/25 hover:border-violet-500 hover:bg-slate-800/50 p-4 rounded-lg"
        >
          <summary
            class="flex items-center justify-between cursor-pointer list-none"
          >
            <span class="lg:text-lg sm:text-base font-medium text-white">{{
              tab.title
            }}</span>
            <svg
              class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p class="mt-2 text-white">
            {{ tab.content }}
          </p>
        </details>
      </div>
    </div>

    <ContactComponent />
  </section>
</template>

<style></style>
