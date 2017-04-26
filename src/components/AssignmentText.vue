<template>
  <div class="assignment__input">
    <h2>Input</h2>
    <form>
      <textarea class="input-code"></textarea>
      <button type="submit" class="submit-code">Submit</button>
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
