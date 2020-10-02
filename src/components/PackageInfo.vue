<template>
  <div  class="wrap" v-show="Object.keys(packageData).length">
    <div class="status"><span>{{packageData.Status}}</span> |
     <span>{{packageData.RecipientDateTime}}</span></div>
    <ul>
      <li class="info">{{infoText.route}}</li>
      <li>{{packageData.CitySender}} - {{packageData.CityRecipient}}</li>
      <li class="info">{{infoText.delivery_adress}}:</li>
      <li class="adress">{{packageData.WarehouseRecipient}}</li>
      <li class="info">{{infoText.delivery_date}}:</li>
      <li>{{packageData.ActualDeliveryDate}}</li>
    </ul>
    <PhoneForm  v-show="showPhone" :phoneNum="infoText.providePhoneNum"/>
    <ul v-show="showDetailed">
      <li class="info">{{infoText.receiversName}}</li>
      <li>{{packageData.RecipientFullName}}</li>
      <li class="info" v-show="!recepientOrSendersPhone">{{infoText.receiversPhone}}</li>
      <li>{{packageData.PhoneRecipient}}</li>
      <li class="info">{{infoText.sendersName}}</li>
      <li>{{packageData.SenderFullNameEW}}</li>
      <li class="info" v-show="recepientOrSendersPhone">{{infoText.sendersPhone}}</li>
      <li>{{packageData.PhoneSender}}</li>
      <li class="info">{{infoText.packageDescription}}</li>
      <li>{{packageData.CargoDescriptionString}}</li>
      <li class="info">{{infoText.ScheduledDeliveryDate}}</li>
      <li>{{packageData.ScheduledDeliveryDate}}</li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import PhoneForm from '@/components/PhoneForm.vue';

export default {
  name: 'PackageInfo',
  components: { PhoneForm },
  props: ['infoText'],
  data: () => ({
    showPhone: true,
  }),
  computed: {
    ...mapGetters(['packageData', 'showDetailed']),
    recepientOrSendersPhone() {
      console.log(this.packageData.PhoneRecipient === undefined, 'thisPhoneRecepient', this.packageData.PhoneRecipient);
      return this.packageData.PhoneRecipient === undefined;
    },
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
