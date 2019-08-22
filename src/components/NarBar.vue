<template>
  <div class>
    <van-tabs
      background="#003592"
      title-active-color="#F39800"
      title-inactive-color="#fff"
      v-model="routerName"
      @click="onClick"
    >
      <van-tab v-for="(menu,index) in menus" :key="index" :title="menu.name" :name="menu.router"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import menus from "@/config/narBarMenu";
export default {
    data() {
        return {
            menus
        };
    },
    computed: {
        ...mapState({
            routerName: state => state.routerName
        }),
        routerName: {
            get() {
                return this.$route.name;
            },
            set(val) {
                this.updateRouterName(val);
            }
        }
    },
    methods: {
        ...mapMutations("routerName", ["updateRouterName"]),
        onClick(name, title) {
            this.$router.push({
                name
            });
        }
    }
};
</script>
<style lang='scss' scoped>
</style>