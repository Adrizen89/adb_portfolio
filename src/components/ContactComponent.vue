<script>
export default {
  name: 'ContactComponent',
}
</script>

<template>
  <section class="flex items-center lg:h-screen">
    <article
      class="w-full h-2/4 flex flex-col justify-center items-center m-auto border gap-10 bg-slate-950/50 border-slate-100/25 rounded-lg py-10"
    >
      <img class="w-1/4" src="../assets/adblogo.png" alt="" />
      <h2 class="font-bold lg:text-3xl sm:text-2xl text-center text-violet-600">
        Discutons de votre projet !
      </h2>
      <p class="text-base font-medium text-white w-3/4 text-center">
        Un site web efficace commence par un premier contact. Dites-moi en plus
        sur vos besoins !
      </p>
      <RouterLink class="text-gray-300 w-full py-1" to="/contactFormView"
        ><button
          class="px-8 py-2 bg-violet-600 mx-auto flex text-center text-white rounded-lg font-semibold hover:bg-violet-500"
        >
          Contactez-moi dès maintenant !
        </button></RouterLink
      >
    </article>
  </section>
</template>

<style></style>
