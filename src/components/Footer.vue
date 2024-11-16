<script>
export default {
  name: 'FooterComponent',
}
</script>

<template>
  <footer class="bg-transparent text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between lg:flex-row sm:flex-col">
        <!-- Section À propos -->
        <div class="w-full lg:w-1/4 mb-6 lg:mb-0">
          <img
            class="lg:w-2/4 sm:w-1/4 m-auto"
            src="../assets/adblogo.png"
            alt=""
          />
        </div>
        <!-- Section Liens utiles -->
        <div
          class="w-full lg:w-1/4 mb-6 lg:mb-0 flex flex-col items-start sm:items-center"
        >
          <h5 class="text-lg font-semibold mb-4">Sommaire</h5>
          <ul class="space-y-2 sm:flex sm:flex-col sm:items-center">
            <li>
              <a href="#" class="text-gray-400 hover:text-violet-600"
                >Accueil</a
              >
            </li>
            <li>
              <a href="#services" class="text-gray-400 hover:text-violet-600"
                >Services</a
              >
            </li>
            <li>
              <a href="#projets" class="text-gray-400 hover:text-violet-600"
                >Projets</a
              >
            </li>
            <li>
              <a href="#faq" class="text-gray-400 hover:text-violet-600">FAQ</a>
            </li>
          </ul>
        </div>
        <!-- Section Contact -->
        <div class="w-full lg:w-1/4 sm:flex sm:flex-col sm:items-center">
          <h5 class="text-lg font-semibold mb-4">Contact</h5>

          <p class="text-gray-400 mt-2">Email : adb.info.dev@gmail.com</p>
          <p class="text-gray-400">Téléphone : +33 6 44 38 95 54</p>
          <div class="flex gap-3">
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
      </div>
      <div class="mt-8 border-t border-gray-700 pt-4 text-center">
        <p class="text-gray-500">&copy; 2024 ADB. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<style></style>
