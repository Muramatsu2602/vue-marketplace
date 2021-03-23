<template>
  <div>
    <h1>Lesson 2: Yoyo's</h1>
    <options />
    <composition-api />

    <h1>Lesson 2: Challenge</h1>
    <meu-composition />
    <meu-option />

    <h1>Lesson 3: Yoyo's</h1>
    <div>Hello</div>
    <div>Total: {{ total }}</div>

    <options c="Componente options 1" :total="total" @inc="incHandler" />
    <options c="Componente options 2" @inc="incHandler" />
    <options c="Componente options 3" @inc="incHandler" />

    <composition-api text="Componente Composition 1" @inc="incHandler" />
    <composition-api text="Componente Composition 2" @inc="incHandler" />
    <composition-api text="Componente Composition 3" @inc="incHandler" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import Options from "@/components/OptionsApi.vue";
import CompositionApi from "@/components/CompositionApi.vue";

import MeuOption from "@/components/desafio-aula2/MeuOption.vue";
import MeuComposition from "@/components/desafio-aula2/MeuComposition.vue";

import useAuth from "@/modules/auth";
import useCards from "@/modules/cards";

export default defineComponent({
  components: {
    Options,
    CompositionApi,
    MeuComposition,
    MeuOption,
  },

  setup() {
    const auth = useAuth();
    const cards = useCards();
    
    const total = ref(0);

    console.log("auth dentro de Componentes.vue", auth);

    const incHandler = () => {
      console.log("total", total.value);
      total.value += 1;
    };

    return { total, incHandler };
  },
});
</script>
