<template>
  <div>
    <form>
      <div>
        <p>Multiple choice question 1?</p><br />
        <label>
          <input type="radio" name="q4" class="grey"></input>Answer 1</label><br />
        <label>
          <input type="radio" name="q4" class="black"></input>Answer 2</label><br />
        <label>
          <input type="radio" name="q4" class="white"></input>Answer 3</label><br />
      </div>
      <br />
      <div>
        <p>Multiple choice question 2?</p><br />
        <label>
          <input type="radio" name="q3" class="grey"></input>Answer 1</label><br />
        <label>
          <input type="radio" name="q3" class="black"></input>Answer 2</label><br />
        <label>
          <input type="radio" name="q3" class="white"></input>Answer 3</label><br />
      </div>
      <br />
      <div>
        <p>Multiple choice question 3?</p><br />
        <label>
          <input type="radio" name="q2" class="grey"></input>Answer 1</label><br />
        <label>
          <input type="radio" name="q2" class="black"></input>Answer 2</label><br />
        <label>
          <input type="radio" name="q2" class="white"></input>Answer 3</label><br />
      </div>
      <br />
      <button class="submit4">Submit</button>
    </form>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'assignment-multiple',

    props: {
      code: Object
    }
  }
</script>
