<template>
  <div>
    <div class="ydc-entered-box">
      <div class="ydc-content-right">
        <RightHead/>
        <RightBanner/>
        <!-- gongGao begin -->
        <div class="ydc-loading-box">
          <Tabpanel />
        </div>
        <!-- gongGao End -->
      </div>
    </div>
  </div>
</template>


<script>
import Tabpanel from "@/components/tabpanel"
import RightHead from "@/components/rightHead"
import RightBanner from "@/components/rightBanner"

export default {
  name: "index",
  components: {Tabpanel, RightHead, RightBanner}
};
</script>


<style lang="css" scoped>
.ydc-loading-box {
    margin-top: 20px;
    border: 1px solid #ddd;
    /* border-radius: 53px; */
    padding-bottom: 40px;
}
</style>