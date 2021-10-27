import axios from "axios";

export default {
  namespaced: true,

  state: {
    loggedIn: localStorage.getItem("loggedIn") || false,
    user: JSON.parse(localStorage.getItem("user")) || {},
  },

  getters: {},

  actions: {
    async login({ commit }, credentials) {
      await axios.get("sanctum/csrf-cookie");

      const response = (await axios.post("api/login", credentials)).data;

      localStorage.setItem("token", `Bearer ${response.token}`);
      axios.defaults.headers.common["Authorization"] =
        localStorage.getItem("token");

      const res = (await axios.get("api/me")).data;

      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("loggedIn", true);
      commit("setUser", res.data);
    },

    async logout({ commit }) {
      const response = (await axios.post("api/logout")).data;

      if (response) commit("logout");
    },

    async ftechUser({ commit }) {
      const res = (await axios.get("me")).data;

      await localStorage.setItem("user", res.data);
      commit("setUser", res.data);
    },
  },

  mutations: {
    setUser: (state, user) => {
      state.loggedIn = true;
      state.user = user;
    },
    logout: (state) => {
      state.user = {};
      state.loggedIn = false;

      localStorage.removeItem("loggedIn");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
};
