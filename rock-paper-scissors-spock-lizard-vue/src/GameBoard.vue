<template>
  <div id="GameBoard">
    <Header :score="score"></Header>
    <ChooseWeapon v-if="!battling" v-on:weaponSelected="beginBattle"></ChooseWeapon>
    <Battle
      :userWeapon="weapon"
      v-if="battling"
      v-on:resetGame="resetGame()"
      v-on:updateScore="updateScore"
    ></Battle>
    <RulesBtn v-on:toggleModal="toggleModal()"></RulesBtn>
    <RulesModal v-on:toggleModal="toggleModal()" v-if="showModal"></RulesModal>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Battle from "./components/Battle.vue";
import RulesBtn from "./components/RulesBtn.vue";
import RulesModal from "./components/RulesModal.vue";
import ChooseWeapon from "./components/ChooseWeapon.vue";

export default {
  name: "GameBoard",
  components: {
    Header,
    Battle,
    RulesBtn,
    RulesModal,
    ChooseWeapon
  },
  mounted() {
    this.score = this.getScore();
  },
  data() {
    return {
      showModal: false,
      battling: false,
      weapon: "",
      score: 0
    };
  },
  methods: {
    getScore() {
      return localStorage.getItem("storedScore") || 0;
    },
    setScore() {
      localStorage.setItem("storedScore", this.score);
    },
    updateScore(point) {
      this.score = parseInt(this.score) + parseInt(point);
      this.score = this.score < 0 ? 0 : this.score; // Keeps score from from being neg values
      this.setScore();
    },
    resetGame() {
      this.battling = false;
      this.weapon = "";
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    beginBattle(weaponSelected) {
      this.weapon = weaponSelected;
      this.battling = true;
    }
  }
};
</script>

<style >
/* mobile view */
@media screen and (max-width: 480px) {
  #GameBoard {
    padding: 8%;
  }
}
</style>
