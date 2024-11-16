<template>
  <header class="fixed z-10 mt-2 rounded-lg w-full">
    <div
      class="mx-auto w-11/12 flex justify-between items-center px-10 border bg-slate-950/90 border-white/25 rounded-lg p-2"
    >
      <!-- Logo à gauche -->
      <div class="w-24">
        <img src="../assets/adblogo.png" alt="Logo" />
      </div>

      <!-- Bouton du menu hamburger pour les petits écrans -->
      <button
        @click="toggleMenu"
        class="md:hidden text-gray-300 hover:text-violet-600 focus:outline-none"
      >
        <svg
          v-if="!isMenuOpen"
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <!-- Liens de navigation pour les écrans moyens et plus -->
      <div class="hidden md:flex space-x-6">
        <a
          v-for="item in items"
          :key="item.label"
          :href="item.href"
          :class="[
            'text-gray-300 hover:text-violet-600',
            { 'text-violet-600 font-bold': activeSection === item.id },
          ]"
        >
          {{ item.label }}
        </a>
      </div>

      <!-- Bouton de contact -->
      <div class="hidden md:block">
        <RouterLink class="text-gray-300 w-full py-1" to="/contactFormView"
          ><button
            class="bg-violet-700 text-white px-5 py-1 rounded-md hover:bg-violet-500"
          >
            Contactez-moi
          </button></RouterLink
        >
      </div>
    </div>

    <!-- Menu latéral pour les petits écrans -->
    <transition name="slide">
      <div
        v-if="isMenuOpen"
        class="fixed inset-y-0 right-0 w-2/4 bg-slate-950/90 p-4 flex flex-col items-center gap-5 space-y-4 md:hidden"
      >
        <!-- Bouton de fermeture dans le menu -->
        <button
          @click="toggleMenu"
          class="absolute top-4 right-4 text-gray-300 hover:text-violet-600 focus:outline-none"
        >
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <!-- Liens de navigation dans le menu latéral -->
        <a
          v-for="item in items"
          :key="item.label"
          :href="item.href"
          @click="toggleMenu"
          class="text-gray-300 hover:text-violet-600"
        >
          {{ item.label }}
        </a>

        <!-- Bouton de contact dans le menu latéral -->
        <RouterLink class="mx-auto w-5/6" to="/contactFormView"
          ><button
            class="bg-violet-700 w-full text-white px-5 py-1 rounded-md hover:bg-violet-500"
          >
            Contactez-moi
          </button></RouterLink
        >
        <button
          @click="redirectToCalendly"
          class="border w-5/6 mx-auto border-violet-700 text-white px-5 py-1 rounded-md hover:bg-violet-500"
        >
          Prendre rendez-vous
        </button>

        <div class="md:hidden sm:flex gap-3 w-full justify-evenly">
          <a href="https://www.instagram.com/tech.adb/?next=%2F">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              opacity="0.5"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <g transform="scale(5.33333,5.33333)">
                  <path
                    d="M16.5,5c-6.33361,0 -11.5,5.16639 -11.5,11.5v15c0,6.33276 5.16621,11.5 11.5,11.5h15c6.33294,0 11.5,-5.16706 11.5,-11.5v-15c0,-6.33379 -5.16724,-11.5 -11.5,-11.5zM16.5,8h15c4.71124,0 8.5,3.78779 8.5,8.5v15c0,4.71106 -3.78894,8.5 -8.5,8.5h-15c-4.71221,0 -8.5,-3.78876 -8.5,-8.5v-15c0,-4.71239 3.78761,-8.5 8.5,-8.5zM34,12c-1.105,0 -2,0.895 -2,2c0,1.105 0.895,2 2,2c1.105,0 2,-0.895 2,-2c0,-1.105 -0.895,-2 -2,-2zM24,14c-5.50482,0 -10,4.49518 -10,10c0,5.50482 4.49518,10 10,10c5.50482,0 10,-4.49518 10,-10c0,-5.50482 -4.49518,-10 -10,-10zM24,17c3.88318,0 7,3.11682 7,7c0,3.88318 -3.11682,7 -7,7c-3.88318,0 -7,-3.11682 -7,-7c0,-3.88318 3.11682,-7 7,-7z"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/adrien-berard-0263801b2/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              opacity="0.5"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <g transform="scale(5.33333,5.33333)">
                  <path
                    d="M36.5,6h-25c-3.032,0 -5.5,2.468 -5.5,5.5v25c0,3.032 2.468,5.5 5.5,5.5h25c3.032,0 5.5,-2.468 5.5,-5.5v-25c0,-3.032 -2.468,-5.5 -5.5,-5.5zM18,34c0,0.553 -0.447,1 -1,1h-3c-0.553,0 -1,-0.447 -1,-1v-13c0,-0.553 0.447,-1 1,-1h3c0.553,0 1,0.447 1,1zM15.5,18c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5zM35,34c0,0.553 -0.447,1 -1,1h-3c-0.553,0 -1,-0.447 -1,-1v-7.5c0,-1.379 -1.121,-2.5 -2.5,-2.5c-1.379,0 -2.5,1.121 -2.5,2.5v7.5c0,0.553 -0.447,1 -1,1h-3c-0.553,0 -1,-0.447 -1,-1v-13c0,-0.553 0.447,-1 1,-1h3c0.553,0 1,0.447 1,1v0.541c1.063,-0.955 2.462,-1.541 4,-1.541c3.309,0 6,2.691 6,6z"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
          <a href="https://x.com/AdriBrrd">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              opacity="0.5"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <g transform="scale(10.66667,10.66667)">
                  <path
                    d="M10.053,7.988l5.631,8.024h-1.497l-5.621,-8.024zM21,7v10c0,2.209 -1.791,4 -4,4h-10c-2.209,0 -4,-1.791 -4,-4v-10c0,-2.209 1.791,-4 4,-4h10c2.209,0 4,1.791 4,4zM17.538,17l-4.186,-5.99l3.422,-4.01h-1.311l-2.704,3.16l-2.207,-3.16h-3.85l3.941,5.633l-3.737,4.367h1.333l3.001,-3.516l2.458,3.516z"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'HeaderComponent',
  setup() {
    const items = [
      { label: 'Accueil', href: '#home', id: 'home' },
      { label: 'Mes services', href: '#services', id: 'services' },
      { label: 'Projets', href: '#projets', id: 'projets' },
      { label: 'FAQ', href: '#faq', id: 'faq' },
    ]

    const activeSection = ref('')
    const isMenuOpen = ref(false)

    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let currentSection = ''
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentSection = section.id
        }
      })
      activeSection.value = currentSection
    }

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    const redirectToCalendly = () => {
      window.location.href =
        'https://calendly.com/adri-veille-tech/30min?month=2024-11'
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      items,
      activeSection,
      isMenuOpen,
      toggleMenu,
      redirectToCalendly,
    }
  },
}
</script>

<style scoped>
header {
  position: fixed;
  z-index: 10;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
