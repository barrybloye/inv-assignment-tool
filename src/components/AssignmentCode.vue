<template>
  <div>
    <div class="assignment__input">
      <h2>Input</h2>
      <!--<form>-->
      <pre class="input-code" id="editor">





          </pre>


      <button type="submit" class="submit-code">Submit</button>
      <!--</form>-->
    </div>

    <!--<div class="assignment__output">-->
    <!--<h2>Output</h2>-->

    <!--<pre class="render"></pre>-->
    <!--</div>-->

    <div class="assignment__feedback">
      <h2>Success!</h2>
      <p>Feedback about your submission and progress</p>
    </div>
  </div>
</template>



<script>
  export default {
    name: 'assignment-code',

    props: {
      code: Object
    }
  }
</script>
