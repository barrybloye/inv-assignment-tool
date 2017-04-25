<template>
  <div>
    <main class="assignment">
      <header class="assignment__summary">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>

        <!-- Commenting out for demo
        <ul>
            <li>An unordered list</li>
            <li>Second item</li>
            <li>Third item</li>
        </ul>
        <ol>
            <li>An ordered list</li>
            <li>Second item</li>
            <li>Third item</li>
        </ol>
        -->
      </header>

      <assignment-text v-if="post.assignmentType === 'text'"></assignment-text>
      <assignment-multiple v-if="post.assignmentType === 'multiple'"></assignment-multiple>
      <assignment-code v-if="post.assignmentType === 'code'"></assignment-code>

      <div class="row">
        <div class="col-md-12">
          <h3 class="page-header">Comments ({{ comments.length }})</h3>
        </div>
        <comment
                v-for="comment in comments"
                :comment="comment"
                :key="comment.createdAt"
                >
        </comment>
      </div>

      <div class="row">
        <div class="col-md-12">
          <h3 class="page-header">Leave your comment</h3>
        </div>
        <div class="col-md-12">
          <div class="panel panel-default">
            <div class="panel-body">
              <textarea class="form-control" v-model="content" placeholder="Enter content"></textarea>
              <button class="btn btn-default" v-on:click="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>

    </main>

  </div>
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
        comments: [],
        content: '',
        type: '',
        createdAt: '',
        postId: ''
      }
    },

    route: {
      data ({ to }) {
        return store.findPostById(to.params.id).then(post =>
          store.findCommentsByPostId(post._id).then(comments => ({
            post: post,
            comments: comments
          }))
        )
      }
    },

    methods: {
      submit () {
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

    created: function () {
      store.reloadComments(this, 'comments', this.post._id)
    }
  }
</script>
