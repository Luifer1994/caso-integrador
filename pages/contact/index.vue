<template>
  <div class="container mx-auto">
    <Carousel :items="largeCarouselItems" type="large" />
    <div class="container mt-5">
      <div class="w-full max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="space-y-6">
          <div class="text-center">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Contáctanos
            </h1>
            <p class="mt-3 text-gray-500 dark:text-gray-400">
              Envíanos un mensaje y nos pondremos en contacto contigo a la
              brevedad.
            </p>
          </div>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="name"
              >
                Nombre
              </label>
              <input
                v-model="form.name"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="name"
                placeholder="Tu nombre"
                required
                type="text"
              />
            </div>
            <div>
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="email"
              >
                Correo electrónico
              </label>
              <input
                v-model="form.email"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="tu@ejemplo.com"
                required
                type="email"
              />
            </div>
            <div>
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="subject"
              >
                Asunto
              </label>
              <input
                v-model="form.subject"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="subject"
                placeholder="Asunto del mensaje"
                required
                type="text"
              />
            </div>
            <div>
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="message"
              >
                Mensaje
              </label>
              <textarea
                v-model="form.message"
                class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="message"
                placeholder="Escribe tu mensaje aquí"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2 mt-4"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useHead } from "@vueuse/head";
import Carousel from "@/components/ui/Carousel.vue";

const toast = useToast();

useHead({
  title: "Contáctanos - EcoTech Solutions",
  meta: [
    {
      name: "description",
      content:
        "Envíanos un mensaje y nos pondremos en contacto contigo a la brevedad.",
    },
  ],
});

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = () => {
  console.log("Form submitted:", form.value);
  // Aquí puedes añadir lógica para enviar el formulario, por ejemplo, usando fetch o axios
  toast.add({
    title: "Mensaje enviado",
    description: "Tu mensaje ha sido enviado correctamente.",
  });

  form.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
};

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
