import mutations from './mutations';
import dictionaryItems from './dictionary';

const localizationStore = {
  namespaced: true,
  state: {
    currentLanguage: 'UA',
    setOfLanguages: ['UA', 'RU', 'EN'],
    dictionary: dictionaryItems,
  },
  getters: {
    currentLanguage: ({ currentLanguage }) => currentLanguage,
    setOfLanguages: ({ setOfLanguages }) => setOfLanguages,
    dictionary: ({ dictionary }) => dictionary,
  },
  mutations: {
    [mutations.SET_CURRENT_LANGUAGE](state, data) {
      state.currentLanguage = data;
    },
  },
  actions: {
    setLanguage({ commit }, data) {
      commit(mutations.SET_CURRENT_LANGUAGE, data);
      localStorage.setItem('novaPoshtaLang', JSON.stringify(data));
    },
  },
};

export default localizationStore;
