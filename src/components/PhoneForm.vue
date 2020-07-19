<template>
  <div>
    <div class="wrap-phone">
        <el-input  v-model="phone"
    class="search-input phone-input">
    </el-input>
       <el-button  icon="el-icon-check"
      class="phone-btn"></el-button>
      </div>
    <span class="info"> вкажіть телефон отримувача чи відправника для дод. інформації</span>
  </div>
</template>
<script>

export default {
  name: 'Phoneform',
  data: () => ({
    phone: '+380',
  }),
};
</script>
<style scoped>
.wrap-phone {
  display: flex;
align-items: end;
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
.phone-btn {
  height: 30px;
  position: relative;
    background-color: #e02f2f;
    color:#ffff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.phone-btn >>> .el-icon-check {
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
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
