<template>
  <base-page :pagedata="pageData" />
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BasePage from "#/BasePage.vue";

@Component({ components: { BasePage } })
export default class Department extends Vue {
  private readonly pageData = JSON.stringify(require("|/page/Department"));
}
</script>
