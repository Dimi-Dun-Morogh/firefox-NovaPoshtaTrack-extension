<template>
  <div></div>
</template>
<script>
import { mapGetters } from 'vuex';
import { Notification } from 'element-ui';

export default {
  name: 'Notifications',
  computed: {
    ...mapGetters(['messagePool']),
  },
  watch: {
    messagePool: 'showNotification',
  },
  methods: {
    showNotification({ variant, msg, title }) {
      console.log(this.$notify, 'this notify');
      Notification.warning(msg, {
        title,
        variant,
        solid: true,
      });
    },
  },
};
</script>
