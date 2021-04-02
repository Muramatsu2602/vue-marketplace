<template>
  <div id="nav">
    <router-link to="/">Home </router-link>
    <router-link to="/about">About </router-link>
    <router-link to="/components">Components </router-link>
  </div>

  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;

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
</style>
