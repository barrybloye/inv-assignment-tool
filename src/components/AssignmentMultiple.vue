<template>
  <div>
    <mu-paper class="paper-padded" :zDepth="2">

      <div v-for="(question, index) in post.questions" class="questions__single">
        <h3>{{ question.question }}</h3>
        <div v-for="answer in question.answers">
        <mu-radio :label="answer.answer" :name="index" nativeValue="simple1" v-model="value" class="demo-radio" />
        </div>
      </div>

      <mu-raised-button v-on:click="submit" label="Submit Assignment" primary />
    </mu-paper>
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
