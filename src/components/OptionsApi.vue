<template>
  <div style="margin-top: 40px">
    <p>{{ c }}: {{ a }}</p>
  </div>

  <div>total dentro do child: {{ total }}</div>

  <button @click="inc">Add ➕</button>
</template>

<script>
export default {
  props: {
    c: { type: String, default: null },
    total: { type: Number, default: 0 },
  },

  data() {
    return {
      a: 0,
      b: "sou o b",
    };
  },

  methods: {
    inc() {
      console.log("let's increment!", this.b);
      this.a += 1;

      this.$emit("inc");
    },
  },
};
</script>

<style>
</style>
