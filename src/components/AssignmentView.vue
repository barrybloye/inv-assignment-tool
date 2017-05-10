<template>
  <main class="assignment">
    <header class="assignment__summary">
      <h1>{{ post.title }}</h1>
      <p>{{ post.content }}</p>
    </header>

    <assignment-text v-if="post.assignmentType === 'text'"></assignment-text>
    <assignment-multiple v-if="post.assignmentType === 'multiple'"></assignment-multiple>
    <assignment-code v-if="post.assignmentType === 'code'"></assignment-code>

    <div class="row">
      <h3 class="page-header">Comments ({{ comments.length }})</h3>
      <comment
        v-for="comment in comments"
        :comment="comment"
        :key="comment"
        >
      </comment>
    </div>

    <div class="row">
      <h3 class="page-header">Leave your comment</h3>
      <mu-paper class="demo-paper" :zDepth="2">
      <div class="panel">
        <textarea class="form-control" v-model="content" placeholder="Enter content"></textarea>
        <mu-raised-button v-on:click="submit" label="Submit" primary />
      </div>
      </mu-paper>
    </div>
  </main>
</template>

<script>
import Comment from '../components/Comment'
import AssignmentText from '../components/AssignmentText'
import AssignmentMultiple from '../components/AssignmentMultiple'
import AssignmentCode from '../components/AssignmentCode'
import store from '../store'

export default {
  components: {
    Comment,
    AssignmentText,
    AssignmentCode,
    AssignmentMultiple
  },

  data () {
    return {
      _id: '',
      post: '',
      content: '',
      comments: '',
      type: '',
      createdAt: '',
      postId: ''
    }
  },

  watch: {
    data () {
      return store.findPostById(this.$route.params.id).then(post =>
        store.findCommentsByPostId(this.$route.params.id).then(comments => ({
          post: post,
          comments: comments
        }))
      )
    }
  },

  methods: {
    submit () {
      console.log(this.content)

      const data = {
        content: this.content,
        type: 'comment',
        createdAt: new Date().toJSON(),
        postId: this.post._id
      }
      store.create(data).then(() => {
        store.reloadComments(this, 'comments', this.post._id)
      })
      this.content = ''
    }
  },

  mounted () {
    store.findPostById(this.$route.params.id).then(post => { this.post = post })
    store.findCommentsByPostId(this.$route.params.id).then(comments => { this.comments = comments })
  }
}
</script>
