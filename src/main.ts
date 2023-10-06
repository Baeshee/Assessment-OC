import { createApp } from "vue";
import "./styles/main.scss";
import App from "./App.vue";
import { createStore } from "vuex";

const app = createApp(App);

const store = createStore({
  state() {
    return {
      index: 0,
      selectedItem: {},
      allItems: [],
    };
  },
  mutations: {
    navigate(state: any, payload: number) {
      state.index = payload;
    },
    setSelectedItem(state: any, payload: Record<string, any>) {
      state.selectedItem = payload;
    },
    setAllItems(state: any, payload: []) {
      state.allItems = payload;
    },
  },
});

app.use(store);
app.mount("#app");
