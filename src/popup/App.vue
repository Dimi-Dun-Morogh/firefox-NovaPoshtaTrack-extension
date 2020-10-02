<template>
 <div>
   <Notifications />
   <SelectLanguage />
   <div class="title-wrap">
<span>{{title}}<strong>{{titleBrand}}</strong></span>
   </div>
    <Form :placeholder="placeholder"/>
  <PackageInfo :infoText="infoText"/>
  <History :historyText="historyText" />
 </div>
</template>

<script>
import Form from '@/components/Form.vue';
import PackageInfo from '@/components/PackageInfo.vue';
import History from '@/components/History.vue';
import Notifications from '@/components/Notifications.vue';
import SelectLanguage from '@/components/SelectLanguage.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Form, PackageInfo, History, Notifications, SelectLanguage,
  },
  mounted() {
    console.log(this.dictionary);
  },
  computed: {
    ...mapGetters('localizationStore', ['currentLanguage', 'dictionary']),
    title() {
      return this.dictionary[this.currentLanguage].appTitle.slice(0, -12);
    },
    titleBrand() {
      return this.dictionary[this.currentLanguage].appTitle.slice(-12);
    },
    placeholder() {
      return this.dictionary[this.currentLanguage].mainInputPlaceholder;
    },
    historyText() {
      return this.dictionary[this.currentLanguage].previousCalls;
    },
    infoText() {
      const {
        route, delivery_adress, delivery_date, providePhoneNum, receiversName, receiversPhone,
        sendersName, sendersPhone, packageDescription, ScheduledDeliveryDate,
      } = this.dictionary[this.currentLanguage];
      return {
        route,
        delivery_adress,
        delivery_date,
        providePhoneNum,
        receiversName,
        receiversPhone,
        sendersName,
        sendersPhone,
        packageDescription,
        ScheduledDeliveryDate,
      };
    },
  },
};
</script>

<style>
body {
  width: 400px;
  background-image: url('../assets/bg.png');
}
.title-wrap {
  display: flex;
  justify-content: center;
}
</style>
