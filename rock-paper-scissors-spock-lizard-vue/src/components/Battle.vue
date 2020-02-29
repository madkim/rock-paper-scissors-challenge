<template>
  <div id="Battle" class="center" :class="size">
    <div>
      <div class="row">
        <div class="column" :class="colnum">
          <h1>YOU PICKED</h1>
          <br />
          <Weapon
            :type="userWeapon"
            size="large"
            class="weapon"
            :class="showResults && victory ? 'winner' : ''"
          ></Weapon>
        </div>
        <div v-if="showResults" class="column results-container" :class="colnum">
          <Results :victory="victory" v-on:playAgain="resetGame"></Results>
        </div>
        <div class="column" :class="colnum">
          <h1>THE HOUSE PICKED</h1>
          <br />
          <Weapon
            v-if="showCompWeapon"
            :type="compWeapon"
            size="large"
            class="weapon"
            :class="showResults && !victory ? 'winner' : ''"
          ></Weapon>
          <div v-else id="Placeholder"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Weapon from "./Weapon.vue";
import Results from "./Results.vue";

export default {
  name: "Battle",
  props: ["userWeapon"],
  components: {
    Weapon,
    Results
  },
  data() {
    return this.initData();
  },
  mounted() {
    this.compChooseWeapon(); // Let the computer choose a weapon
  },
  methods: {
    initData() {
      return {
        weapons: ["rock", "paper", "scissors", "lizard", "spock"],
        weaponKey: {
          rock: { beats: ["scissors", "lizard"] },
          paper: { beats: ["rock", "spock"] },
          scissors: { beats: ["paper", "lizard"] },
          lizard: { beats: ["paper", "spock"] },
          spock: { beats: ["rock", "scissors"] }
        },
        showCompWeapon: false,
        showResults: false,
        victory: false,
        compWeapon: "",
        colnum: "",
        size: ""
      };
    },
    resetGame() {
      Object.assign(this.$data, this.initData()); // Re-initialize data to initial state
      this.$emit("resetGame");
    },
    compChooseWeapon() {
      let index = this.weapons.indexOf(this.userWeapon); //Get index of users weapon from weapon array
      if (index > -1) {
        this.weapons.splice(index, 1); // Remove user's weapon so no ties
      }
      var weaponIndex = 4;
      while (weaponIndex > 3) {
        // Loop until 0 to 3 is chosen
        weaponIndex = Math.floor(Math.random() * 10); // Generate a random number from 0 to 9
      }
      this.compWeapon = this.weapons[weaponIndex]; // Use weaponIndex to choose weapon from weapon array
      this.battle();
    },
    battle() {
      // Loop through the array of weapons that will beat the computer
      // If users weapon beats the computers, declare victory, else take the loss
      this.weaponKey[this.userWeapon].beats.forEach(weapon => {
        if (weapon === this.compWeapon) {
          this.victory = true;
          return;
        }
      });
      this.displayResults();
    },
    displayResults() {
      var self = this;
      var compChosenWeapon = this.compWeapon;
      setTimeout(function() {
        // Set a timer so results don't show immediately on page load
        self.showCompWeapon = true; // Reveal the computer's weapon choice
        self.compWeapon = compChosenWeapon;
        setTimeout(function() {
          self.size = "large"; // Change width of center div
          self.colnum = "thirds"; // Change columns width to thirds (33.33%)
          self.showResults = true; // Show the battle results
          self.$emit("updateScore", self.victory ? 1 : -1); // Emit the updated score
        }, 1500);
      }, 1500);
    }
  }
};
</script>

<style scoped>
h1 {
  color: white;
}
#Battle {
  padding: 50px;
  padding-bottom: 30px;
}
#Placeholder {
  width: 250px;
  height: 250px;
  display: inline-block;
  opacity: 0.3;
  margin-top: 10%;
  border-radius: 50%;
  background-color: hsl(237, 49%, 15%);
}
.results-container {
  position: relative;
}
.column.thirds {
  width: 33.33%;
}
.center.large {
  width: 70%;
}
.weapon {
  transition: all ease 1s;
}
.winner {
  box-shadow: 0 0 0 50px hsla(214, 47%, 30%, 0.3),
    0 0 0 120px hsla(214, 47%, 30%, 0.2), 0 0 0 200px hsla(214, 47%, 30%, 0.1);
}

/* mobile view */
@media screen and (max-width: 480px) {
  h1 {
    top: 15em;
    position: relative;
    font-size: small;
    letter-spacing: 1px;
  }
  .column,
  .column.thirds {
    width: 50%;
    margin-top: 2.8em;
  }
  .results-container {
    z-index: 1;
    top: 20em;
    left: 5em;
    width: auto !important;
    position: absolute;
  }
  .center.large {
    width: 50%;
  }
  .winner {
    box-shadow: 0 0 0 20px hsla(214, 47%, 30%, 0.3),
      0 0 0 40px hsla(214, 47%, 30%, 0.2), 0 0 0 60px hsla(214, 47%, 30%, 0.1);
  }
  #Battle.center {
    width: 100%;
    height: 32em;
    padding: 0px;
    padding-bottom: 0px;
  }
  #Placeholder {
    width: 7em;
    height: 7em;
    margin-top: 0px;
  }
}
</style>

