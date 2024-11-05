<template>
    <table>
      <tbody>
        <tr>
          <td>Color</td>
          <td>{{ color }}</td>
        </tr>
        <tr>
          <td>Short Description</td>
          <td>{{ shortDesc }}</td>
        </tr>
        <tr>
          <td>Adjectives</td>
          <td>{{ adj }}</td>
        </tr>
        <tr>
          <td>Characteristics</td>
          <td>{{ characteristics.join(', ') }}</td>
        </tr>
        <tr>
          <td>Sentence</td>
          <td>{{ sentence }}</td>
        </tr>
      </tbody>
    </table>
</template>
  
<script>
  export default {
    name: 'ColorMeaning',
    
    props: {
      color: {
        type: String,
        required: true
      },
      shortDesc: {
        type: String,
        required: true
      },
      adj: {
        type: String,
        required: true
      },
      characteristics: {
        type: Array,
        required: true
      },
      sentence: {
        type: String,
        required: true
      }
    }
  };
</script>