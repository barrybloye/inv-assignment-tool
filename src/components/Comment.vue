<template>
  <mu-paper class="demo-paper" :zDepth="2">
    <div class="panel panel-default">
      <div class="panel-body">
        <pre>{{ comment.content }}</pre>
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
