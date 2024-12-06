<script setup>
// import { onMounted, ref } from 'vue';
// import { loadState, saveState } from '../utils/Store.js';
// import Login from './Login.vue';

// const theme = ref(loadState('theme') || 'light')

// onMounted(() => {
//   document.documentElement.setAttribute('data-bs-theme', theme.value)
// })

// function toggleTheme() {
//   theme.value = theme.value == 'light' ? 'dark' : 'light'
//   document.documentElement.setAttribute('data-bs-theme', theme.value)
//   saveState('theme', theme.value)
// }

</script>

<template>
  <nav class="navbar navbar-expand-sm px-3 my-navbar">
    <div class="">
      <ul class="navbar-nav me-auto">
        <li class="nav-link">
          <a href="#about" class="nav-text px-3">About Me</a>
          <a href="#project" class="nav-text px-3">My Projects</a>
          <a href="#skills" class="nav-text px-3">Skills</a>
          <a href="#contact" class="nav-text px-3">Contact Me</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
a:hover {
  text-decoration: none;
  color: #6495ED;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.my-navbar {
  background-color: #1C2A4E;
  color: #F0F5FF;
  display: flex;
  justify-content: end;
  border-bottom: #F0F5FF;
}

.nav-text {
  color: #87CEFA;
}

@media screen and (min-width: 576px) {
  nav {
    height: 64px;
  }
}
</style>
