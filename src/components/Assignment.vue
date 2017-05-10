<template>
  <mu-paper class="demo-paper" :zDepth="2">
    <div class="panel panel-default">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p><br />
      <mu-raised-button label="View" :href="'#/assignment/' + post._id" secondary />
    </div>
  </mu-paper>

</template>

<script>
  export default {
    name: 'Assignment',
    props: {
      post: Object
    }
  }
</script>
