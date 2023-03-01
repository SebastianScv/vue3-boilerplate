import { createStore } from "vuex";
import boilerplateModule from "./boilerplate-store";

const store = createStore({
  modules: {
    BoilerplateModule: boilerplateModule,
  },
});

export default store;
