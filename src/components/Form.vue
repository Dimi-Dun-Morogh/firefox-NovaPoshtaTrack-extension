<template>
  <div class="wrap">
    <el-input placeholder="Введите  номер ТТН" v-model="input"
    class="search-input">
      <el-button slot="append" icon="el-icon-search" @click="onClick"
      class="custom-btn"></el-button>
    </el-input>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'Form',
  data: () => ({
    input: '',
  }),
  methods: {
    ...mapActions(['getPackageData']),
    onClick() {
      this.getPackageData(this.input);
    },
  },
};
</script>
<style scoped>
.el-input {
  width: 60%;
  margin-top: 15px;
}
.search-input  >>> .el-input__inner:focus {
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
