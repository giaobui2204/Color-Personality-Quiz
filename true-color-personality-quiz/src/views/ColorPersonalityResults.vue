<template>

<div class="results-container">
    <div class="scoring-boxes">
      <ColorScoringBox
        v-for="(score, color) in getColorsAnswerKey"
        :key="color"
        :color="color"
        :associatedBoxIds="score"
        :colorScore="getUserColorScoreById(color)"
      />
    </div>
</div>

<div class="color-meaning">
      <div v-if="colorMeaning">
        <ColorMeaning
          v-for="(meaning, index) in colorMeaning"
          :key="index"
          :color="meaning.color"
          :shortDesc="meaning.shortDesc"
          :adj="meaning.adj"
          :characteristics="meaning.characteristics"
          :sentence="meaning.sentence"
        />
      </div>
    </div>

    <div class="content">
        <button class="retake-button" @click="retakeQuiz">
        Retake Quiz
        </button>
    </div>      
</template>

<script>
import ColorScoringBox from '@/components/ColorScoringBox.vue';
import ColorMeaning from '@/components/ColorMeaning.vue';
import { mapState, mapActions } from 'pinia';
import { useQuizScore } from '@/stores/quizStore';

export default {
    name: 'ColorPersonalityResults',
    
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
        ...mapState(useQuizScore, [
            'getColorsAnswerKey',
            'getUserColorScoreById',
            'getUserColorWinner',
            'getColorMeaningById'
        ])
    },

    methods: {
        ...mapActions(useQuizScore, ['clearResults']),

        determineColorMeaning() {
            const winner = this.colorWinner;
            console.log(winner)
            if (Array.isArray(winner)) {
                this.colorMeaning = winner.map(color => ({
                color,
                shortDesc: this.getColorMeaningById(color).shortDesc,
                adj: this.getColorMeaningById(color).adjectives,
                characteristics: this.getColorMeaningById(color).characteristics,
                sentence: this.getColorMeaningById(color).sentence
                }));
            } else {
                this.colorMeaning = this.getColorMeaningById(winner);
            }
        },

        retakeQuiz() {
            this.clearResults();
            this.$router.push('/color_personality_quiz');
        }
    },

    created() {
        this.colorWinner = this.getUserColorWinner;
        this.determineColorMeaning();
    }
};
</script>