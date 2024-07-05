<template>
    <div>
      <section id="service-detail" class="py-12 md:py-24 bg-background">
        <div class="container max-w-5xl mx-auto px-4 md:px-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <img
                :src="selectedService.image || '/default-img.jpg'"
                width="600"
                height="400"
                alt="Servicio"
                class="rounded-lg"
                style="aspect-ratio: 600 / 400; object-fit: cover"
              />
            </div>
            <div class="space-y-6">
              <div>
                <h1 class="text-3xl md:text-4xl font-bold">
                  {{ selectedService.name }}
                </h1>
                <p class="text-muted-foreground text-lg md:text-xl mt-2">
                  {{ selectedService.description }}
                </p>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <h3 class="text-lg font-bold">Duración</h3>
                  <div class="text-sm mt-2">{{ selectedService.duration }}</div>
                </div>
                <div>
                  <h3 class="text-lg font-bold">Precio</h3>
                  <div class="text-3xl font-bold mt-2">
                    {{ selectedService.price }}
                  </div>
                  <button
                   @click="simulePayment"
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4"
                  >
                    Solicitar Servicio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRoute, useRouter } from "vue-router";
  import { useHead } from "@vueuse/head";
  import { useService } from "@/modules/services/composables/useService";
  import { useAsyncData } from "nuxt/app";
  const toast = useToast();
  
  const route = useRoute();
  const { selectedService, getServiceById } = useService();
  const { id } = route.params as { id: string };
  
  const { data, error: fetchError } = await useAsyncData(`services:${id}`, () =>
    getServiceById(Number(id)) // Asegurarse de convertir a número
  );
  
  useHead({
    title: selectedService.value.name + " | " + useRuntimeConfig().public.titleTemplate,
    meta: [
      { name: "description", content: selectedService.value.description },
      { property: "og:title", content: selectedService.value.name },
      { property: "og:description", content: selectedService.value.description },
      {
        property: "og:image",
        content: selectedService.value.image || "/default-img.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: selectedService.value.name },
      { name: "twitter:description", content: selectedService.value.description },
      {
        name: "twitter:image",
        content: selectedService.value.image || "/default-img.jpg",
      },
    ],
  });

  const simulePayment = () => {
  toast.add({
    title: "¡Servicio solicitado!",
    description: "Tu solicitud ha sido enviada con éxito. Nos pondremos en contacto contigo lo antes posible.",
  });
};
  </script>
  