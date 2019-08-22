<template>
  <div class>
    <van-nav-bar
      class="barContain"
      v-if="showHeadFlag"
      :title="title"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-nav-bar class="barContain" v-else :title="title" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import menus from "@/config/narBarMenu";
export default {
    computed: {
        title() {
            return this.$route.meta.name;
        },
        showHeadFlag() {
            if (this._.findIndex(menus, { name: this.$route.meta.name }) === -1) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        onClickLeft() {
            this.$router.back();
        }
    }
};
</script>
<style lang='scss' scoped>
.barContain {
  background-color: #003592;
}
.van-nav-bar__title {
  color: #fff;
}
</style>