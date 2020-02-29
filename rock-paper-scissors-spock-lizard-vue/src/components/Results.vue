<template>
  <div id="Results">
    <h1 v-if="victory" class="result-msg">YOU WIN</h1>
    <h1 v-else class="result-msg">YOU LOSE</h1>
    <div id="PlayAgainBtn" v-on:click="$emit('playAgain')">
      <div class="PlayAgainBtnText">PLAY AGAIN</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: ["victory"]
};
</script>

<style>
h1.result-msg {
  color: white;
  font-size: 4em;
  margin-bottom: 5%;
}
#Results {
  margin-top: 45%;
}
#PlayAgainBtn {
  margin: auto;
  height: 25px;
  width: 200px;
  border: 1px solid white;
  padding: 8px;
  border-radius: 10px;
  letter-spacing: 2px;
  background-color: white;
}
#PlayAgainBtn:hover {
  cursor: pointer;
  animation-name: "hover-play-again";
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
}
@keyframes hover-play-again {
  from {
    color: black;
  }
  to {
    color: red;
  }
}

.PlayAgainBtnText {
  font-size: large;
  font-weight: bold;
  /* Keep text from being highlighted */
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}
@media screen and (max-width: 480px) {
  h1.result-msg {
    font-size: 3.5em;
  }
}
</style>
