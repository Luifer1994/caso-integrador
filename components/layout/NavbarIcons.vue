<template>
  <div class="flex items-center space-x-3 xs:ml-5 ml-4 lg:ml-10">
    <nuxt-link
      to="/"
      :class="[
        'text-base font-medium hidden lg:flex lg:items-center ',
        { 'text-primary-600': isActiveRoute('/'), 'text-gray-900 dark:text-gray-100': !isActiveRoute('/') }
      ]"
    >
      Inicio
    </nuxt-link>
    <nuxt-link
      to="/contact"
      :class="[
        'text-base font-medium hidden lg:flex lg:items-center ',
        { 'text-primary-600': isActiveRoute('/contact'), 'text-gray-900 dark:text-gray-100': !isActiveRoute('/contact') }
      ]"
    >
      Contacto
    </nuxt-link>

    <button
      @click="darkModeStore.toggleDarkMode"
      type="button"
      class="p-1 text-gray-700 bg-white rounded-full dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <div
        class="w-7 h-7 flex items-center justify-center bg-white rounded-full"
      >
        <UIcon
          :name="isDarkMode ? 'i-heroicons-moon' : 'i-heroicons-sun'"
          class="w-6 h-6"
        />
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useDarkModeStore } from "@/stores/darkModeStore";

// Importar el store y reactividad necesaria
const darkModeStore = useDarkModeStore();
const { isDarkMode } = storeToRefs(darkModeStore);
const route = useRoute();

const isActiveRoute = (path: string) => {
  return route.path === path;
};
</script>
