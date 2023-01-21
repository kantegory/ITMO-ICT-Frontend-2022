import { createStore } from "vuex";

export default createStore({
  state: {
    search: {
      keywords: "",
      location: "",
    },
    items: {
      groups: [],
      events: [],
    },
  },
  getters: {},
  mutations: {
    setSearch(state, payload) {
      state.search = payload;
    },
    setItems(state, payload) {
      state.items = payload;
    },
  },
  actions: {},
  modules: {},
});
