
<template>
  <main class="create-assignment">
    <div class="row">
      <div class="col-md-12">
        <h1>Create Assignment</h1>
      </div>
      <mu-paper class="demo-paper" :zDepth="2">
      <div class="panel">
          <div>
            <mu-text-field v-model="title" hintText="Enter title" fullWidth /><br/>
          </div>

          <div>
            <mu-text-field v-model="content" hintText="Assignment description" multiLine :rows="2" :rowsMax="10" fullWidth />
          </div>

          <div>
              <mu-select-field id="types" v-model="assignmentType" :labelFocusClass="['label-foucs']" label="Type of assignment">
                  <mu-menu-item v-for="option in assignmentOptions" :value="option.value" :title="option.text" :key="option" />
              </mu-select-field>
          </div>

          <div id="multipleChoice" class="multiple-choice">
              <div v-for="(question, index) in questions">
                  <div class="multiple-choice__question">
                      <mu-text-field v-model="question.question" hintText="Question" fullWidth />
                  </div>

                  <ul class="multiple-choice__answers">
                      <li v-for="(answers, index) in question.answers">
                          <mu-text-field v-model="answers.answer" hintText="Answer" fullWidth />
                          <span v-on:click="deleteAnswer(question, answers)" class="multiple-choice__remove-answer">x</span>
                      </li>
                  </ul>

                  <mu-raised-button v-on:click="addAnswer(question)" class="multiple-choice__add-answer" label="Add Answer" />
                  <mu-raised-button v-on:click="deleteQuestion(question)" class="multiple-choice__remove-question" label="Remove Question" />
              </div>

              <mu-raised-button v-on:click="addQuestion" label="Add question" class="multiple-choice__add-question" secondary />
          </div>

          <mu-raised-button v-on:click="submit" label="Submit Assignment" primary />
      </div>
      </mu-paper>
    </div>
    <pre>{{ $data | json }}</pre>
  </main>
</template>

<script>
  import store from '../store'

  export default {
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
        questions: []
      }
    },

    watch: {
      assignmentType: function () {
        if (this.assignmentType === 'multiple') {
          document.getElementById('multipleChoice').style.display = 'block'
        } else {
          document.getElementById('multipleChoice').style.display = 'none'
        }
      }
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
      },

      addQuestion () {
        this.questions.push({
          question: this.questions.question,
          answers: [{ 'answer': '' }]
        })
      },

      deleteQuestion (question) {
        this.questions.splice(this.questions.indexOf(question), 1)
      },

      addAnswer (question) {
        console.log(question.answers)
        question.answers.push({ 'answer': '' })
      },

      deleteAnswer (question, answers) {
        console.log(question.answers)
        question.answers.splice(question.answers.indexOf(answers), 1)
      }
    }
  }
</script>
