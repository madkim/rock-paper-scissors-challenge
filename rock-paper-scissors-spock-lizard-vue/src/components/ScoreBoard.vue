<template>
  <div id="ScoreBoard" class="center">
    <div class="center">
      <div class="ScoreText">SCORE</div>
      <div class="Score">{{score}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScoreBoard",
  props: ["score"]
};
</script>

<style scoped>
#ScoreBoard {
  float: right;
  width: 35%;
  margin: 20px;
  border: 1px solid hsl(217, 16%, 45%);
  padding: 10px;
  background: white;
  border-radius: 10px;
}
.ScoreText {
  color: hsl(229, 64%, 46%);
  letter-spacing: 1px;
  font-size: medium;
  font-weight: bold;
  margin-top: 5px;
}
.Score {
  font-size: 3.5em;
  color: hsl(229, 25%, 31%);
  letter-spacing: 1px;
  font-weight: bold;
}
/* mobile view */
@media screen and (max-width: 480px) {
  #ScoreBoard {
    float: right;
    width: 50%;
    padding: 5px;
    margin: 10px;
  }
  .ScoreText {
    font-size: small;
  }
  .Score {
    font-size: 2.2em;
  }
}
</style>
