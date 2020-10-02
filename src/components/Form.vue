<template>
  <div class="wrap">
    <el-input placeholder="Введите  номер ТТН" v-model="input" class="search-input" >
      <el-button slot="append" icon="el-icon-search"
      @click="onClick" class="custom-btn"></el-button>
    </el-input>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import { Notification } from 'element-ui';

export default {
  name: 'Form',
  data: () => ({
    input: '',
  }),
  watch: {
    lastInput: 'updateInput',
  },
  computed: {
    ...mapGetters(['lastInput']),
  },
  methods: {
    ...mapActions(['getPackageData']),
    onClick() {
      const isValid = this.validate(this.input);
      if (!isValid) {
        Notification.error({
          title: 'Ошибка',
          message: 'введите 14 символов, только цифры',
        });
      } else {
        this.getPackageData({ id: this.input });
      }
    },
    updateInput() {
      this.input = this.lastInput;
    },
    validate(input) {
      // eslint-disable-next-line no-restricted-globals
      if (input.length < 14 || isNaN(input)) return false;
      return true;
    },
  },
};
</script>
<style scoped>
.el-input {
  width: 60%;
  margin-top: 10px;
}
.search-input >>> .el-input__inner:focus {
  border-color: rgba(226, 10, 10, 0.1) !important;
  outline: 0;
}

.custom-btn {
  background-color: #e02f2f !important;
  color: #ffff !important;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.wrap {
  display: flex;
  justify-content: center;
}
</style>
