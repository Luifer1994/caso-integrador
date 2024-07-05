<template>
  <div>
    <section id="product-detail" class="py-12 md:py-24 bg-background">
      <div class="container max-w-5xl mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <img
              :src="selectedProduct.image || '/default-img.jpg'"
              width="600"
              height="400"
              alt="Panel Solar"
              class="rounded-lg"
              style="aspect-ratio: 600 / 400; object-fit: cover"
            />
          </div>
          <div class="space-y-6">
            <div>
              <h1 class="text-3xl md:text-4xl font-bold">
                {{ selectedProduct.name }}
              </h1>
              <p class="text-muted-foreground text-lg md:text-xl mt-2">
                {{ selectedProduct.description }}
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h3 class="text-lg font-bold">Especificaciones</h3>
                <div class="grid grid-cols-2 gap-2 mt-2">
                  <div
                    v-if="selectedProduct.specifications.power"
                    class="text-sm text-muted-foreground"
                  >
                    Potencia
                  </div>
                  <div
                    v-if="selectedProduct.specifications.power"
                    class="text-sm"
                  >
                    {{ selectedProduct.specifications.power }}
                  </div>
                  <div
                    v-if="selectedProduct.specifications.efficiency"
                    class="text-sm text-muted-foreground"
                  >
                    Eficiencia
                  </div>
                  <div
                    v-if="selectedProduct.specifications.efficiency"
                    class="text-sm"
                  >
                    {{ selectedProduct.specifications.efficiency }}
                  </div>
                  <div
                    v-if="selectedProduct.specifications.dimensions"
                    class="text-sm text-muted-foreground"
                  >
                    Dimensiones
                  </div>
                  <div
                    v-if="selectedProduct.specifications.dimensions"
                    class="text-sm"
                  >
                    {{ selectedProduct.specifications.dimensions }}
                  </div>
                  <div
                    v-if="selectedProduct.specifications.weight"
                    class="text-sm text-muted-foreground"
                  >
                    Peso
                  </div>
                  <div
                    v-if="selectedProduct.specifications.weight"
                    class="text-sm"
                  >
                    {{ selectedProduct.specifications.weight }}
                  </div>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-bold">Precio</h3>
                <div class="text-3xl font-bold mt-2">
                  ${{ selectedProduct.price }}
                </div>
                <button
                  @click="simulePayment"
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4"
                >
                  Comprar Ahora
                </button>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-bold">Descripción</h3>
              <p class="text-muted-foreground mt-2">
                {{ selectedProduct.description }}
              </p>
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
import { useProduct } from "@/modules/products/composables/useProduct";
import { useAsyncData } from "nuxt/app";
const toast = useToast();

const route = useRoute();
const { selectedProduct, getProductById } = useProduct();
const { id } = route.params as { id: string | number };

const { data, error: fetchError } = await useAsyncData(`product:${id}`, () =>
  getProductById(id)
);

useHead({
  title:
    selectedProduct.value.name +
    " | " +
    useRuntimeConfig().public.titleTemplate,
  meta: [
    { name: "description", content: selectedProduct.value.description },
    { property: "og:title", content: selectedProduct.value.name },
    { property: "og:description", content: selectedProduct.value.description },
    {
      property: "og:image",
      content: selectedProduct.value.image || "/default-img.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: selectedProduct.value.name },
    { name: "twitter:description", content: selectedProduct.value.description },
    {
      name: "twitter:image",
      content: selectedProduct.value.image || "/default-img.jpg",
    },
  ],
});

const simulePayment = () => {
  toast.add({
    title: "¡Compra realizada!",
    description: "Tu compra ha sido realizada con éxito.",
  });
};
</script>

<style scoped></style>
