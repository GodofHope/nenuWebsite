<template>
  <div :id="myId" class="phoneCtn">
    <Phone class="phoneIcon" />
    <div class="phoneNum" v-text="num" />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Phone from "|/icon/phone.svg";

@Component({ components: { Phone } })
export default class BasePhone extends Vue {
  @Prop(Number) private readonly myId!: number;

  @Prop({ type: [String, Number], required: true })
  private readonly num!: string | number;
}
</script>
<style lang="stylus" scoped>
.phoneCtn
  display -webkit-flex
  display flex
  align-items center
  padding 0 15px
  line-height 2.5
  background-color #fefefe
  max-width 600px
  margin 0 auto

.phoneIcon
  width 24px
  height 24px
  margin-right 15px

.phoneNum
  font-size 20px
  font-weight 400
  flex 1 1 auto
  text-align left

.nm .phoneCtn
  background-color #10110b !important
  color #fff !important
</style>
