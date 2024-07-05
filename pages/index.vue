<template>
  <div class="container mx-auto">
    <Carousel :items="largeCarouselItems" type="large" />
    <div class="container mt-5">
      <SectionServices />
      <SectionProducts />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head";
import Carousel from "@/components/ui/Carousel.vue";
import SectionServices from "@/components/SectionServices.vue";
import SectionProducts from "@/components/SectionProducts.vue";

useHead({
  title: "Inicio",
  meta: [
    {
      name: "description",
      content: "EcoTech Solutions - Energía renovable y sostenibilidad",
    },
    {
      name: "keywords",
      content:
        "energía solar, paneles solares, baterías de litio, vehículos eléctricos, bombillas LED, sostenibilidad, energía renovable, EcoTech Solutions",
    },
  ],
});

const largeCarouselItems = [
  {
    src: "https://plus.unsplash.com/premium_photo-1679517119885-391ce55f72bc?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Aprovecha la energía del sol con nuestros paneles solares de alta eficiencia. ¡Instálalos ahora y ahorra en tu factura eléctrica!",
    title: "Paneles Solares",
    buttonText: "Comprar ahora",
    buttonLink: "/products/1",
  },
  {
    src: "https://img.freepik.com/free-vector/set-battery-charge-indicators-with-low-high-energy-levels-isolated-background_1441-2555.jpg?t=st=1720203309~exp=1720206909~hmac=012f80e633d7b4f268847b2583d823dc960a897fe05ab3ad80974231feb44e66&w=2000",
    description:
      "Almacena la energía que generas. Nuestras baterías de litio son la solución perfecta para tu sistema solar.",
    title: "Baterías de Litio",
    buttonText: "Comprar ahora",
    buttonLink: "/products/2",
  },
  {
    src: "https://img.freepik.com/free-photo/charging-socket-electric-car-with-blue-light_1268-17694.jpg?t=st=1720203564~exp=1720207164~hmac=01bd68b974abe8fef8325631c50bed25dbd6cdaa719e5b8a5a5549d34e24f609&w=2000",
    description:
      "Carga tu vehículo eléctrico rápidamente con nuestros cargadores de alta potencia. Compatibles con todos los modelos.",
    title: "Cargadores de Vehículos Eléctricos",
    buttonText: "Comprar ahora",
    buttonLink: "/products/3",
  },
  {
    src: "https://img.freepik.com/free-photo/individuality-concept-light-bulb_23-2149125672.jpg?t=st=1720203648~exp=1720207248~hmac=6ebfc8ba5913ca6436b2e47907031d1d1b89a54ac1d93ec07f53f8a44adf22f9&w=2000",
    description:
      "Ilumina tu hogar de manera eficiente. Nuestras bombillas LED son económicas y tienen una larga vida útil.",
    title: "Bombillas LED",
    buttonText: "Comprar ahora",
    buttonLink: "/products/4",
  },
];
</script>

<style scoped></style>
