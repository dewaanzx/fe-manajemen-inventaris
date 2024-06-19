import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useDriverStore = defineStore({
  id: "driver",
  state: () => ({
    drivers: [],
    driver: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/driver`;

      const drivers = await axiosWrapper.get(url);

      if (drivers) {
        this.drivers = drivers.data;
      }
    },
    async show(id) {
      let url = `${baseUrl}/driver/${id}`;

      const drivers = await axiosWrapper.get(url);

      if (drivers) {
        this.drivers = drivers.data;
      }
    },
    async add(data) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("picture", data.picture);
      console.log(data)
      const driver = await axiosWrapper.post(
        `${baseUrl}/driver/`,
        formData,
        true,
        {
          headers: {
            "Content-Type": "Multipart/form-data",
          },
        }
      );

      this.driver = driver.data;

      return driver;
    },
    async update(id, data) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("picture", data.picture);

      const driver = await axiosWrapper.put(
        `${baseUrl}/driver/${id}`,
        formData,
        true,
        {
          headers: {
            "Content-Type": "Multipart/form-data",
          },
        }
      );

      this.driver = driver.data;

      return driver;
    },
    async delete(id) {
      return await axiosWrapper.delete(`${baseUrl}/driver/${id}`, {}, true);
    },
  },
});
