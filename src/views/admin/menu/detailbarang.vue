<template>
  <!-- main content -->
  <div class="mx-auto text-pinjamin flex flex-col gap-8">
    <!-- bagian form request -->
    <form
      action=""
      class="p-3 md:p-9 rounded-lg md:rounded-[36px] border border-[#D9D9D9] flex flex-col gap-5 md:gap-9"
    >
      <!-- form pinjaman -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Peminjam</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Nama</label>
              <p class="md:text-[14px]" style="line-height: 1.2em">
                {{ materialTransactionStore.material_transactions.borrower }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Pinjaman</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Tujuan</label>
              <p class="md:text-[14px]" style="line-height: 1.2em">
                {{ materialTransactionStore.material_transactions.destination }}
              </p>
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <p class="md:text-[14px] w-[90%]">
                {{ materialTransactionStore.material_transactions.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- date & time -->
      <div>
        <div class="grid md:flex md:flex-row md:justify-start gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Tanggal & Jam</span
          >
          <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
            <div class="grid grid-cols-4 gap-2">
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Tanggal</label>
                <p class="md:text-[14px]">
                  {{ materialTransactionStore.material_transactions.date_start }}
                </p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Jam</label>
                <p class="md:text-[14px]">
                  {{ materialTransactionStore.material_transactions.time_start }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- penumpang & driver -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-start gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Panumpang & Sopir</span
          >
          <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
            <div class="grid grid-cols-4 gap-2">
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Penumpang</label>
                <p class="md:text-[14px]">
                  {{ materialTransactionStore.material_transactions.passanger }}
                </p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Sopir</label>
                <p
                  class="md:text-[14px]"
                  v-if="materialTransactionStore.material_transactions.driver == 1"
                >
                  Ya
                </p>
                <p
                  class="md:text-[14px]"
                  v-if="materialTransactionStore.material_transactions.driver == 0"
                >
                  Tidak
                </p>
              </div>
            </div>
            <div class="text-[12px] flex flex-col gap-1">
              <label for="" class="md:text-[16px]">Deskripsi </label>
              <p class="md:text-[14px]">
                {{ materialTransactionStore.material_transactions.passanger_description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Status -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Status</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <p class="font-semibold md:text-[14px]">
                <a
                  :class="
                    materialTransactionStore.material_transactions.status == 'Diterima'
                      ? 'text-green-600'
                      : materialTransactionStore.material_transactions.status == 'Ditolak'
                      ? 'text-red-600'
                      : materialTransactionStore.material_transactions.status == 'Dicek'
                      ? 'text-gray-600'
                      : materialTransactionStore.material_transactions.status == 'Selesai'
                      ? 'text-gray-600'
                      : materialTransactionStore.material_transactions.status ==
                        'Digunakan'
                      ? 'text-orange-400'
                      : ''
                  "
                >
                  {{ materialTransactionStore.material_transactions.status }}</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
    <!-- box alert -->
    <div
      v-if="!materialTransactionStore.material_transactions.material_id"
      class="rounded-lg md:rounded-[36px] border border-[#D9D9D9] p-4 md:p-12 text-[11px] md:text-[16px] flex justify-center"
    >
      <p>
        Data mobil akan muncul jika permintaan peminjaman
        <span class="text-green-500 font-semibold">Diterima</span>
      </p>
    </div>

    <!-- box mobil -->
    <div
      v-if="materialTransactionStore.material_transactions.material_id"
      class="rounded-lg md:rounded-[36px] border border-[#D9D9D9] p-4 md:p-9 flex flex-col md:flex-row gap-3 md:gap-2"
    >
      <div class="w-[50%] md:w-[20%] h-[12vmax] rounded-sm m-auto md:m-0">
        <img
          :src="'http://api.pinjamin.appmedia.id/uploads/materials/' + materialStore.materials.picture"
          class="w-full h-[14vmax] md:h-[10vmax] md:w-[13vmax] rounded-md md:rounded-[20px]"
          style="object-fit: cover"
          alt=""
        />
      </div>
      <div class="flex flex-col gap-2 md:w-[80%] md:gap-2">
        <!-- Merk dan tipe mobil -->
        <div class="flex flex-col gap-2">
          <p
            class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
          >
            {{ materialStore.materials.name }}
          </p>
        </div>
        <!-- Kapasitas -->
        <!-- Nomor kendaraan -->
        <div class="flex flex-col">
          <p
            class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
          >
            Nomor kendaraan
          </p>
          <p class="text-[12px] md:text-[14px] text-center md:text-left">
            {{ materialStore.materials.license }}
          </p>
        </div>
      </div>
    </div>


    <!-- box bukti ambil mobil -->
    <div
      class="rounded-lg md:rounded-[36px] border border-[#D9D9D9] p-4 md:p-9 flex flex-col md:flex-row md:justify-around gap-3 md:gap-2 text-[12px] md:text-[16px]"
      v-if="materialTransactionStore.material_transactions.datetime_taken"
    >
      <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
        >Bukti ambil mobil</span
      >
      <div class="flex flex-col gap-3 md:gap-9 md:w-[80%]">
        <div>
          <!-- jam -->
          <span>Jam</span>
          <p class="md:text-[14px]">
            {{ materialTransactionStore.material_transactions.datetime_taken }}
          </p>
        </div>
        <div>
          <!-- Upload foto -->
          <span>Foto diri</span>
          <label class="flex flex-col rounded-lg">
            <div class="">
              <img
                :src="
                  'https://api.pinjamin.appmedia.id/uploads/materials_booking/' +
                  materialTransactionStore.material_transactions.picture
                "
                alt=""
                style="object-fit: cover"
                class="rounded-lg h-[20vmax] w-full"
              />
            </div>
          </label>
        </div>
        <div>
          <!-- Foto SIM -->
          <span>Foto SIM</span>
          <label class="flex flex-col rounded-lg">
            <div class="">
              <img
                :src="
                  'https://api.pinjamin.appmedia.id/uploads/materials_booking/' +
                  materialTransactionStore.material_transactions.driving_license
                "
                alt=""
                style="object-fit: cover"
                class="rounded-lg h-[20vmax] w-full"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useMaterialTransactionStore } from "../../../stores/material_transaction.store";
import { useMaterialStore } from "../../../stores/material.store";

export default {
  data() {
    return {
      materialTransactionStore: useMaterialTransactionStore(),
      materialStore: useMaterialStore(),
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.materialTransactionStore.show(id).then(() => {
      const materialId = this.materialTransactionStore.material_transactions.material_id;

      this.materialStore.show(materialId);
    });
  },
};
</script>
../../../stores/material_transaction.store../../../stores/material.store