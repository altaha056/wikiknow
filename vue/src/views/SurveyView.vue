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
      <div>
        <div class="md:grid md:grid-cols-4 md:gap-6">
          <div class="md:col-span-2">
            <div class="sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                  <label
                    for="title"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input
                      v-model="model.title"
                      type="text"
                      name="title"
                      id="title"
                      class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      placeholder="survey's title"
                    />
                  </div>
                </div>

                <div>
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
                      placeholder="Describe about your survey here"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Cover
                  </label>
                  <div class="mt-1 flex items-center">
                    <img
                      v-if="model.image"
                      :src="model.image"
                      :alt="model.title"
                      class="h-64 h-48 object-cover"
                    />
                    <span
                      v-else
                      class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                    >
                      <svg
                        class="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </span>

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
                </div>
                <div>
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

              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
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
