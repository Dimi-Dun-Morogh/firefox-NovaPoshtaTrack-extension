import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import notificationStore from './notifications';
import localizationStore from './localization';

Vue.use(Vuex);
//! записать номер телефона в локал сторейдж
const store = new Vuex.Store({
  state: {
    packageData: {},
    history: [],
    lastInput: '',
    showDetailed: false,
    phone: '+380',
  },
  getters: {
    packageData: ({ packageData }) => packageData,
    history: ({ history }) => history,
    lastInput: ({ lastInput }) => lastInput,
    showDetailed: ({ showDetailed }) => showDetailed,
    phone: ({ phone }) => phone,
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
    [mutations.SHOW_DETAILED](state, boolean) {
      state.showDetailed = boolean;
    },
    [mutations.SET_PHONE](state, value) {
      state.phone = value;
    },
  },
  actions: {
    async getPackageData({ commit, dispatch }, { id, Phone }) {
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
                Phone,
              }],
            },
            language: 'ru',
          }),
        });
        const data = await response.json();
        commit(mutations.PACKAGE_DATA, data.data[0]);
        dispatch('updateHistory', { id, Phone });
        commit(mutations.MODIFY_INPUT, id);
        commit(mutations.SHOW_DETAILED, data.data[0].PhoneSender !== undefined
           || data.data[0].PhoneRecipient !== undefined);
        if (data.warnings.length && Phone) dispatch('showError', data.warnings);
      } catch (error) {
        console.log(error);
      }
    },
    updateHistory({ commit }, { id, Phone }) {
      if (this.state.history.indexOf(id) === -1) {
        commit(mutations.HISTORY_DATA, id);
      }
      if (this.state.history.length > 5) this.state.history.shift();
      localStorage.setItem('NposhtaSeachHistory', JSON.stringify(this.state.history));
      if (Phone) localStorage.setItem('NpostaPhone', JSON.stringify(Phone));
    },
    initHistory({ commit, dispatch }) {
      const history = JSON.parse(localStorage.getItem('NposhtaSeachHistory'));
      const phone = JSON.parse(localStorage.getItem('NpostaPhone'));
      const selectedLang = JSON.parse(localStorage.getItem('novaPoshtaLang'));
      if (history == null) return;
      if (history.length) {
        commit(mutations.HISTORY_DATA_REPLACE, history);
      }
      if (phone !== null) {
        commit(mutations.SET_PHONE, phone);
      }
      if (selectedLang !== null) {
        console.log(selectedLang);
        dispatch('localizationStore/setLanguage', selectedLang, { root: true });
      }
    },
    showError({ dispatch }, errorsArray) {
      const [errorMsg] = Object.values(errorsArray[0]);
      dispatch(
        'shownotify',
        {
          msg: errorMsg,
          title: 'error',
          variant: 'danger',
        },
        { root: true },
      );
    },
  },
  modules: { notificationStore, localizationStore },
});
store.dispatch('initHistory');
export default store;
