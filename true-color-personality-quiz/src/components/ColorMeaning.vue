<template>
    <table>
      <tr>
        <td><strong>Color:</strong> {{ color }}</td>
      </tr>
      <tr>
        <td><strong>Short Description:</strong> {{ shortDesc }}</td>
      </tr>
      <tr>
        <td><strong>Adjectives:</strong> {{ adj }}</td>
      </tr>
      <tr>
        <td><strong>Characteristics:</strong>
          <ul>
            <li v-for="characteristic in characteristics" :key="characteristic">{{ characteristic }}</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><strong>Sentence:</strong> {{ sentence }}</td>
      </tr>
    </table>
  </template>
  
  <script>
  export default {
    name: "ColorMeaning",
    props: ["color", "shortDesc", "adj", "characteristics", "sentence"]
  };
  </script>
  