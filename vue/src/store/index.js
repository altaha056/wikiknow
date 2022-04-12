import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
  {
    id: 100,
    title: "Barcelona Football Club",
    slug: "barcelona-football-club",
    status: "draft",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/930d0efe-0b05-4aa0-87e6-ebcb75bea4c3/fc-barcelona-2021-22-stadium-home-football-shirt-cCWxpm.png",
    description:
      "Official FC Barcelona website. All news about the team, ticket sales, member services, supporters club services and information about Barça and the Club.",
    created_at: "2022-04-06 08:33:32",
    updated_at: "2022-04-06 08:33:32",
    expired_at: "2022-05-06 08:33:32",
    question: [
      {
        id: 1,
        type: "select",
        question: "From which country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f67e33a4-532c-41f9-9423-45d97de5b189",
              text: "Indonesia",
            },
            {
              uuid: "df0759c8-9987-4d8c-b24e-894a86215ca9",
              text: "Malaysia",
            },
            {
              uuid: "d50caa66-9745-42af-aeac-0a22608341b4",
              text: "Singapore",
            },
            {
              uuid: "8807b597-e6fa-49c6-ae62-6d100091345c",
              text: "Thailand",
            },
            {
              uuid: "35cc38d3-9535-41ae-8d90-07dddf825479",
              text: "Brunei Darussalam",
            },
          ],
        },
      },
      {
        id: 2,
        type: "radio",
        question: "What language of website you prefer?",
        description: null,
        data: {
          options: [
            {
              uuid: "f67e33a4-532c-41f9-9423-45d97de5b189",
              text: "Indonesia",
            },
            {
              uuid: "df0759c8-9987-4d8c-b24e-894a86215ca9",
              text: "Malaysia",
            },
            {
              uuid: "d50caa66-9745-42af-aeac-0a22608341b4",
              text: "Singapore",
            },
            {
              uuid: "8807b597-e6fa-49c6-ae62-6d100091345c",
              text: "Thailand",
            },
            {
              uuid: "35cc38d3-9535-41ae-8d90-07dddf825479",
              text: "Brunei Darussalam",
            },
          ],
        },
      },
      {
        id: 3,
        type: "checkbox",
        question: "What content of website you looking to see?",
        description: null,
        data: {
          options: [
            {
              uuid: "f67e33a4-532c-41f9-9423-45d97de5b189",
              text: "Football",
            },
            {
              uuid: "df0759c8-9987-4d8c-b24e-894a86215ca9",
              text: "Store",
            },
            {
              uuid: "d50caa66-9745-42af-aeac-0a22608341b4",
              text: "News",
            },
            {
              uuid: "8807b597-e6fa-49c6-ae62-6d100091345c",
              text: "Fact",
            },
            {
              uuid: "35cc38d3-9535-41ae-8d90-07dddf825479",
              text: "History",
            },
          ],
        },
      },
      {
        id: 4,
        type: "checkbox",
        question: "What player do you love most?",
        description: null,
        data: {
          options: [
            {
              uuid: "f67e33a4-532c-41f9-9423-45d97de5b189",
              text: "Messi",
            },
            {
              uuid: "df0759c8-9987-4d8c-b24e-894a86215ca9",
              text: "Neymar",
            },
            {
              uuid: "d50caa66-9745-42af-aeac-0a22608341b4",
              text: "Suarez",
            },
            {
              uuid: "8807b597-e6fa-49c6-ae62-6d100091345c",
              text: "Pedri",
            },
            {
              uuid: "35cc38d3-9535-41ae-8d90-07dddf825479",
              text: "Gavi",
            },
          ],
        },
      },
      {
        id: 5,
        type: "text",
        question: "What your most thing wanna do?",
        description: null,
        data: {},
      },
      {
        id: 6,
        type: "textarea",
        question: "What are you gonna do if you meet messi?",
        description:
          "please describe specifically the most thing you wanna do if you meet messi",
        data: {},
      },
    ],
  },
  {
    id: 200,
    title: "Laravel 9",
    slug: "laravel-9",
    status: "active",
    image: "https://i.imgur.com/xdKkzV3.png",
    description:
      "There are a variety of tools and frameworks available to you when building a web application. However, we believe Laravel is the best choice for building modern, full-stack web applications.",
    created_at: "2022-04-06 08:33:32",
    updated_at: "2022-04-06 08:33:32",
    expired_at: "2022-05-06 08:33:32",
    question: [],
  },
  {
    id: 300,
    title: "Vue 3",
    slug: "vue-3",
    status: "active",
    image: "https://cdn-media-1.freecodecamp.org/ghost/2019/03/vueart.png",
    description:
      "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.",
    created_at: "2022-04-06 08:33:32",
    updated_at: "2022-04-06 08:33:32",
    expired_at: "2022-05-06 08:33:32",
    question: [],
  },
  {
    id: 400,
    title: "Tailwind 3",
    slug: "tailwind-3",
    status: "active",
    image:
      "https://laravelnews.imgix.net/images/tailwindcss.png?ixlib=php-3.3.1",
    description:
      "Tailwind CSS, the utility-first framework, just released v1.0 and you can start using it today! For the launch of v1, the Tailwind team has been working hard on improving the documentation, highlighting what all it can do, and adjusting some of the API to add additional clarity.",
    created_at: "2022-04-06 08:33:32",
    updated_at: "2022-04-06 08:33:32",
    expired_at: "2022-05-06 08:33:32",
    question: [],
  },
];

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    suveys: [...tmpSurveys],
  },
  getters: {},
  actions: {
    register({ commit }, user) {
      return axiosClient.post("/register", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },

    login({ commit }, user) {
      return axiosClient.post("/login", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },

    logout({ commit }) {
      return axiosClient.post("/logout").then((response) => {
        commit("logout");
        return response;
      });
    },
  },
  mutations: {
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
      sessionStorage.removeItem("TOKEN");
    },

    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem("TOKEN", userData.token);
    },
  },
  modules: {},
});

export default store;
