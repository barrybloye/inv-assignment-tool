<template>
  <div class="assignment__input">
    <h2>Input</h2>
    <form>
      <textarea class="input-code"></textarea>
      <mu-raised-button label="Submit" primary />
    </form>
  </div>
</template>

<script>
  export default {
    name: 'assignment-text',

    props: {
      code: Object
    }
  }
</script>
