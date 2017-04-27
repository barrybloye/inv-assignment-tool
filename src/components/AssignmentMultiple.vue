<template>
  <div>
    <div v-for="question in post.questions">{{ question.question }} -
      <div v-for="answer in question.answers">
      {{ answer.answer }}
      </div>
    </div>

  </div>
</template>

<script>
  import store from '../store'

  export default {
    props: {
      code: Object
    },

    data () {
      return {
        _id: '',
        post: '',
        content: '',
        comments: '',
        type: '',
        createdAt: '',
        postId: '',
        questions: '',
        answerrs: ''
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
    }
  }
</script>
