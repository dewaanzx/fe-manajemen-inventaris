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
				  {{ materialTransactionStore.material_transactions.user_name }}
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
		<div class="">
		  <div class="grid md:flex md:flex-row md:justify-around gap-2">
			<span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
			  >Material</span
			>
			<div class="grid gap-2 md:w-[80%]">
			  <div class="flex flex-col text-[12px] gap-1">
				<label for="" class="md:text-[16px]">Nama</label>
				<p class="md:text-[14px]" style="line-height: 1.2em">
				  {{ materialTransactionStore.material_transactions.material_name }}
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
	async mounted() {
	  const id = this.$route.params.id;
  
	  await this.materialTransactionStore.show(id);
	  const materialId = this.materialTransactionStore.material_transactions.material_id;
	  }
  };
  </script>
  ../../../stores/material_transaction.store../../../stores/material.store