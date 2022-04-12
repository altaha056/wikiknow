<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold text-gray-900">
          {{ model.id ? model.title : "create a survey" }}
        </h1>
      </div>
    </template>
    <form @submit.prevent="saveSurvey">
      <div class="shadow sm:rounded-md sm:overflow-hidden lg:w-1/2">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div>
            <label for="" class="block text-sm font-medium text-gray-700"
              >Image</label
            >
            <div class="flex mt-1 items-center">
              <img
                v-if="model.image"
                :src="model.image"
                :alt="model.title"
                class="h-64 h-48 object-cover"
              />
              <span
                v-else
                class="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-[80%] w-[80%] text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  /></svg
              ></span>

              <button
                type="button"
                class="cursor-pointer relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <input
                  type="file"
                  class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer"
                />
                Change
              </button>
            </div>
            <!-- title -->

            <div class="col-span-6 mt-5">
              <label for="title" class="block text-sm font-medium text-gray-700"
                >Title</label
              >
              <input
                v-model="model.title"
                type="text"
                name="title"
                id="title"
                autocomplete="title"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <!-- description -->
            <div class="mt-5">
              <label
                for="description"
                class="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div class="mt-1">
                <textarea
                  v-model="model.description"
                  id="description"
                  name="description"
                  rows="3"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <!-- expire date -->
            <div class="mt-5">
              <label
                for="expire_date"
                class="block text-sm font-medium text-gray-700"
              >
                Expire Date
              </label>
              <div class="mt-1">
                <input
                  type="date"
                  v-model="model.expire_date"
                  id="expire_date"
                  name="expire_date"
                  rows="3"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <!-- status -->
            <div class="flex items-start mt-5">
              <div class="flex items-center h-5">
                <input
                  id="status"
                  name="status"
                  type="checkbox"
                  v-model="model.status"
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="status" class="font-medium text-gray-700"
                  >Active</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </PageComponent>
</template>

<script setup>
import PageComponent from "../components/PageComponent.vue";
import { ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();

let model = ref({
  title: "",
  status: false,
  description: null,
  image: null,
  expire_date: null,
  questions: [],
});

if (route.params.id) {
  model.value = store.state.suveys.find(
    (s) => s.id === parseInt(route.params.id)
  );
}
</script>
