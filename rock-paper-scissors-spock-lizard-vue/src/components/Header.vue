<template>
  <div id="Header" class="row">
    <div class="column">
      <img id="Logo" src="../../../images/logo-bonus.svg" />
    </div>
    <div class="column">
      <ScoreBoard :score="score"></ScoreBoard>
    </div>
  </div>
</template>

<script>
import ScoreBoard from "./ScoreBoard.vue";

export default {
  name: "Header",
  props: ["score"],
  components: {
    ScoreBoard
  }
};
</script>

<style scoped>
#Header {
  margin: auto;
  margin-top: 50px;
  width: 50%;
  border: 3px solid hsl(217, 16%, 45%);
  border-radius: 15px;
  position: relative;
}
#Logo {
  padding-top: 20px;
  padding-left: 30px;
}
/* mobile view */
@media screen and (max-width: 480px) {
  #Header {
    width: 100%;
    margin-top: 0px;
  }
  #Logo {
    width: 35%;
    padding-top: 25px;
    padding-left: 25px;
  }
}
</style>
