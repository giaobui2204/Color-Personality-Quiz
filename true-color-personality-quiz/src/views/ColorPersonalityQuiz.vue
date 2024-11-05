<template>
  <div class="container">
    <h1>Color Personality Quiz</h1>
    <p class="center-content">Please fill out the quiz below:</p>
    <table>
      <QuizRow
        v-for="rowIndex in 5"
        :key="rowIndex"
        :rowData="getQuizRowById(rowIndex)"
      />
    </table>
    <p v-if="!validateQuiz" class="center-content" style="color: red;">Please fill out all boxes</p>
    <button @click="submitAnswers" :disabled="!validateQuiz">Get Results</button>
  </div>
</template>

<script>
import { useQuizStore } from "@/stores/quizStore";
import { mapState, mapActions } from "pinia";
import QuizRow from "../components/QuizRow.vue";

export default {
  name: "ColorPersonalityQuiz",
  components: {
    QuizRow
  },
  computed: {
    // Map required state from Pinia store
    ...mapState(useQuizStore, {
      getQuizRowById: (state) => state.getQuizRowById,
      getAllUserAnswer: (state) => state.getAllUserAnswer
    }),
    // Validates that all answers are filled out
    validateQuiz() {
      return Object.values(this.getAllUserAnswer).every(answer => answer > 0);
    }
  },
  methods: {
    // Map required actions from Pinia store
    ...mapActions(useQuizStore, ["calculateColorScore", "determineColorResult", "clearResults"]),
    // Handles quiz submission and navigates to results
    submitAnswers() {
      this.calculateColorScore();
      this.determineColorResult();
      this.$router.push("/color_personality_results");
    }
  },
  // Ensures results are cleared on component creation
  created() {
    this.clearResults();
  }
};
</script>

<style scoped>
/* Styles for ColorPersonalityQuiz.vue */
h1 {
  color: #333;
  text-align: center;
}
table {
  width: 100%;
  margin: 20px 0;
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
p {
  color: red;
  text-align: center;
}
</style>
