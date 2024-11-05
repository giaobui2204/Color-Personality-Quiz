<template>
  <table class="score-box">
    <tr>
        Total {{ color }} Score
    </tr>
    <tr>
        <span v-for="(boxId, index) in associatedBoxIds" :key="boxId">
          {{ boxId }}{{ index < associatedBoxIds.length - 1 ? ', ' : '' }}
        </span>
    </tr>
    <tr>
        {{ colorScore }}
    </tr>
    </table>
    
  </template>
  
  <script>
  export default {
    name: 'ColorScoringBox',
    
    props: {
      color: {
        type: String,
        required: true
      },
      associatedBoxIds: {
        type: Array,
        required: true
      },
      colorScore: {
        type: Number,
        required: true
      }
    }
  };
  </script>
  