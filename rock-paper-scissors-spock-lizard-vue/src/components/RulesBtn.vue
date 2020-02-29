<template>
  <div id="RulesBtn" v-on:click="$emit('toggleModal')">
    <div class="center RulesBtnText">RULES</div>
  </div>
</template>

<script>
export default {
  name: "RulesBtn"
};
</script>

<style>
#RulesBtn {
  float: right;
  height: 25px;
  width: 120px;
  margin-right: 25px;
  margin-bottom: 2em;
  border: 1px solid white;
  border-radius: 10px;
  padding: 8px;
  color: white;
  letter-spacing: 2px;
}
#RulesBtn:hover {
  cursor: pointer;
  animation-name: "hover-rules";
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
@keyframes hover-rules {
  from {
    background-color: none;
    color: white;
  }
  to {
    background-color: white;
    color: black;
  }
}
.RulesBtnText {
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
  #RulesBtn {
    float: none;
    margin: auto;
  }
}
</style>
