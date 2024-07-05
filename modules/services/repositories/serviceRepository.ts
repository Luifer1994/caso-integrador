// repositories/serviceRepository.ts
import type { ServiceResponseApi } from "../interfaces/serviceInterface";

const services: ServiceResponseApi[] = [
  {
    id: 1,
    name: "Instalación de Paneles Solares",
    description:
      "Servicio integral de instalación de paneles solares para hogares y empresas, incluyendo asesoría personalizada, instalación profesional y mantenimiento continuo.",
    duration: "1-2 días",
    price: "Desde $500",
    image:
      "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Auditoría Energética",
    description:
      "Análisis detallado del consumo energético en tu hogar o negocio para identificar oportunidades de ahorro y mejorar la eficiencia energética.",
    duration: "1 día",
    price: "$200",
    image:
      "https://plus.unsplash.com/premium_photo-1716078757653-64b1f3db17c8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Mantenimiento de Sistemas Fotovoltaicos",
    description:
      "Servicio de mantenimiento preventivo y correctivo para asegurar el óptimo rendimiento de tus sistemas de energía solar.",
    duration: "Dependiendo del tamaño del sistema",
    price: "Desde $100",
    image:
      "https://plus.unsplash.com/premium_photo-1678766819262-cdc490bfd0d1?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Asesoría en Energías Renovables",
    description:
      "Consultoría especializada para implementar soluciones de energía renovable adaptadas a las necesidades específicas de cada cliente.",
    duration: "2-3 horas",
    price: "$150",
    image:
      "https://plus.unsplash.com/premium_photo-1716259490167-1fafe0a2ea80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Monitoreo y Gestión de Energía",
    description:
      "Servicio de monitoreo y gestión de energía para optimizar el consumo energético en hogares y empresas, proporcionando análisis detallados y recomendaciones.",
    duration: "Servicio continuo",
    price: "$50/mes",
    image:
      "https://plus.unsplash.com/premium_photo-1716999684531-b8f40731a827?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Optimización de Sistemas Energéticos",
    description:
      "Servicio de optimización de sistemas energéticos existentes para mejorar la eficiencia y reducir costos, incluyendo auditorías y actualizaciones tecnológicas.",
    duration: "2-3 días",
    price: "Desde $300",
    image:
      "https://media.istockphoto.com/id/1413202210/es/foto/auditor%C3%ADa-de-etiquetas-energ%C3%A9ticas.jpg?s=2048x2048&w=is&k=20&c=2dyML--7GVek5YAto-PhUiHCnYIri8rHMEk-oVraQxM=",
  },
];

/**
 * Retrieves all services from the API.
 *
 * @returns {ServiceResponseApi[]} A list of services.
 */
export const getServicesApi = (): ServiceResponseApi[] => {
  return services;
};

/**
 * Retrieves a service by its id from the API.
 *
 * @param {number} id - The id of the service to retrieve.
 * @returns {ServiceResponseApi | undefined} The service data if found, otherwise undefined.
 */
export const getServiceApi = (id: number): ServiceResponseApi | undefined => {
  return services.find((service) => service.id === id);
};
