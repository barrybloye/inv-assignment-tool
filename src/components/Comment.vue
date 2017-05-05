<template>
  <mu-paper class="demo-paper" :zDepth="2">
    <div class="panel panel-default">
      <div class="panel-body">
        <p>{{ comment.content }}</p>
      </div>
    </div>
  </mu-paper>
</template>

<script>
  export default {
    name: 'Comment',

    props: {
      comment: Object
    }
  }
</script>
