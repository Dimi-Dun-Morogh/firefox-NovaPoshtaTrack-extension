<template>
 <div>
    <Form />
  <PackageInfo />
 </div>
</template>

<script>
import Form from '@/components/Form.vue';
import PackageInfo from '@/components/PackageInfo.vue';

export default {
  name: 'App',
  components: { Form, PackageInfo },
};
</script>

<style>
body {
  width: 400px;
  height: 400px;
}
</style>
