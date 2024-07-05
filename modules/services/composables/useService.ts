// composables/useService.ts
import { storeToRefs } from "pinia";
import { useServiceStore } from "../stores/serviceStore";
import { getServiceApi, getServicesApi } from "../repositories/serviceRepository";

export const useService = () => {
  const serviceStore = useServiceStore();
  const { services, selectedService } = storeToRefs(serviceStore);

  /**
   * Get service by id.
   *
   * @param {number} id - The id of the service to retrieve.
   * @returns {Promise<void>}
   */
  const getServiceById = async (id: number): Promise<void> => {
    try {
      const data = getServiceApi(id);
      if (data) {
        serviceStore.setSelectedService(data);
      } else {
        throw new Error("Servicio no encontrado");
      }
    } catch (err) {
      throw new Error("Error al obtener el servicio");
    }
  };

  /**
   * Get and set services.
   *
   * @returns {void}
   */
  const getServices = () => {
    try {
      const data = getServicesApi();
      serviceStore.setServices(data);
    } catch (err) {
      throw new Error("Error al obtener los servicios");
    }
  };

  return {
    services,
    selectedService,
    getServiceById,
    getServices,
  };
};
