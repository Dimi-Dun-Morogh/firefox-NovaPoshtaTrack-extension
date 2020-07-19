import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    packageData: {},
    history: [],
    lastInput: '',
  },
  getters: {
    packageData: ({ packageData }) => packageData,
    history: ({ history }) => history,
    lastInput: ({ lastInput }) => lastInput,
  },
  mutations: {
    [mutations.PACKAGE_DATA](state, value) {
      state.packageData = value;
    },
    [mutations.HISTORY_DATA](state, value) {
      state.history.push(value);
    },
    [mutations.HISTORY_DATA_REPLACE](state, value) {
      state.history = value;
    },
    [mutations.MODIFY_INPUT](state, value) {
      state.lastInput = value;
    },
  },
  actions: {
    async getPackageData({ commit, dispatch }, id) {
      try {
        const response = await fetch(process.env.VUE_APP_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            modelName: 'TrackingDocument',
            calledMethod: 'getStatusDocuments',
            methodProperties: {
              Documents: [{
                MarketplacePartnerToken: '005056887b8d-a9f2-11e6-735b-be254fe6',
                DocumentNumber: id,
                // Phone: '',
              }],
            },
            language: 'ru',
          }),
        });
        const data = await response.json();
        commit(mutations.PACKAGE_DATA, data.data[0]);
        dispatch('updateHistory', id);
        commit(mutations.MODIFY_INPUT, id);
      } catch (error) {
        console.log(error);
      }
    },
    updateHistory({ commit }, id) {
      if (this.state.history.indexOf(id) === -1) {
        commit(mutations.HISTORY_DATA, id);
      }
      if (this.state.history.length > 5) this.state.history.shift();
      localStorage.setItem('NposhtaSeachHistory', JSON.stringify(this.state.history));
    },
    initHistory({ commit }) {
      const history = JSON.parse(localStorage.getItem('NposhtaSeachHistory'));
      if (history == null) return;
      if (history.length) {
        commit(mutations.HISTORY_DATA_REPLACE, history);
      }
    },
  },
  modules: {},
});
store.dispatch('initHistory');
export default store;
