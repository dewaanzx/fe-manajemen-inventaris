import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:8080';

export const useCarStore = defineStore({
  id: "car",
  state: () => ({
    cars: [],
    car: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/car`;

      const response = await axiosWrapper.get(url);

      if (response) {
        this.cars = response.data.map(car => ({
          ...car,
          picture: this.getFullImageUrl(car.picture),
        }));
      }
    },
    async show(id) {
      let url = `${baseUrl}/car/${id}`;

      const response = await axiosWrapper.get(url);

      if (response) {
        this.car = {
          ...response.data,
          picture: this.getFullImageUrl(response.data.picture),
        };
      }
    },
    async add(data) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("license", data.license);
      formData.append("picture", data.picture);

      const response = await axiosWrapper.post(
        `${baseUrl}/car/`,
        formData,
        true,
        {
          headers: {
            "Content-Type": "Multipart/form-data",
          },
        }
      );

      if (response) {
        this.car = {
          ...response.data,
          picture: this.getFullImageUrl(response.data.picture),
        };
        // If the response contains the new car in a different structure (like response.data.data), use this instead:
        // this.car = {
        //   ...response.data.data,
        //   picture: this.getFullImageUrl(response.data.data.picture),
        // };
      }

      return response;
    },
    async update(id, data) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("license", data.license);
      formData.append("picture", data.picture);

      const response = await axiosWrapper.put(
        `${baseUrl}/car/${id}`,
        formData,
        true,
        {
          headers: {
            "Content-Type": "Multipart/form-data",
          },
        }
      );

      if (response) {
        this.car = {
          ...response.data,
          picture: this.getFullImageUrl(response.data.picture),
        };
        // If the response contains the updated car in a different structure (like response.data.data), use this instead:
        // this.car = {
        //   ...response.data.data,
        //   picture: this.getFullImageUrl(response.data.data.picture),
        // };
      }

      return response;
    },
    async delete(id) {
      return await axiosWrapper.delete(`${baseUrl}/car/${id}`, {}, true);
    },
    getFullImageUrl(picture) {
      return `${baseUrl}/${picture}`;
    },
  },
});
