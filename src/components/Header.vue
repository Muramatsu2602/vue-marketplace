<template>
  <div id="nav" class="sticky">
    <div>
      <router-link to="/">Home </router-link>
      <router-link to="/store">Store </router-link>
      <span v-if="!isLoggedIn">
        <router-link to="/login">Login </router-link>
      </span>
    </div>
    <div id="exit" v-if="isLoggedIn" class="dropdown">
      <div id="exitButton" class="dropbtn">
        <span> {{ username }}</span>
        <font-awesome-icon size="2x" icon="user-circle" />
      </div>

      <div class="dropdown-content">
        <p @click="logOutHandler">Exit</p>
        <p @click="displayAlertHandler">About</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useAuth from "@/modules/auth";
import { computed, defineComponent } from "@vue/runtime-core";
import router from "@/router/";

export default defineComponent({
  components: {},

  setup() {
    const auth = useAuth();

    const isLoggedIn = computed(() => auth.state.token);
    const username = computed(() => auth.state.username);

    const logOutHandler = () => {
      auth.actions.logout();
      router.push("/login");
    };

    const displayAlertHandler = () => {
      alert("Hey there....");
    };

    return { isLoggedIn, username, logOutHandler, displayAlertHandler };
  },
});
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  justify-content: space-between;
  padding: 25px 25px 25px 25px;
  height: 20px;
  background-color: var(--color-primary-medium);

  a {
    font-weight: bold;
    color: #2c3e50;

    margin: 0.5rem;
    text-decoration: none;

    &.router-link-exact-active {
      color: var(--color-hover);
    }
  }

  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
}

#exit {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 10rem;
  margin-right: 2rem;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */

  color: #2c3e50;
  font-weight: 600;

  /* transition: color 0.4s !important; */
}

#exitButton {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 10px;

  width: 100%;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

// dropdown button
/* Style The Dropdown Button */
.dropbtn {
  background-color: var(--color-primary-dark);
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  margin-top: 5rem;
  background-color: #f9f9f9;

  padding-left: 1rem;
  border-radius: 5px;

  min-width: 9rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content p {
  border-top: 2px;
  border-bottom: 2px;
}

/* Change color of dropdown links on hover */
.dropdown-content p:hover {
  cursor: pointer;

  border-bottom: 2px solid var(--color-primary-medium);
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content,
.dropdown:active .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: var(--color-primary-less-dark);
}
</style>