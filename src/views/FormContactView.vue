<script>
import BreadcrumpComponent from '../components/HeaderProject.vue'
import emailjs from 'emailjs-com'
export default {
  name: 'contactFormView',
  components: {
    BreadcrumpComponent,
  },
  setup() {
    const redirectToCalendly = () => {
      window.location.href =
        'https://calendly.com/adri-veille-tech/30min?month=2024-11'
    }
    return {
      redirectToCalendly,
    }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      isSending: false,
      isSuccess: false,
      isError: false,
    }
  },
  methods: {
    async sendEmail(event) {
      event.preventDefault()
      this.isSending = true
      this.isSuccess = false
      this.isError = false

      try {
        const result = await emailjs.send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: this.form.name,
            from_email: this.form.email,
            message: this.form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        )
        console.log(result.text)
        this.isSuccess = true
        this.form.name = ''
        this.form.email = ''
        this.form.message = ''
      } catch (error) {
        console.error('Erreur:', error)
        this.isError = true
      } finally {
        this.isSending = false
      }
    },
  },
}
</script>

<template>
  <div>
    <BreadcrumpComponent
      :breadcrumbs="[
        { label: 'Accueil', href: '/#home' },
        { label: 'Me Contacter' },
      ]"
    />
    <section
      class="flex items-center justify-center min-h-screen lx:h-screen w-full"
    >
      <div
        class="p-8 rounded-lg shadow-md w-5/6 lx:h-3/4 flex lx:flex-row sm:flex-col sm:gap-10 mx-auto"
      >
        <div class="lx:w-1/2 sm:w-full flex flex-col justify-start pt-5 gap-5">
          <h2 class="text-4xl font-bold text-white">Entrons en contact !</h2>
          <p class="w-3/4">
            Vous avez une question, un projet ou simplement envie d’échanger ?
            Je suis là pour vous accompagner dans chaque étape de votre parcours
            digital. N'hésitez pas à m'envoyer un message via le formulaire
            ci-contre, ou à me retrouver directement par mail ou sur mes réseaux
            sociaux. <br />Hâte de découvrir vos idées !
          </p>
          <div class="flex gap-2">
            <a
              class="hover:text-white hover:border-white flex gap-2 border border-gray-400/25 px-2 py-1 rounded-lg"
              href="mailto:adri.veille.tech@gmail.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              adb.info.dev@gmail.com</a
            >
          </div>
          <div class="flex gap-2">
            <button
              class="hover:text-violet-600 hover:border-violet-600 flex gap-2 border border-gray-400/25 px-2 py-1 rounded-lg"
              @click="redirectToCalendly"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                />
              </svg>
              Prenez rendez-vous gratuitement !
            </button>
          </div>

          <div class="flex gap-3 w-3/4 justify-start">
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
        <div
          class="border border-gray-300/25 rounded-lg lx:w-1/2 sm:w-full flex flex-col justify-center sm:py-10"
        >
          <!-- Formulaire de contact avec la méthode de soumission configurée -->
          <form @submit.prevent="sendEmail" class="space-y-6 w-5/6 mx-auto">
            <div>
              <label for="name" class="block text-sm font-medium text-white"
                >Nom</label
              >
              <input
                type="text"
                id="name"
                name="name"
                v-model="form.name"
                class="mt-1 p-2 w-full bg-transparent border-x-0 border-b border-gray-300/25 rounded-md focus:border-violet-500"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-white"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                v-model="form.email"
                class="mt-1 p-2 w-full bg-transparent border-x-0 border-t-0 border-b border-gray-300/25 rounded-md focus:border-violet-500"
                placeholder="votremail@exemple.com"
                required
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-white"
                >Message</label
              >
              <textarea
                id="message"
                name="message"
                v-model="form.message"
                rows="4"
                class="mt-1 p-2 w-full bg-transparent border border-gray-300/25 rounded-md focus:ring-violet-500 focus:border-violet-500"
                placeholder="Votre message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              :disabled="isSending"
              class="w-full py-2 px-4 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-500 focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              <span v-if="isSending">Envoi...</span>
              <span v-else>Envoyer</span>
            </button>
          </form>
          <div v-if="isSuccess" class="text-green-500 mt-4 mx-auto">
            Message envoyé avec succès !
          </div>
          <div v-if="isError" class="text-red-500 mt-4 mx-auto">
            Erreur lors de l'envoi du message.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Ajoutez ici d'autres styles si nécessaire */
</style>
