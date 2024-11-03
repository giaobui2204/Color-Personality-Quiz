<template>
<tr class="quiz-row">
    <td v-for="cell in rowData">
      <QuizBox :cellID="cell.cellID">
        <template #word>
          <ul class="word-list">
            <li v-for="word in cell" :key="word">
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
            type: Array,
            required: true
        }
    },
    components: {
        QuizBox
    }
}
</script>