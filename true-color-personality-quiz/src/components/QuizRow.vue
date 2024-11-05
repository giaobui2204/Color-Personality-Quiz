<template>
    <tr>
      <QuizBox v-for="(words, key) in rowData" :key="key" :cellID="key">
        <template #word>
          <ul><li v-for="word in words" :key="word">{{ word }}</li></ul>
        </template>
      </QuizBox>
    </tr>
  </template>
  
  <script>
  import QuizBox from "./QuizBox.vue";
  export default { name: "QuizRow", components: { QuizBox }, props: ["rowData"] };
  </script>
  