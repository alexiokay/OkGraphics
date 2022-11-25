import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "store",
  state: () => {
    return {
      section: "What",
    };
  },
  actions: {
    setSection(section) {
      this.section = section;
    },
  },
  getters: {
    getSection: (state) => state.section,
  },
});
