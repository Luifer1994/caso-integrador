export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/image"],
  app: {
    head: {
      titleTemplate: "%s | EcoTech Solutions",
      meta: [
        {
          name: "description",
          content:
            "Bienvenido a EcoTech Solutions, tu destino ideal para productos increíbles con grandes ofertas.",
        },
        {
          name: "keywords",
          content: "EcoTech Solutions, productos, ofertas, tecnología, hogar",
        },
        { property: "og:title", content: "EcoTech Solutions" },
        {
          property: "og:description",
          content:
            "Descubre productos increíbles y grandes ofertas en EcoTech Solutions.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.mitiendanuxt3.com" },
        { property: "og:image", content: "/og-image.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "EcoTech Solutions" },
        {
          name: "twitter:description",
          content:
            "Descubre productos increíbles y grandes ofertas en EcoTech Solutions.",
        },
        { name: "twitter:image", content: "/twitter-image.jpg" },
        { name: "author", content: "EcoTech Solutions" },
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://www.mitiendanuxt3.com" },
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-Y",
          async: true,
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-XXXXX-Y');
          `,
        },
      ],
    },
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      failOnError: false,
      routes: [
        "/", // Ruta principal
        "/nuxt-store", // Asegúrate de que esta ruta exista o sea necesaria
        "/200.html", // Personaliza según tus necesidades
        "/404.html", // Personaliza según tus necesidades
      ],
    },
  },
  build: {},
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
      urlBaseApi: process.env.URL_API,
      apiHost: process.env.API_HOST,
      titleTemplate: "%s | EcoTech Solutions",
    },
  },
  plugins: ['~/plugins/useToast.client.ts',],
  ui: {
    safelistColors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'],
}
});
