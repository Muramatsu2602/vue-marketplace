/**
    Adder -> insert a number and click que button, will add !
 */

<template>
  <div class="container">
    <h3>The Almighty Adder!</h3>
    <p>Hey, this is a text</p>
    <pre>Result: {{ sum }}</pre>
    <input type="number" @input="handleInput($event.target.value)" />
    <div>
      <button @click="add">➕</button>
      <button @click="zerar">❌</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sum: 0,
      currentValue: 0,
    };
  },

  methods: {
    handleInput(value) {
      if (value && !value.trim() == '') this.currentValue = parseInt(value);
      else this.currentValue = 0;
    },
    zerar() {
      if (this.sum === 0) alert('Result already empty!!');

      this.sum = 0;
    },
    add() {
      if (this.currentValue == 0) alert('Field cannot be empty or 0!');
      this.sum += this.currentValue;
    },
  },
};
</script>

<style>

button:hover {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.5s;

  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}

.container {
  display: inline-flex;
  flex-direction: column;

  padding: 1rem;
  margin: 1rem;
  background-color: skyblue;
  border-radius: 25px;
  box-shadow: 0 8px 6px -6px black;

  width: 50%;
}

button {
  margin: 0.5rem;
}

pre {
  font-weight: bold;
  font-size: 1.2rem;
  color: yellow;
}

input {
  border-radius: 25px;
  border-style: none;
  outline: none;
  padding: 0.5rem 0 0.5rem 0.5rem;
}
</style>
