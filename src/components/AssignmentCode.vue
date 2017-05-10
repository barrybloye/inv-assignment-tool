<template>
  <div class="assigment__code">
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab v-for="(file, index) in $parent.post.files" :value="index" :key="file" >
          {{ file.fileName }}.{{ file.fileType }}
      </mu-tab>
    </mu-tabs>

    <div class="assignment__code-tab" v-for="(file, index) in $parent.post.files" :key="file" v-bind:id="index">
      <editor v-model="files[file.fileId]" @init="editorInit();" lang="php" theme="monokai" width="600" height="380"></editor>
    </div>

    <mu-raised-button label="Submit" secondary />

    <!--<div class="assignment__feedback">-->
      <!--<h2>Success!</h2>-->
      <!--<p>Feedback about your submission and progress</p>-->
    <!--</div>-->
  </div>

</template>

<script>
  import store from '../store'
  import _ from 'lodash'

  export default {
    name: 'assignment-code',

    data () {
      return {
        activeTab: 'tab1',
        files: this.getFileModel()
      }
    },
    methods: {
      submit (e) {
        e.preventDefault()

        const data = {
          files: this.getFileModel()
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
        require('../../node_modules/brace/mode/php')
      },
      getFileId () {
        var fileId = []

        _.forEach(this.$parent.post.files, function (value) {
          fileId.push(value.fileId)
        })

        return fileId
      },
      getFileContent () {
        var fileContent = []

        _.forEach(this.$parent.post.files, function (value) {
          fileContent.push(value.fileContent)
        })

        return fileContent
      },
      getFileModel () {
        return _.zipObject(this.getFileId(), this.getFileContent())
      }
    },
    components: {
      editor: require('vue2-ace-editor')
    },
    mounted () {
      document.getElementById(0).style.display = 'block'
    }
  }
</script>
