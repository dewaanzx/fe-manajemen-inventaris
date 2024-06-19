import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useRoomTransactionStore = defineStore({
  id: "room_transaction",
  state: () => ({
    room_transactions: [],
    room_transaction: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/room-transaction`;

      const room_transactions = await axiosWrapper.get(url);

      if (room_transactions) {
        this.room_transactions = room_transactions.data;
      }
    },
    async show(id) {
      let url = `${baseUrl}/room-transaction/${id}`;

      const room_transactions = await axiosWrapper.get(url);

      if (room_transactions) {
        this.room_transactions = room_transactions.data;
      }
    },
    async fetchByStatus(status) {
      let url = `${baseUrl}/room-transaction/status/${status}`;

      const room_transactions = await axiosWrapper.get(url);

      if (room_transactions) {
        this.room_transactions = room_transactions.data;
      }
    },
    async add(data) {
      console.log(data);
      console.log("tes");
      const room_transaction = await axiosWrapper.post(
        `${baseUrl}/room-transaction`,
        data,
        true
      );

      this.room_transaction = room_transaction.data;

      return room_transaction;
    },
    async update(id, data) {
      return await axiosWrapper.put(
        `${baseUrl}/room-transaction/${id}`,
        data,
        true
      );
    },
    async delete(id) {
      return await axiosWrapper.delete(
        `${baseUrl}/room-transaction/${id}`,
        {},
        true
      );
    },
  },
});
