<template>
  <div>
    <h1>Your Color Personality Result</h1>
    <ColorScoringBox
      v-for="(score, color) in getUserColorScoreById"
      :key="color"
      :color="color"
      :associatedBoxIds="getColorsAnswerKey[color]"
      :colorScore="score"
    />
    <ColorMeaning
      v-if="colorMeaning"
      :color="colorWinner"
      :shortDesc="colorMeaning.shortDesc"
      :adj="colorMeaning.adjectives"
      :characteristics="colorMeaning.characteristics"
      :sentence="colorMeaning.sentence"
    />
    <button @click="retakeQuiz">Retake Quiz</button>
  </div>
</template>

<script>
import ColorScoringBox from "../components/ColorScoringBox.vue";
import ColorMeaning from "../components/ColorMeaning.vue";
import { useQuizStore } from "@/stores/quizStore";
import { computed } from "vue";

export default {
  name: "ColorPersonalityResults",
  components: {
    ColorScoringBox,
    ColorMeaning
  },
  data() {
    return {
      colorWinner: null,
      colorMeaning: null
    };
  },
  computed: {
    getColorsAnswerKey() {
      const store = useQuizStore();
      return store.colorsAnswerKey;
    },
    getUserColorScoreById() {
      const store = useQuizStore();
      return store.userColorScore;
    },
    getUserColorWinner() {
      const store = useQuizStore();
      return store.userColorWinner;
    }
  },
  methods: {
    determineColorMeaning() {
      const store = useQuizStore();
      this.colorWinner = store.userColorWinner;

      if (Array.isArray(this.colorWinner)) {
        // If there's a tie, map each winner to their color meaning
        this.colorMeaning = this.colorWinner.map((color) => store.getColorMeaningByColor(color));
      } else {
        // Single winner case
        this.colorMeaning = store.getColorMeaningByColor(this.colorWinner);
      }
    },
    retakeQuiz() {
      const store = useQuizStore();
      store.clearResults();
      this.$router.push("/color_personality_quiz");
    }
  },
  created() {
    this.determineColorMeaning();
  }
};
</script>
