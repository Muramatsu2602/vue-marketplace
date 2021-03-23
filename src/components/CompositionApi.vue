<template>
  <div class="mt">
    <div>Sou composition: {{ a }}</div>
    <button @click="inc">Add me ➕</button>
  </div>
</template>

<script>
import { ref } from "vue";
import useAuth from "@/modules/auth";

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

// // 1:
// const a = obj.a;
// const b = obj.b;

// 2:
const { a, b } = obj; // de-structing an object

export default {
  props: {
    text: { type: String, default: null },
  },

  setup(props, { emit }) {
    const auth = useAuth();
    const a = ref(0);

    // console.log("props", props);
    console.log("auth dentro de CompositionApi.vue", auth);

    // arrow function
    const inc = () => {
      console.log("vamos inc");
      a.value += 1;

      emit("inc");
    };

    return { a, inc };
  },
};
</script>

<style lang="scss" scoped>
.mt {
  margin-top: 50px;
}
</style>
