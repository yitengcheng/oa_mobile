<template>
  <div id="app">
    <NarHead />
    <router-view class="mainContain" :style="'height:'+clientHeight"></router-view>
    <NarBar />
  </div>
</template>
<script>
import NarBar from "@/components/NarBar";
import NarHead from "@/components/NarHead";
export default {
    components: { NarBar, NarHead },
    data() {
        return {
            clientHeight: window.screen.height * 0.86 + "px"
        };
    }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mainContain {
  display: flex;
}
</style>
