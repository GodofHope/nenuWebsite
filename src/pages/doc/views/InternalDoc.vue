<!--
 * @Author: Mr.Hope
 * @LastEditors: Mr.Hope
 * @Description: Internal Doc Display
 * @Date: 2019-04-01 23:35:43
 * @LastEditTime: 2019-11-19 22:04:19
-->
<template>
  <MyDoc
    :baselength="baselength"
    :loading="$store.state.docLoading"
    :path="path"
  />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyDoc from "../components/MyDoc.vue";
import { Route } from "vue-router";
import axios from "axios";
import getCompiledMarkdown from "../utils/getMarkdown";

@Component({ components: { MyDoc } })
export default class InternalDoc extends Vue {
  // the length of url base part
  private readonly baselength = 5;

  // doc path
  private get path() {
    return this.$route.path.slice(this.baselength) || "readme";
  }

  private activated() {
    // display menu
    axios.get("/Res/doc/menu.json").then((response) => {
      this.$store.commit("menuList", response.data);
    });
    this.$store.commit("menuTitle", "内部文档");
  }

  private deactivated() {
    // hide menu
    this.$store.commit("menuList", []);
  }

  // change docPath
  private async beforeRouteUpdate(
    to: Route,
    from: Route,
    next: (navigate?: boolean) => void
  ) {
    const path = to.path.slice(this.baselength) || "readme";
    console.log(path);

    let navigate = true;

    // show loading status
    this.$store.commit("loadDoc", true);

    // if markdown of this page hasn't been cached
    if (!this.$store.state.compiledDoc[path])
      // decide whether nagivate or not based on the result of getting markdown files
      navigate = await getCompiledMarkdown(
        "/server/doc",
        {
          path,
          password: this.$store.state.password.internal,
        },
        this,
        "compiledDoc"
      );

    // invoke Hook
    next(navigate);
  }
}
</script>
