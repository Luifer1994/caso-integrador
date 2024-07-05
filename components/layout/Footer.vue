<!-- components/Footer.vue -->
<template>
  <footer
    class="bg-gray-100 dark:bg-gray-900 text-black dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 py-8"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <a href="#" class="mb-4 sm:mb-0">
          <NuxtImg
            width="100"
            height="50"
            src="https://static1.squarespace.com/static/58a0fb6f2e69cf7248e9d97a/t/5e40e0f6ea5b49472389e5da/1581310202797/DM_0d0fb917_with_shadow.png?format=1500w"
            alt="Logo"
            class="h-10"
          />
        </a>
        <div class="flex flex-col sm:flex-row justify-between items-center">
          <p class="text-sm">
            © {{ new Date().getFullYear() }}
            <a
              href="https://www.linkedin.com/in/luis-fernando-almendrales-ferreira-11b1081b2/"
              class="text-blue-600 hover:bg-gray-100"
            >
              Luis Almendrales </a
            >. Todos los derechos reservados.
          </p>
        </div>
        <div class="text-center sm:text-left">
          <p class="text-sm mb-2">
            Contactame:
            <a href="tel:+13044983" class="hover:underline">+57 311-00-00-00</a>
          </p>
          <p class="text-sm mb-2">Email: support@ecotechsolutioms.co</p>
          <p class="text-sm">Dirección: Calle 123 # 123 - 123</p>
        </div>
      </div>
      <div class="mt-4 text-center">
        <div
          class="bg-blue-200 border-l-4 border-blue-500 text-blue-700 p-4"
          role="alert"
        >
          <p class="font-bold">Aviso</p>
          <p>
            Esta página fue realizada como tarea de un alumno del Politécnico
            Internacional.
          </p>
          <img
            src="/logo-poli.png"
            alt="Logo Politécnico Internacional"
            class="mx-auto mt-2 w-32 h-auto"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
