<template>
  <div class="wrap-history" v-show="history.length">
    <span>Предыдущие запросы:</span>
    <ul>
      <li v-for="(item,index) in history" :key="index"
      @click="onClick(item)"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'History',
  computed: {
    ...mapGetters(['history']),
  },
  methods: {
    ...mapActions(['getPackageData']),
    onClick(item) {
      this.getPackageData(item);
    },
  },
};
</script>
<style scoped>
.wrap-history {
  margin-top: 10px;
}
ul {
  margin: 0;
  padding: 0;
  margin-top: 5px;
}
li {
  list-style: none;
  display: inline;
  cursor: pointer;
  color:rgb(76, 8, 235);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
