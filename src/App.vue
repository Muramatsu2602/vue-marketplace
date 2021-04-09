<template>
  <div class="container">
    <div id="nav" class="sticky">
      <router-link to="/">Home </router-link>
      <router-link to="/about">About </router-link>
      <router-link to="/components">Components </router-link>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.container {
  padding-top: 3rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 25px;
  height: 20px;
  background-color: var(--color-primary-light);

  a {
    font-weight: bold;
    color: #2c3e50;

    margin: 0.5rem;
    text-decoration: none;

    &.router-link-exact-active {
      color: var(--color-text-base);
    }
  }
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
