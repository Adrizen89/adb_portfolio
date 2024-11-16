<script>
export default {
  name: 'FaqView',
  data() {
    return {
      tabs: [
        {
          title: 'Quels services propose ADB Digital ?',
          content:
            'ADB Digital offre des services de création et refonte de sites web, optimisation pour le référencement local, et gestion des réseaux sociaux pour les jeunes entrepreneurs, entreprises locales et PME. Nous nous engageons à rendre votre site performant et adapté à vos besoins spécifiques.',
          value: '0',
        },
        {
          title: 'Comment se déroule la création de mon site web ?',
          content:
            'Nous commençons par un rendez-vous pour bien comprendre vos objectifs et vos besoins. Ensuite, nous réalisons une maquette, validons ensemble le design, et procédons au développement de votre site. Une fois terminé, nous vous accompagnons pour la prise en main et l’optimisation.',
          value: '1',
        },
        {
          title: 'Tarifs et Modalités de Paiement',
          content:
            'Nos tarifs dépendent de la complexité de votre projet, mais nous proposons des solutions abordables pour les petites entreprises. Contactez-nous pour une estimation personnalisée en fonction de vos besoins.',
          value: '2',
        },
        {
          title: 'Proposez-vous des solutions de maintenance pour mon site ?',
          content:
            'Oui, ADB Digital offre des forfaits de maintenance adaptés à vos besoins, incluant la mise à jour régulière de votre site, l’optimisation SEO et la sécurité. Cela vous permet de vous concentrer sur votre activité en toute sérénité.',
          value: '3',
        },
        {
          title: 'Combien de temps faut-il pour créer un site web ?',
          content:
            'Le délai moyen pour créer un site web simple est d’environ 2 à 4 semaines, en fonction de la complexité du projet et de la réactivité pour les validations. Nous vous tiendrons informé à chaque étape du processus.',
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
  <section
    id="faq"
    class="flex flex-col justify-center items-center gap-2 lg:h-screen pt-20"
  >
    <div class="flex flex-col gap-4 sm:w-11/12">
      <h3
        class="text-center md:text-xl sm:text-base font-semibold bg-gradient-to-r from-violet-600 to-violet-200 text-transparent bg-clip-text"
      >
        Foire aux questions
      </h3>
      <h2 class="text-center md:text-5xl sm:text-4xl font-bold text-white">
        Des questions ?
      </h2>
      <p class="text-center text-white texte-base">
        La FAQ est là pour ça. Si tu ne trouves pas ta réponse, contactes-moi !
      </p>
    </div>

    <div class="lg:w-3/5 mx-auto my-10 sm:w-5/6">
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
            <span class="md:text-lg sm:text-base font-medium text-white">{{
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
  </section>
</template>
