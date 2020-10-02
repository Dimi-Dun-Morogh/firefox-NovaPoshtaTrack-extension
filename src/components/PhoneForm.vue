<template>
  <div>
    <div class="wrap-phone">
        <el-input  v-model="phoneNumb"
        size="mini"
    class="search-input phone-input"
    @keydown.enter="getDetailedInfo">
    <el-button slot="append" icon="el-icon-arrow-right
" @click="getDetailedInfo"
     class="phoneBtn"></el-button>
    </el-input>
      </div>
    <span class="info"> вкажіть телефон отримувача чи відправника для дод. інформації</span>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Phoneform',
  data: () => ({
    phoneNumb: '',
  }),
  computed: {
    ...mapGetters(['lastInput', 'phone']),
  },
  mounted() {
    this.phoneNumb = this.phone;
  },
  methods: {
    ...mapActions(['getPackageData']),
    getDetailedInfo() {
      console.log(this.phoneNumb);
      this.getPackageData({ id: this.lastInput, Phone: this.phoneNumb });
    },
  },
};
</script>
<style scoped>
.wrap-phone {
  display: flex;
align-items: end;
width: 325px;
}
.phone-input {
  width: 55%;
  margin-top: 10px;
}
 .phone-input>>>.el-input__inner {
  height: 30px;
  border-radius: 0px;
border-right: 0px;
}
.phoneBtn  {
  font-size: 18px !important;
  color: red !important;
}

.phone-input  >>> .el-input__inner:focus {
     border-color: rgba(226, 10, 10, 0.1) !important;
    outline: 0;
}
.info {
  margin-top: 5px;
  display: block;
    font-size: 12px;
color: #828282;
font-family: Arial, Helvetica, sans-serif;
}
</style>
