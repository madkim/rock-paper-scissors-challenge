import Vue from "vue";
import GameBoard from "./GameBoard.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(GameBoard)
}).$mount("#GameBoard");
