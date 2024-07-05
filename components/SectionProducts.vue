<template>
  <section class="mb-5 mt-10">
    <div class="container">
      <div class="text-center space-y-4">
        <h2 class="text-3xl font-bold">Nuestros Productos</h2>
        <p class="text-muted-foreground max-w-[700px] mx-auto">
          Explora nuestra selección de productos de energía renovable diseñados
          para satisfacer tus necesidades.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div
          class="bg-background rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 flex flex-col group"
          v-for="product in products"
          :key="product.name"
        >
          <div class="overflow-hidden rounded-lg">
            <NuxtImg
              :src="product.image"
              width="auto"
              height="auto"
              :alt="product.name"
              class="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              style="aspect-ratio: 300 / 200; object-fit: cover"
              loading="lazy"
            />
          </div>
          <h3 class="text-xl font-bold mt-2">
            {{ product.name }}
          </h3>
          <p class="text-muted-foreground mt-2 flex-grow">
            {{ product.description }}
          </p>
          <div class="grid grid-cols-2 gap-2 mt-4">
            <div class="text-sm text-muted-foreground">Especificaciones:</div>
            <ul class="text-sm text-muted-foreground list-disc list-inside">
              <li>Potencia: {{ product.specifications.power }}</li>
              <li>Dimensiones: {{ product.specifications.dimensions }}</li>
              <li>Peso: {{ product.specifications.weight }}</li>
              <li>Eficiencia: {{ product.specifications.efficiency }}</li>
            </ul>
          </div>
          <div class="text-sm text-muted-foreground mt-4">
            Precio: {{ product.price }}
          </div>
          <div class="flex justify-between items-center mt-4">
            <nuxt-link
              to="/contact"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2"
            >
              Solicitar Información
            </nuxt-link>
            <nuxt-link
              :to="`/products/${product.id}`"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2"
            >
              Adquirir Ahora
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useProduct } from "@/modules/products/composables/useProduct";

const { getProducts, products } = useProduct();

onMounted(async () => {
  await getProducts();
});
</script>
