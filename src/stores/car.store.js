import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useCarStore = defineStore({
  id: "car",
  state: () => ({
    cars: [],
    car: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/car`;

      const cars = await axiosWrapper.get(url);

      if (cars) {
        this.cars = cars.data;
      }
    },
    async show(id) {
      let url = `${baseUrl}/car/${id}`;

      const cars = await axiosWrapper.get(url);

      if (cars) {
        this.cars = cars.data;
      }
    },
    async add(data) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("license", data.license);
      formData.append("picture", data.picture);

      const car = await axiosWrapper.post(
        `${baseUrl}/car/`,
        formData,
        true,
        {
          headers: {
            "Content-Type": "Multipart/form-data",
          },
        }
      );

      this.car = car.data;

      return car;
    },
    async update(id, data) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("license", data.license);
      formData.append("picture", data.picture);

      const car = await axiosWrapper.put(
        `${baseUrl}/car/${id}`,
        formData,
        true,
        {
          headers: {
            "Content-Type": "Multipart/form-data",
          },
        }
      );

      this.car = car.data;

      return car;
    },
    async delete(id) {
      return await axiosWrapper.delete(`${baseUrl}/car/${id}`, {}, true);
    },
  },
});
