<script>
import ContactComponent from './ContactComponent.vue'
import BreadcrumpComponent from '../components/HeaderProject.vue'

export default {
  name: 'ProjectPage',
  components: {
    ContactComponent,
    BreadcrumpComponent,
  },
  data() {
    return {
      tabs: [
        {
          title: 'Le site sera-t-il compatible avec les appareils mobiles ?',
          content:
            'Absolument. Le site sera conçu avec un design responsive, s’adaptant automatiquement aux écrans de smartphones, tablettes, et ordinateurs pour garantir une expérience de navigation fluide et agréable.',
          value: '0',
        },
        {
          title:
            'Quelles sont les attentes en matière de délai pour ce projet ?',
          content:
            'La durée était de 2 semaines, incluant la conception, le développement, les tests, et les optimisations finales pour un lancement optimal.',
          value: '1',
        },
        {
          title: 'Le site est-il sécurisé ?',
          content:
            'Oui, toutes les précautions seront prises pour assurer la sécurité du site, en particulier pour les formulaires de contact et de réservation. Les données sensibles seront protégées pour garantir la confidentialité des informations client.',
          value: '2',
        },
        {
          title:
            'Qui est responsable de la gestion du site après sa mise en ligne ?',
          content:
            'Une formation et une documentation basiques peuvent être fournies pour aider le restaurant à gérer les mises à jour de base du site. Si le restaurant préfère, des options de maintenance mensuelle peuvent également être proposées pour assurer le bon fonctionnement du site.',
          value: '3',
        },
        {
          title:
            'Que se passe-t-il si des problèmes techniques surviennent après le lancement ?',
          content:
            'Un support technique sera disponible pendant une période définie après le lancement pour résoudre d’éventuels problèmes techniques. Un contrat de maintenance pourra également être proposé si un suivi prolongé est souhaité.',
          value: '4',
        },
        {
          title:
            'Que se passe-t-il si j’ai besoin de modifications après la livraison de mon site ?',
          content:
            'Nous sommes disponibles pour faire des ajustements mineurs si besoin. Pour les modifications plus importantes, nous vous proposerons un devis en fonction de vos nouvelles demandes.',
          value: '5',
        },
        {
          title:
            'Je n’ai pas de connaissances techniques, vais-je pouvoir gérer mon site ?',
          content:
            'Absolument ! Nous formons nos clients à la gestion des aspects essentiels de leur site, afin que vous puissiez l’administrer de manière autonome. Nous restons également disponibles pour toute assistance supplémentaire.',
          value: '6',
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
      { label: 'Le Petit Gourmet' },
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
        <div class="flex flex-col gap-4">
          <h1 class="lg:text-4xl sm:text-3xl text-white font-bold">
            Le Petit Gourmet
          </h1>
          <p>
            Créer un site web rapide et fonctionnel pour un restaurant local
            fictif nommé "Le Petit Gourmet". Le site a pour but de mettre en
            avant l'identité du restaurant, son menu et ses services, et de
            faciliter les réservations en ligne. Ce site doit transmettre une
            ambiance chaleureuse et authentique pour attirer des clients
            potentiels.
          </p>
        </div>
        <div class="lg:w-full sm:w-3/4">
          <img class="rounded-lg" src="../assets/lepetitgourmet0.png" alt="" />
        </div>
      </article>

      <article
        class="border border-slate-100/10 lg:w-6/12 sm:w-full px-5 py-5 flex flex-col justify-evenly items-start gap-5 rounded-lg"
      >
        <h2 class="text-white text-xl font-semibold">
          📌 Objectifs Spécifiques
        </h2>
        <p>
          Visibilité en ligne : Fournir une présence digitale à travers un site
          vitrine simple et rapide à naviguer.
          <br />Présentation de l’offre : Mettre en avant le menu, l’histoire du
          restaurant, et les engagements envers la qualité et le sourcing local
          des produits. <br />Réservation facile : Permettre aux clients de
          réserver une table via un formulaire en ligne. <br />Contact rapide :
          Afficher clairement les informations de contact et les horaires
          d’ouverture pour faciliter la communication.
        </p>
        <h2 class="text-white text-xl font-semibold">
          📣 Fonctionnalités principales
        </h2>
        <p>
          Page d’accueil : Présentation succincte de l’ambiance du restaurant
          avec un slogan et des images de plats signature. <br />Section "À
          propos" : Histoire du restaurant et philosophie de la cuisine.
          <br />Menu : Liste des plats avec descriptions, mise à jour
          saisonnière, et une carte des vins. <br />Réservation : Formulaire
          simple de réservation permettant de choisir la date, l'heure, et le
          nombre de convives. <br />Contact et localisation : Carte interactive,
          informations de contact et des horaires d’ouverture. <br />Responsive
          design : Adaptation pour tous les appareils (desktop, tablette,
          mobile) pour une navigation fluide.
        </p>
      </article>
      <aside
        class="border border-slate-100/10 lg:w-5/12 sm:w-full px-5 py-5 flex flex-col justify-start items-start gap-10 rounded-lg"
      >
        <h3 class="text-white text-xl font-semibold">✨ Style Visuel</h3>
        <p>
          Palette de couleurs : Tons chauds, évoquant l’atmosphère d’un bistrot
          chic, avec des touches de beige, bordeaux et bois. <br />Typographie :
          Classique et élégante, rappelant les menus des restaurants
          traditionnels. <br />Images : Photographies de plats, d'ingrédients
          frais, et du décor pour transmettre une ambiance gourmande et
          chaleureuse.
        </p>

        <h3 class="text-white text-xl font-semibold">👉 Résultat attendu</h3>
        <p>
          Un site attractif et facile à naviguer, qui reflète l’identité du
          Petit Gourmet et facilite les réservations, tout en offrant une
          vitrine professionnelle en ligne.
        </p>
      </aside>
    </div>

    <div class="w-full">
      <img
        src="../assets/lepetitgourmet2.png"
        alt=""
        class="rounded-lg mx-auto"
      />
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
