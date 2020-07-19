import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    packageData: {},
  },
  getters: {
    packageData: ({ packageData }) => packageData,
  },
  mutations: {
    [mutations.PACKAGE_DATA](state, value) {
      state.packageData = value;
    },
  },
  actions: {
    async getPackageData({ commit }, id) {
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
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
export default store;
