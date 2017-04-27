<template>
  <div class="panel panel-default">
    <h3>{{ post.title }}</h3>
    <p>{{ post.content }}</p><br />
    <a class="btn btn-default" :href="'#/assignment/' + post._id">View</a>
  </div>
</template>

<script>
  export default {
    name: 'Assignment',
    props: {
      post: Object
    }
  }
</script>
