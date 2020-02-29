<template>
  <div id="RulesModal" class="center">
    <div class="ModalContent">
      <div class="RulesText">
        RULES
        <img
          class="Close"
          src="../../../images/icon-close.svg"
          v-on:click="$emit('toggleModal')"
        />
      </div>
      <img id="RulesImg" src="../../../images/image-rules-bonus.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RulesModal"
};
</script>

<style scoped>
img {
  padding: 3%;
}
#RulesModal {
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow: auto;
  position: fixed;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
#RulesImg {
  padding: 5px;
}
.ModalContent {
  width: 25%;
  margin: 13% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 10px;
  background-color: #fefefe;
}
.RulesText {
  text-align: left;
  font-size: 2em;
  font-weight: 700;
  letter-spacing: 1px;
  padding-top: 8px;
  padding-left: 10px;
  padding-bottom: 20px;
}
.Close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.Close:hover,
.Close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

/* mobile view */
@media screen and (max-width: 480px) {
  .ModalContent {
    width: auto;
    height: 100%;
    margin: auto;
    border: none;
    border-radius: 0px;
  }
  .RulesText {
    text-align: center;
    font-size: 2.2em;
    padding-top: 2em;
    padding-bottom: 3em;
    padding-left: 0px;
  }
  .Close {
    top: 23em;
    left: 6em;
    position: absolute;
  }
}
</style>
