<template>
  <div  class="wrap" v-show="Object.keys(packageData).length">
    <!-- v-show="Object.keys(packageData).length" -->
    <div class="status"><span>{{packageData.Status}}</span> |
     <span>{{packageData.RecipientDateTime}}</span></div>
    <ul>
      <li class="info">Маршрут</li>
      <li>{{packageData.CitySender}} - {{packageData.CityRecipient}}</li>
      <li class="info">Адреса доставки:</li>
      <li class="adress">{{packageData.WarehouseRecipient}}</li>
      <li class="info">Дата прибуття:</li>
      <li>{{packageData.ActualDeliveryDate}}</li>
    </ul>
    <PhoneForm  v-show="showPhone" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import PhoneForm from '@/components/PhoneForm.vue';

export default {
  name: 'PackageInfo',
  components: { PhoneForm },
  data: () => ({
    showPhone: false,
  }),
  computed: {
    ...mapGetters(['packageData']),
  },
};
</script>
<style scoped>
.wrap {
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  padding: 10px;
  margin-top: 10px;
  background-color: #fff;
}
ul{
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  font-size: 16px;
color: #333333;
}
.info {
  font-size: 12px;
color: #828282;
font-family: Arial, Helvetica, sans-serif;
margin-top: 10px;
}
.adress {
  color:red;
  font-size: 18px;
}
</style>
