<template>
  <el-select v-model="language" :placeholder="currentLanguage"
   size="mini" class="selectWrap" @change="onSelect">
    <el-option
      v-for="language in setOfLanguages"
      :key="language"
      :label="language"
      :value="language">
    </el-option>
  </el-select>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SelectLanguage',
  data: () => ({
    language: '',
  }),
  computed: {
    ...mapGetters('localizationStore', ['setOfLanguages', 'currentLanguage']),
  },
  methods: {
    ...mapActions('localizationStore', ['setLanguage']),
    onSelect() {
      this.setLanguage(this.language);
    },
  },
};
</script>
<style scoped>
.selectWrap {
  width: 70px;
  position: absolute;
  right: 0;
  top: 0;
}
.selectWrap >>> .el-input__inner:focus {
  border-color: #e02f2f66 !important;
}
</style>
