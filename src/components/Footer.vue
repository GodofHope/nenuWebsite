<!--
 * @Author: Mr.Hope
 * @LastEditors: Mr.Hope
 * @Description: 网页页脚
 * @Date: 2019-02-26 23:43:23
 * @LastEditTime: 2019-09-15 20:13:54
-->
<template>
  <a-layout-footer :class="slide ? 'withSlide' : ''">
    <a-row
      align="middle"
      class="text-center"
      justify="space-around"
      type="flex"
    >
      <a-col :lg="12" :xs="24" class="text-center">
        <img
          :src="`/img/icon/${
            $store.state.env.personal ? 'inNENU' : 'nenuyouth'
          }.png`"
          alt="Nenuyouth"
          class="mb-2 footerLogo"
        />
        <small class="d-block my-1 text-muted">{{
          $store.state.env.personal ? "in东师" : "东北师范大学校学生会"
        }}</small>
        <small class="d-block my-1 text-muted">辽ICP备18007023号</small>
        <small class="d-block mt-1 mb-2 text-muted">维护者：Mr.Hope</small>
      </a-col>
      <a-col :lg="6" :xs="12" class="text-sm-center">
        <h3 class="text-white">关于我们</h3>
        <div class="text-small">
          <div v-for="item in about" :key="item[2]" class="mb-1">
            <router-link :to="item[0]" class="text-muted" v-text="item[1]" />
          </div>
        </div>
      </a-col>
      <a-col :lg="6" :xs="12" class="text-sm-center">
        <h3 class="text-white">其他媒体</h3>
        <div class="text-small">
          <div v-for="item in media" :key="item[1]" class="mb-1">
            <a :href="item[0]" class="text-muted" v-text="item[1]" />
          </div>
        </div>
      </a-col>
    </a-row>
  </a-layout-footer>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  private about = [[]] as string[][];

  private readonly media = [
    [
      "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5MTQ4NjUzMg==&scene=126&bizpsid=0&subscene=0#wechat_redirectnpm",
      "微信",
    ],
    ["https://weibo.com/u/6385873676", "微博"],
    ["http://v.douyin.com/84sfcf/", "抖音"],
    ["http://wpa.qq.com/msgrd?v=3&uin=1793612094&site=qq&menu=yes", "QQ"],
  ];

  private created() {
    this.about = this.$store.state.env.personal
      ? [
          ["/page/MrHope", "关于Hope Studio"],
          ["/page/MrHope1", "关于Mr.Hope"],
          ["/page/MrHope3", "关于in东师"],
          ["/page/MrHope4", "致谢名单"],
        ]
      : [
          ["/about/studentUnion", "校学生会介绍"],
          ["/about/department", "部门分工"],
          ["/about/cooperation", "项目合作"],
          ["/page/MrHope1", "关于Mr.Hope"],
        ];
  }

  // 动态改变页脚样式
  private get slide() {
    return this.$store.state.slide.list.length;
  }
}
</script>
<style lang="scss" scoped>
/* 改变footer底色 */
#footer {
  background-color: #343a40;
  // 保证侧边栏展开时显示正常
  width: 100vw;
  // 保证lg以上屏幕footer的固定效果
  @media (min-width: 992px) {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
}

// 保证有侧边栏的屏幕的显示效果
#footer.withSlide {
  @media (min-width: 992px) {
    width: calc(100vw - 200px);
    left: 200px;
  }
}

.footerLogo {
  width: 50px;
  height: 50px;
}
</style>
