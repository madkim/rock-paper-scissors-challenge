<template>
  <div id="ChooseWeapon" class="center">
    <Weapon type="spock" size="medium" class="spock-pos" v-on:selected="selectWeapon"></Weapon>
    <Weapon type="scissors" size="medium" class="scissors-pos" v-on:selected="selectWeapon"></Weapon>
    <Weapon type="paper" size="medium" class="paper-pos" v-on:selected="selectWeapon"></Weapon>
    <div id="ChooseBase">
      <img src="../../../images/bg-pentagon.svg" />
    </div>
    <Weapon type="lizard" size="medium" class="lizard-pos" v-on:selected="selectWeapon"></Weapon>
    <Weapon type="rock" size="medium" class="rock-pos" v-on:selected="selectWeapon"></Weapon>
  </div>
</template>

<script>
import Weapon from "./Weapon.vue";

export default {
  name: "ChooseWeapon",
  components: {
    Weapon
  },
  methods: {
    selectWeapon(weapon) {
      this.$emit("weaponSelected", weapon);
    }
  }
};
</script>

<style scoped>
img {
  width: 21em;
}
#ChooseWeapon {
  height: 24em;
  padding: 50px;
  position: relative;
}
#ChooseBase {
  top: 1em;
  left: 15.5em;
  z-index: -2;
  position: absolute;
  margin-top: 100px;
}
.rock-pos {
  top: 23em;
  left: 28em;
}
.paper-pos {
  top: 11em;
  left: 32em;
}
.scissors-pos {
  top: 3em;
  left: 21.5em;
}
.lizard-pos {
  top: 23em;
  left: 15em;
}
.spock-pos {
  top: 11em;
  left: 11em;
}
/* mobile view */
@media screen and (max-width: 480px) {
  img {
    width: 13em;
  }
  #ChooseWeapon {
    height: 32em;
    padding: 0px;
  }
  #ChooseWeapon.center {
    width: 100%;
  }
  #ChooseBase {
    top: 5em;
    left: 3em;
    z-index: -2;
    text-align: center;
    margin-top: 93px;
    margin-bottom: 165px;
  }
  .rock-pos {
    top: 20em;
    left: 11em;
  }
  .paper-pos {
    top: 12em;
    left: 13em;
  }
  .scissors-pos {
    top: 7em;
    left: 6.5em;
  }
  .lizard-pos {
    top: 20em;
    left: 2em;
  }
  .spock-pos {
    top: 12em;
    left: 0em;
  }
}
</style>
