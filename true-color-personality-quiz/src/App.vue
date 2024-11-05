<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/color_personality_quiz">Personality Quiz</RouterLink> |
      <RouterLink to="/all_color_meaning">All Color Meanings</RouterLink>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

