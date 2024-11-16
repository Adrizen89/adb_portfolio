<script>
export default {
  name: 'BreadcrumpComponent',
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>

<template>
  <div class="lg:w-5/6 sm:w-5/6 m-auto h-10 flex pt-10">
    <nav class="flex" aria-label="Breadcrumb">
      <ol
        class="inline-flex items-center space-x-1 lg:space-x-2 rtl:space-x-reverse"
      >
        <!-- Accueil (ou premier élément) -->
        <li v-if="breadcrumbs.length" class="inline-flex items-center">
          <a
            :href="breadcrumbs[0].href"
            class="inline-flex items-center text-sm font-bold text-white hover:text-violet-600"
          >
            <svg
              class="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
              />
            </svg>
            {{ breadcrumbs[0].label }}
          </a>
        </li>

        <!-- Autres éléments du breadcrumb -->
        <li v-for="(breadcrumb, index) in breadcrumbs.slice(1)" :key="index">
          <div class="flex items-center">
            <svg
              class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <!-- Affichage conditionnel : lien ou texte simple -->
            <a
              v-if="breadcrumb.href"
              :href="breadcrumb.href"
              class="ms-1 text-sm font-bold text-white hover:text-violet-600 md:ms-2"
              >{{ breadcrumb.label }}</a
            >
            <span
              v-else
              class="ms-1 text-sm font-bold text-violet-600 md:ms-2"
              >{{ breadcrumb.label }}</span
            >
          </div>
        </li>
      </ol>
    </nav>
  </div>
</template>

<style scoped></style>
