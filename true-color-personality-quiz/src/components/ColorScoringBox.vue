<template>
    <td>
      <strong>{{ color }}</strong>: 
      <span v-for="id in associatedBoxIds" :key="id">{{ id }} </span>
      - Score: {{ colorScore }}
    </td>
  </template>
  
  <script>
  export default {
    name: "ColorScoringBox",
    props: ["color", "associatedBoxIds", "colorScore"]
  };
  </script>
  