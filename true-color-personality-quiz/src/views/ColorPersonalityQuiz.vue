<template>
<h1>Color Personality Quiz Intructions</h1>
<p>Directions: Compare all 4 boxes in each row. Do not analyze each word; Just get a sense of each box. Score each of the four boxes in each row, from most like you to least like you: 4 = most, 3 = a lot, 2 = somewhat, 1 = least</p>

<table>
    <tbody>
      <tr v-for="rowId in ['row1', 'row2', 'row3', 'row4', 'row5']" :key="rowId">
        <QuizRow :rowData="getQuizRowById(rowId)" />
      </tr>
    </tbody>
</table>

<div v-if="!validateQuiz"> Please fill out all boxes </div>
<button
    :disabled="!validateQuiz"
    @click="submitAnswers">
    Get Results
</button>
</template>

<script>
import QuizRow from '@/components/QuizRow.vue';
import { useQuizScore } from '@/stores/quizStore';
import { mapState, mapActions } from 'pinia';

export default{
    components:{
        QuizRow
    },
    computed:{
        ...mapState(useQuizScore, ['getQuizRowById', 'getAllUserAnswer']),
        validateQuiz() {
        const answers = this.getAllUserAnswer;
        for (var answer in answers){
            if (answer == 0){
                return false;
            }
        }
        return true;
        }
    },
    methods:{
        ...mapActions(useQuizScore, ['calculateColorScore', 'determineColorResult', 'clearResult']),
        submitAnswers() {
            this.calculateColorScore();
            this.determineColorResult();
            this.$router.push('/color_personality_results');
        } 
    },
    created() {
        this.clearResult()
    }
}
</script>