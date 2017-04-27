
<template>
  <main class="create-assignment">
    <div class="row">
      <div class="col-md-12">
        <h1>Create Assignment</h1>
      </div>
      <div class="panel">
          <div>
            <label for="types">Type of assignment</label>
            <select name="types" id="types" v-model="assignmentType" v-on:change="checkType">
              <option v-for="option in assignmentOptions" :value="option.value">
                {{ option.text }}
              </option>
            </select>
          </div>

          <div id="multipleChoice">
            <div v-for="(question, index) in questions">
              <label>Question</label>
              <input type="text" v-model="question.question" placeholder="Question">

              <ul>
                <li v-for="(answers, index) in question.answers">
                  <label>Answer</label>
                  {{ index }}<input type="text" v-model="answers.answer"><br />
                </li>
              </ul>

              <button v-on:click="addAnswer">+ Answer</button>
              <div><button v-on:click="deleteQuestion(question)"> x Q </button></div>
            </div>

            <button v-on:click="addQuestion">Add question</button>
          </div>

          <div>
            <label for="types">Title</label>
            <input type="text" class="form-control" v-model="title" placeholder="Enter title">
          </div>

          <div>
            <label for="types">Content</label>
            <textarea class="form-control" v-model="content" placeholder="Enter content">
            </textarea>
          </div>

          <button class="button btn-default" v-on:click="submit">Submit</button>
      </div>
    </div>
    <pre>{{ $data | json }}</pre>
  </main>
</template>

<script>
  import Post from '../components/Assignment'
  import Question from '../components/Question'
  import store from '../store'

  export default {
    components: {
      Post,
      Question
    },

    data () {
      return {
        id: '',
        title: '',
        content: '',
        createdAt: '',
        type: '',
        assignmentType: '',
        assignmentOptions: [
          { text: 'Text', value: 'text' },
          { text: 'Multiple Choice', value: 'multiple' },
          { text: 'Code', value: 'code' }
        ],
        questions: [],
        newAnswer: {},
        posts: []
      }
    },

    created () {
      store.reloadPosts(this, 'posts')
    },

    methods: {
      submit (e) {
        e.preventDefault()

        const data = {
          'type': 'post',
          'title': this.title,
          'content': this.content,
          'assignmentType': this.assignmentType,
          'questions': this.questions,
          'createdAt': new Date().toJSON()
        }

        store.create(data).then(results => {
          store.reloadPosts(this, 'posts')
          location.href = '/'
        })

        console.log(data)
      },

      checkType () {
        var thetype = document.getElementById('types')
        if (thetype.options[thetype.selectedIndex].value === 'multiple') {
          console.log('text')
        }
      },

      addQuestion () {
        this.questions.push({
          question: this.questions.question,
          answers: [{ 'answer': '' }]
        })
      },

      addAnswer () {
        this.questions.push({ 'answer': '' })
      },

      deleteQuestion (question) {
        console.log('deleting question')
        this.questions.splice(this.questions.indexOf(question), 1)
      },

      deleteAnswer (answer) {
        console.log('deleting answer')
        this.answers.splice(this.answers.indexOf(answer), 1)
      }
    }
  }
</script>
