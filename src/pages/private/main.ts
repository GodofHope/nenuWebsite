/* eslint-disable sort-imports */
/*
 * @Author: Mr.Hope
 * @LastEditors: Mr.Hope
 * @Description: 内部页面入口文件
 * @Date: 2019-02-27 00:00:08
 * @LastEditTime: 2019-11-07 16:20:38
 */

// 引入Ant Design
import {
  Button,
  Col,
  Divider,
  Dropdown,
  Form,
  Icon,
  Input,
  InputNumber,
  Layout,
  Menu,
  Modal,
  Radio,
  Row,
  Select,
  Steps,
  Tooltip,
  Upload,
  message,
} from "ant-design-vue";
import Vue from "vue";

// 引入配置好的VueRouter与Vuex
import router from "./router";
import store from "@/store";

// 引入Service-Worker
import registerSW from "@/service-worker";

// 引入Vue根元素
import Private from "./Private.vue";

// 自定义css样式
import "%/customBootstrap.scss";
import "%/public.scss";

// 使用ant-design
Vue.use(Button);
Vue.use(Col);
Vue.use(Divider);
Vue.use(Dropdown);
Vue.use(Form);
Vue.use(Icon);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(Radio);
Vue.use(Row);
Vue.use(Select);
Vue.use(Steps);
Vue.use(Tooltip);
Vue.use(Upload);

// 配置message
message.config({
  top: "50px",
  duration: 3,
  maxCount: 3,
});

// 向Vue中封装ant-design方法
// eslint-disable-next-line @typescript-eslint/unbound-method
Vue.prototype.$confirm = Modal.confirm;
// eslint-disable-next-line @typescript-eslint/unbound-method
Vue.prototype.$error = Modal.error;
// eslint-disable-next-line @typescript-eslint/unbound-method
Vue.prototype.$info = Modal.info;
Vue.prototype.$message = message;
// eslint-disable-next-line @typescript-eslint/unbound-method
Vue.prototype.$success = Modal.success;
// eslint-disable-next-line @typescript-eslint/unbound-method
Vue.prototype.$warning = Modal.warning;

// 注册IconFont
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1273079_70n5h1r9w.js",
});

// 全局注册IconFont
Vue.component("icon-font", IconFont);

// 注册service worker
registerSW(store);

// 阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false;
// 声明Vue实例
new Vue({
  router,
  store,
  render: (h) => h(Private), // render函数创建了一个元素
}).$mount("#app"); // 创建元素被挂载到id='app'元素上，挂载时会销毁被挂载元素实例
