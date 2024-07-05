// stores/serviceStore.ts
import { defineStore } from "pinia";
import type { ServiceResponseApi } from "../interfaces/serviceInterface";

export const useServiceStore = defineStore("serviceStore", {
  state: () => ({
    services: [] as ServiceResponseApi[],
    selectedService: {} as ServiceResponseApi,
  }),

  actions: {
    setServices(services: ServiceResponseApi[]) {
      this.services = services;
    },
    setSelectedService(service: ServiceResponseApi) {
      this.selectedService = service;
    },
  },
});
