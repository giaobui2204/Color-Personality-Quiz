<template>
  <header>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/color_personality_quiz">Personality Quiz</RouterLink>
        <RouterLink to="/all_color_meaning">All Color Meanings</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
      RouterLink,
      RouterView
  }
}
</script>

