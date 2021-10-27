export default {
  namespaced: true,

  state: {
    message: null,
    error: {},
  },

  getters: {},

  actions: {},

  mutations: {
    error: (state, data) => {
      state.message = data.massage ?? null;
      state.error = data.errors ?? {};
    },
  },
};
