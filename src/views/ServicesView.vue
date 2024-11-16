<script>
export default {
  name: 'servicesView',
  data() {
    return {
      panels: [
        {
          sizeLeft: 60,
          sizeRight: 40,
          leftContent: {
            subtitle: 'Lancement Simplifié.',
            title: 'Créer votre site web sur mesure',
            text: 'Lancez votre site en toute simplicité avec des solutions clés en main. Recevez un design professionnel, adapté à vos besoins et optimisé pour capter vos premiers clients. Besoin d’aide ? Nous sommes là pour vous guider à chaque étape.',
          },
          rightContent: {
            title:
              'https://lottie.host/f3183514-8d71-4ebd-9491-6d3f5ee3466f/xAgfHIEb5Y.json',
          },
        },
        {
          sizeLeft: 40,
          sizeRight: 60,
          leftContent: {
            title:
              'https://lottie.host/9a59c87e-01df-43d4-acfd-f71aef41ab97/4JaKetMTSD.json',
          },
          rightContent: {
            subtitle: 'Mettez votre site au goût du jour.',
            title: "Modernisez votre site web pour plus d'impact",
            text: "Transformez votre site pour le rendre plus attractif, rapide et efficace. Bénéficiez d'une refonte design et technique pour mieux engager vos visiteurs et augmenter vos conversions. Besoin d’un conseil ? Nous adaptons chaque détail à vos objectifs.",
          },
        },
        {
          sizeLeft: 60,
          sizeRight: 40,
          leftContent: {
            subtitle: 'Attirez les clients près de chez vous.',
            title: 'Boostez votre visibilité en ligne',
            text: 'Optimisez votre site pour apparaître en haut des recherches locales et capter des clients proches de vous. Profitez de stratégies SEO local efficaces pour générer plus de trafic qualifié. Besoin d’un coup de pouce ? Nous nous occupons de tout pour vous !',
          },
          rightContent: {
            title:
              'https://lottie.host/0e943236-fe3c-473e-b332-13357fa140d0/iP2JWUtGD1.json',
          },
        },
      ],
    }
  },
}
</script>

<template>
  <div
    id="services"
    v-for="(panel, index) in panels"
    :key="index"
    :class="{ 'sm:flex-col-reverse': index % 2 !== 0 }"
    class="mb-20 lx:w-4/6 lg:w-11/12 md:w-5/6 m-auto flex flex-col lg:flex-row h-auto bg-transparent rounded-lg"
  >
    <!-- Panneau gauche -->
    <div
      :class="[
        'flex flex-col items-start justify-center gap-5 p-5 rounded-lg lg:w-full md:w-full sm:w-5/6 sm:mx-auto  sm:h-50',
        panel.sizeLeft === 40 ? 'border border-gray-300/25' : '',
      ]"
    >
      <template v-if="panel.sizeLeft === 40">
        <DotLottieVue
          v-if="panel.leftContent.title"
          :src="panel.leftContent.title"
          background="transparent"
          speed="1"
          class="mx-auto"
          style="width: 100%"
          loop
          autoplay
        />
      </template>
      <template v-else>
        <h3
          class="font-bold text-md md:text-lg bg-gradient-to-r from-violet-600 to-violet-200 text-transparent bg-clip-text"
        >
          {{ panel.leftContent.subtitle }}
        </h3>
        <h2 class="text-3xl md:text-4xl font-bold text-white">
          {{ panel.leftContent.title }}
        </h2>
        <p
          v-if="panel.leftContent.text"
          class="text-white text-sm md:text-base"
        >
          {{ panel.leftContent.text }}
        </p>
      </template>
    </div>

    <!-- Panneau droit -->
    <div
      :class="[
        'flex flex-col items-start justify-center gap-5 p-5 rounded-lg w-full md:w-full sm:w-5/6 sm:mx-auto ',
        panel.sizeRight === 40 ? 'border border-gray-300/25' : '',
      ]"
    >
      <template v-if="panel.sizeRight === 40">
        <DotLottieVue
          v-if="panel.rightContent.title"
          :src="panel.rightContent.title"
          background="transparent"
          speed="1"
          style="width: 100%"
          loop
          autoplay
        />
      </template>
      <template v-else>
        <h3
          class="font-bold text-md md:text-lg bg-gradient-to-r from-violet-600 to-violet-200 text-transparent bg-clip-text"
        >
          {{ panel.rightContent.subtitle }}
        </h3>
        <h2 class="text-3xl md:text-4xl font-bold text-white">
          {{ panel.rightContent.title }}
        </h2>
        <p
          v-if="panel.rightContent.text"
          class="text-white text-sm md:text-base"
        >
          {{ panel.rightContent.text }}
        </p>
      </template>
    </div>
  </div>
</template>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
