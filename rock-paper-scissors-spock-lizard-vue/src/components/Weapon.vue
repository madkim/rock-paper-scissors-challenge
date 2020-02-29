<template>
  <div id="Weapon" class="center" :class="[type, size]" v-on:click="$emit('selected', type)">
    <img :src="require(`../../../images/${getImg()}`)" />
  </div>
</template>

<script>
export default {
  name: "Weapon",
  props: ["type", "size"],
  methods: {
    getImg() {
      switch (this.type) {
        case "rock":
          return "icon-rock.svg";
        case "paper":
          return "icon-paper.svg";
        case "scissors":
          return "icon-scissors.svg";
        case "lizard":
          return "icon-lizard.svg";
        case "spock":
          return "icon-spock.svg";
        default:
          return "";
      }
    }
  }
};
</script>

<style scoped>
img {
  width: 45%;
  padding-top: 26%;
}
#Weapon {
  z-index: 1;
  border-radius: 50%;
  background-color: white;
}
#Weapon:hover {
  cursor: pointer;
}
.medium {
  width: 115px;
  height: 115px;
  position: absolute;
  transition: width 0.5s, height 0.5s;
}
.medium:hover {
  width: 140px;
  height: 140px;
}
.large {
  width: 250px;
  height: 250px;
}
.rock {
  border: 16px solid hsl(349, 71%, 52%);
  box-shadow: 0px 7px hsl(349, 71%, 32%);
}
.paper {
  border: 16px solid hsl(230, 89%, 62%);
  box-shadow: 0px 7px hsl(230, 89%, 42%);
}
.scissors {
  border: 16px solid hsl(39, 89%, 49%);
  box-shadow: 0px 7px hsl(39, 89%, 29%);
}
.lizard {
  border: 16px solid hsl(261, 73%, 60%);
  box-shadow: 0px 7px hsl(261, 73%, 40%);
}
.spock {
  border: 16px solid hsl(189, 59%, 53%);
  box-shadow: 0px 7px hsl(189, 59%, 33%);
}
/* mobile view */
@media screen and (max-width: 480px) {
  #Weapon {
    width: 75px;
    height: 75px;
  }
  .rock {
    border: 12px solid hsl(349, 71%, 52%);
  }
  .paper {
    border: 12px solid hsl(230, 89%, 62%);
  }
  .scissors {
    border: 12px solid hsl(39, 89%, 49%);
  }
  .lizard {
    border: 12px solid hsl(261, 73%, 60%);
  }
  .spock {
    border: 12px solid hsl(189, 59%, 53%);
  }
}
</style>
