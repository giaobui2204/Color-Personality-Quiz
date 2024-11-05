<template>
    <div>
      <label>{{ cellID }}</label>
      <input type="number" v-model="numberInput" min="1" max="4" />
      <slot name="word"></slot>
    </div>
  </template>
  
  <script>
  import { useQuizStore } from "@/stores/quizStore";
  import { mapState, mapActions } from "pinia";
  
  export default {
    name: "QuizBox",
    props: ["cellID"],
    computed: {
      ...mapState(useQuizStore, ["getUserAnswerById"]),
      numberInput: {
        get() { return this.getUserAnswerById(this.cellID); },
        set(newVal) { this.updateAnswer(this.cellID, newVal); }
      }
    },
    methods: {
      ...mapActions(useQuizStore, ["updateAnswer"])
    }
  };
  </script>
  