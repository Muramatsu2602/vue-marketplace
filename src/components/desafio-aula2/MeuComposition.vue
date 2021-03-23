<template>
  <div class="container">
    <h3>The Alertifier!</h3>
    <input @input="recordMessage($event.target.value)" />
    <div>
      <button @click="sendMessage">Send Message 💬</button>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const msg = ref('');

    // arrow function
    function recordMessage(input) {
      alert('this should work!');
      msg.value = input;
    }

    const sendMessage = () => {
      console.log('sending:', msg);
      alert('My Message:');
    };

    return { msg };
  },
};
</script>

<style lang="scss" scoped>
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
  background-color: salmon;
  border-radius: 25px;
  box-shadow: 0 8px 6px -6px black;

  width: 50%;
}

button {
  margin: 0.5rem;
}

input {
  border-radius: 25px;
  border-style: none;
  outline: none;
  padding: 0.5rem 0 0.5rem 0.5rem;
}
</style>
