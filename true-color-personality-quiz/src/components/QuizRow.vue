<template>
<tr class="quiz-row">
    <td v-for="(words, key) in rowData">
      <QuizBox :cellID="key">
        <template #word>
          <ul class="word-list">
            <li v-for="word in words" :key="word">
              {{ word }}
            </li>
          </ul>
        </template>
      </QuizBox>
    </td>
  </tr>
</template>
<script>
import QuizBox from './QuizBox.vue';
export default{
    props: {
        rowData: {
          type: Object, 
          required: true
        }
    },
    components: {
        QuizBox
    }
}
</script>