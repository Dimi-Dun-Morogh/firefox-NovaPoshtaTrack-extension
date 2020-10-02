<template>
 <div>
   <Notifications />
   <div class="title-wrap">
<span>Трек посылок <strong>NovaPoshta</strong></span>
   </div>
    <Form />
  <PackageInfo />
  <History />
 </div>
</template>

<script>
import Form from '@/components/Form.vue';
import PackageInfo from '@/components/PackageInfo.vue';
import History from '@/components/History.vue';
import Notifications from '@/components/Notifications.vue';

export default {
  name: 'App',
  components: {
    Form, PackageInfo, History, Notifications,
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
