<template>
  <SECtion class="w-[80%] mx-auto flex flex-col gap-8">
    <!-- bagian breadcrum -->
    <header class="bg-red-200">Ini Breadcumb</header>
    <!-- ini bagian notifikasi -->
    <article class="flex flex-col gap-3">
      <div v-for="notification in notificationStore.notifications">
        <RouterLink
          v-if="notification.type == `Car`"
          :to="
            '/users/riwayat-pinjam-mobil-detail/' + notification.transaction_id
          "
        >
          <div
            class="bg-[#ECF8FF] p-4 md:p-9 rounded-xl text-[11px] flex flex-row gap-4 md:gap-9 shadow-sm hover:bg-blue-100"
          >
            <div
              class="bg-[#0C6898] rounded-full p-3 flex justify-center items-center"
            >
              <img
                src="../../assets/car-side.svg"
                alt=""
                class="w-[2vmax] h-[2vmax]"
              />
            </div>
            <div class="flex flex-col gap-1 no-wrap">
              <P style="line-height: 1.2em" class="md:text-[16px]">{{
                notification.notification
              }}</P>
              <p class="text-[9px] md:text-[14px] text-[#404040]">
                {{ notification.timeago }}
              </p>
            </div>
          </div>
        </RouterLink>
        <RouterLink
          v-if="notification.type == `Room`"
          :to="
            '/users/riwayat-pinjam-ruangan-detail/' +
            notification.transaction_id
          "
        >
          <div
            class="bg-[#ECF8FF] p-4 md:p-9 rounded-xl text-[11px] flex flex-row gap-4 md:gap-9 shadow-sm hover:bg-blue-100"
          >
            <div
              class="bg-[#E26B00] rounded-full p-3 flex justify-center items-center"
            >
              <img
                src="../../assets/Group.svg"
                alt=""
                class="w-[2vmax] h-[2vmax]"
              />
            </div>
            <div class="flex flex-col gap-1 no-wrap">
              <P style="line-height: 1.2em" class="md:text-[16px]">{{
                notification.notification
              }}</P>
              <p class="text-[9px] md:text-[14px] text-[#404040]">
                {{ notification.timeago }}
              </p>
            </div>
          </div>
        </RouterLink>
      </div>
    </article>
  </SECtion>
</template>
<script>
import { RouterLink } from "vue-router";
import { useNotificationStore } from "../../stores/notification.store";

export default {
  data() {
    return {
      notificationStore: useNotificationStore(),
    };
  },
  methods: {},
  mounted() {
    this.notificationStore.fetch();
  },
  components: { RouterLink },
};
</script>
