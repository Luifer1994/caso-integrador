import type { ProductsResponseApi } from "@/modules/products/interfaces/productInterface";

/**
 * Retrieves all products from the API.
 *
 * @returns {ProductsResponseApi[]} A list of products.
 */
export const getProductsApi = (): ProductsResponseApi[] => {
  return [
    {
      id: 1,
      name: "Panel Solar EcoTech 200W",
      description: "Panel solar de alta eficiencia con una potencia de 200W, ideal para instalaciones residenciales y comerciales.",
      specifications: {
        power: "200W",
        dimensions: "1640 x 992 x 40 mm",
        weight: "19 kg",
        efficiency: "20%",
      },
      price: 250,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=3544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Batería de Litio EcoTech 5kWh",
      description: "Batería de litio de 5kWh para almacenamiento de energía solar, perfecta para garantizar el suministro eléctrico durante la noche.",
      specifications: {
        capacity: "5kWh",
        lifecycle: "5000",
        voltage: "48V",
        weight: "60 kg",
      },
      price: 1500,
      image: "https://images.unsplash.com/photo-1592318348310-f31b61a931c8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Cargador de Vehículos Eléctricos EcoCharge 22kW",
      description: "Cargador de alta velocidad para vehículos eléctricos con una potencia de 22kW, compatible con todos los modelos de autos eléctricos.",
      specifications: {
        power: "22kW",
        connectors: "Tipo 2",
        charging_time: "3-4 horas",
        weight: "10 kg",
      },
      price: 800,
      image: "https://images.unsplash.com/photo-1669349412975-a9dd0d2292ee?q=80&w=3400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Bombillas LED EcoLight 10W",
      description: "Bombillas LED de 10W con alta eficiencia energética y larga duración, ideales para el hogar y oficinas.",
      specifications: {
        power: "10W",
        lumens: "800",
        lifetime: "25,000 horas",
        color_temperature: "3000K (blanco cálido)",
      },
      price: 5,
      image: "https://images.unsplash.com/photo-1596877440946-331b64c24c7c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Inversor Solar EcoTech 5kW",
      description: "Inversor solar de 5kW que convierte la energía solar en energía eléctrica utilizable, ideal para aplicaciones residenciales y comerciales.",
      specifications: {
        power: "5kW",
        efficiency: "98%",
        dimensions: "450 x 300 x 200 mm",
        weight: "25 kg",
      },
      price: 1200,
      image: "https://plus.unsplash.com/premium_photo-1716762544373-77789a03d6c7?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Calentador Solar de Agua EcoTech 200L",
      description: "Calentador solar de agua con capacidad de 200 litros, ideal para aplicaciones residenciales, proporcionando agua caliente de manera eficiente y ecológica.",
      specifications: {
        capacity: "200L",
        efficiency: "95%",
        dimensions: "2000 x 1200 x 1500 mm",
        weight: "50 kg",
      },
      price: 800,
      image: "https://plus.unsplash.com/premium_photo-1682125958121-ae160b9a629c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ] as ProductsResponseApi[];
};

/**
 * Retrieves a product by its ID from the API.
 *
 * @param {number | string} id - The ID of the product to retrieve.
 * @returns {ProductsResponseApi | undefined} The product data if found, otherwise undefined.
 */
export const getProductApi = (id: number | string): ProductsResponseApi | undefined => {
  return getProductsApi().find((product) => product.id === Number(id));
};
