import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useCarTransactionStore = defineStore({
  id: "car_transaction",
  state: () => ({
    car_transactions: [],
    car_transaction: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/car-transaction`;

      const car_transactions = await axiosWrapper.get(url);

      if (car_transactions) {
        this.car_transactions = car_transactions.data;
      }
    },
    async show(id) {
      let url = `${baseUrl}/car-transaction/${id}`;

      const car_transactions = await axiosWrapper.get(url);

      if (car_transactions) {
        this.car_transactions = car_transactions.data;
      }
    },
    async fetchByStatus(status) {
      let url = `${baseUrl}/car-transaction/status/${status}`;

      const car_transactions = await axiosWrapper.get(url);

      if (car_transactions) {
        this.car_transactions = car_transactions.data;
      }
    },
    async add(data) {
      const car_transaction = await axiosWrapper.post(
        `${baseUrl}/car-transaction`,
        data,
        true
      );

      this.car_transaction = car_transaction.data;

      return car_transaction;
    },
    async take(id, data) {
      const formData = new FormData();
      formData.append("date", data.date);
      formData.append("time_taken", data.time_taken);
      formData.append("picture", data.picture);
      formData.append("driving_license", data.driving_license);

      const car_transaction = await axiosWrapper.put(
        `${baseUrl}/car-transaction/take/${id}`,
        formData,
        true,
        {
          headers: {
            "Content-Type": "Multipart/form-data",
          },
        }
      );

      this.car_transaction = car_transaction.data;

      return car_transaction;
    },
    async update(id, data) {
      return await axiosWrapper.put(
        `${baseUrl}/car-transaction/admin/${id}`,
        data,
        true
      );
    },
    async return(id, data) {
      return await axiosWrapper.put(
        `${baseUrl}/car-transaction/return/${id}`,
        data,
        true
      );
    },
    async delete(id) {
      return await axiosWrapper.delete(
        `${baseUrl}/car-transaction/${id}`,
        {},
        true
      );
    },
  },
});
