<template>
  <div class="assigment__code">
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab v-for="(file, index) in $parent.post.files" :value="index" :key="file" >
          {{ file.fileName }}.{{ file.fileType }}
      </mu-tab>
    </mu-tabs>

    <div class="assignment__code-tab" v-for="(file, index) in $parent.post.files" :key="file" v-bind:id="index">
      <editor v-model="form[file.id]" @init="editorInit();" lang="php" theme="monokai" width="600" height="380"></editor>
    </div>

    <br />
    <mu-raised-button label="Submit" secondary />
    <mu-raised-button label="Save Progress" primary />

    <!--<div class="assignment__feedback">-->
      <!--<h2>Success!</h2>-->
      <!--<p>Feedback about your submission and progress</p>-->
    <!--</div>-->
    <pre>{{ $data }}</pre>
    <pre>{{ $parent.post }}</pre>
  </div>

</template>

<script>
  import store from '../store'

  export default {
    name: 'assignment-code',

    data () {
      return {
        activeTab: 'tab1',
        code1: '',
        code2: '',
        code3: '',
        code4: ''
      }
    },
    methods: {
      submit (e) {
        e.preventDefault()

        const data = {
          'code1': this.code1,
          'code2': this.code2,
          'code3': this.code3,
          'code4': this.code4
        }

        store.create(data).then(results => {
          store.reloadPosts(this, 'posts')
        })
      },
      handleTabChange (val) {
        this.activeTab = val

        var elements = document.getElementsByClassName('assignment__code-tab')

        for (var i = 0, length = elements.length; i < length; i++) {
          elements[i].style.display = 'none'
        }

        document.getElementById(this.activeTab).style.display = 'block'
      },
      editorInit: function () {
        require('../../node_modules/brace/theme/monokai')
        require('../../node_modules/brace/mode/html')
        require('../../node_modules/brace/mode/javascript')
        require('../../node_modules/brace/mode/php')
      }
    },
    components: {
      editor: require('vue2-ace-editor'),
      editor2: require('vue2-ace-editor'),
      editor3: require('vue2-ace-editor'),
      editor4: require('vue2-ace-editor')
    },
    mounted () {
      document.getElementById(0).style.display = 'block'
    }
  }
</script>
