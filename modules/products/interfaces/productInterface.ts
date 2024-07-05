export interface ProductsResponseApi {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  images?: string[];
  specifications: {
    power?: string;
    dimensions?: string;
    weight?: string;
    efficiency?: string;
    capacity?: string;
    lifecycle?: string;
    voltage?: string;
    connectors?: string;
    charging_time?: string;
    lumens?: string;
    lifetime?: string;
    color_temperature?: string;
  };
}
