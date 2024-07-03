import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useMaterialTransactionStore = defineStore({
  id: "material_transaction",
  state: () => ({
    material_transactions: [],
    material_transaction: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/material-transaction`;

      const material_transactions = await axiosWrapper.get(url);

      if (material_transactions) {
        this.material_transactions = material_transactions.data;
      }
    },
    async show(id) {
      let url = `${baseUrl}/material-transaction/${id}`;

      const material_transactions = await axiosWrapper.get(url);

      if (material_transactions) {
        this.material_transactions = material_transactions.data;
      }
    },
    async fetchByStatus(status) {
      let url = `${baseUrl}/material-transaction/status/${status}`;

      const material_transactions = await axiosWrapper.get(url);

      if (material_transactions) {
        this.material_transactions = material_transactions.data;
      }
    },
    async add(data) {
      const material_transaction = await axiosWrapper.post(
        `${baseUrl}/material-transaction`,
        data,
        true
      );

      this.material_transaction = material_transaction.data;

      return material_transaction;
    },
    async take(id, data) {
      const formData = new FormData();
      formData.append("date", data.date);
      formData.append("time_taken", data.time_taken);
      formData.append("picture", data.picture);
      formData.append("driving_license", data.driving_license);

      const material_transaction = await axiosWrapper.put(
        `${baseUrl}/material-transaction/take/${id}`,
        formData,
        true,
        {
          headers: {
            "Content-Type": "Multipart/form-data",
          },
        }
      );

      this.material_transaction = material_transaction.data;

      return material_transaction;
    },
    async update(id, data) {
      return await axiosWrapper.put(
        `${baseUrl}/material-transaction/admin/${id}`,
        data,
        true
      );
    },
    async return(id, data) {
      return await axiosWrapper.put(
        `${baseUrl}/material-transaction/return/${id}`,
        data,
        true
      );
    },
    async delete(id) {
      return await axiosWrapper.delete(
        `${baseUrl}/material-transaction/${id}`,
        {},
        true
      );
    },
  },
});
