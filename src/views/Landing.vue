<template>
  <div class="container">
    <div class="header-section">
      <h1>Welcome to SciDeck 2.0</h1>
      <p>Where science meets card games</p>
    </div>

    <div class="body-section">
      <div class="about-text">
        <h2 v-if="username">This is {{ name }}'s', aka {{ username }}.</h2>
        <h2 v-else>There shall be profile section here</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          sint odio iusto natus nulla exercitationem fugit facilis fuga dolores.
          Repudiandae voluptas, alias pariatur mollitia fugiat deleniti iste
          nisi ad qui, exercitationem sint consectetur tenetur tempora beatae
          obcaecati saepe molestiae iusto officiis expedita. Cupiditate, culpa
          soluta delectus molestiae vel adipisci saepe.
        </div>
      </div>
      <div class="about-image">
        <img src="../assets/website/scientists.jpg" alt="science Background" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useAuth from "@/modules/auth";
import { computed, defineComponent } from "@vue/runtime-core";
import router from "@/router/";
import useMe from "@/modules/me";

export default defineComponent({
  components: {},

  setup() {
    const auth = useAuth();
    const me = useMe();

    const isLoggedIn = computed(() => auth.state.token);
    const balance = computed(() => me.state.balance);
    const cartCount = computed(() => me.state.cart.length);

    const username = computed(() => auth.state.username);
    const name = computed(() => auth.state.name);

    const logOutHandler = () => {
      auth.actions.logout();
      router.push("/login");
    };

    const displayAlertHandler = () => {
      alert("Hey there.... This is all thanks to Ingate Educa's platform...");
    };

    const myCollectionHandler = () => {
      router.push("/collection");
    };

    return {
      isLoggedIn,
      username,
      logOutHandler,
      displayAlertHandler,
      myCollectionHandler,
      balance,
      name,
      cartCount,
    };
  },
});
</script>

<style lang='scss' scoped>
.container {
  /* border: 2px solid var(--color-primary-light);
  border-radius: 25px; */
  margin: 4rem 2rem 2rem 2rem;

  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-around;
}

.header-section {
  margin-top: 2rem;
  margin-bottom: 5rem;
}

.body-section {
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: space-around;
}

.about-text {
  border: 5px solid var(--color-primary-light);
  border-radius: 25px;
  padding: 1rem;

  margin-bottom: 2rem;

  font-size: var(--text-big);
  width: 40%;

  text-align: justify;
  vertical-align: middle;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

.about-image {
  border: 5px solid var(--color-primary-light);
  border-radius: 25px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  max-height: 500px;
}

.about-image img {
  height: 500px;
  clip-path: inset(0px round 20px);
}
</style>