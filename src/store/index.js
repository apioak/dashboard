import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用户Token。
    token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
    //路由参数
    routerParams: localStorage.getItem("routerParams")
      ? JSON.parse(localStorage.getItem("routerParams"))
      : {},
    currentPage: localStorage.getItem("currentPage") ? localStorage.getItem("currentPage") : 1,
  },
  mutations: {
    /**
     * 更新token。
     */
    setToken(state, token) {
      window.localStorage.setItem("token", token);
      state.token = token;
    },
    /**
     * 路由参数
     * @param state
     * @param routerParams
     */
    setRouterParams(state, routerParams) {
      state.routerParams[routerParams.name] = routerParams.params;
      window.localStorage.setItem(
        "routerParams",
        JSON.stringify(state.routerParams)
      );
    },
    setCurrentPage(state, page) {
      window.localStorage.setItem("currentPage", page)
      state.currentPage = page
    }
  },
  actions: {},
  modules: {},
});
