import mutations from './mutations';

const notificationStore = {
  state: {
    messagePool: [],
  },
  getters: {
    messagePool: ({ messagePool }) => messagePool[messagePool.length - 1],
  },
  mutations: {
    [mutations.SHOW_TOAST_NOTIFY](state, msg) {
      state.messagePool.push(msg);
    },
  },
  actions: {
    shownotify({ commit }, msg) {
      commit(mutations.SHOW_TOAST_NOTIFY, msg);
    },
  },
};
export default notificationStore;
