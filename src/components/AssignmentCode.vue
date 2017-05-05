<template>
  <div>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" title="View">

      </mu-tab>
      <mu-tab value="tab2" title="Controller">

      </mu-tab>
      <mu-tab value="tab3" title="Model">

      </mu-tab>
      <mu-tab value="tab4" title="Javascript">

      </mu-tab>
    </mu-tabs>

    <div class="assignment__input" v-if="activeTab === 'tab1'">
      <editor v-model="code1" @init="editorInit();" lang="php" theme="monokai" width="600" height="380"></editor>
    </div>

    <div class="assignment__input" v-if="activeTab === 'tab2'">
      <editor v-model="code2" @init="editorInit();" lang="php" theme="monokai" width="600" height="380"></editor>
    </div>

    <div class="assignment__input" v-if="activeTab === 'tab3'">
      <editor v-model="code3" @init="editorInit();" lang="php" theme="monokai" width="600" height="380"></editor>
    </div>

    <div class="assignment__input" v-if="activeTab === 'tab4'">
      <editor v-model="code4" @init="editorInit();" lang="php" theme="monokai" width="600" height="380"></editor>
    </div>

    <br />
    <mu-raised-button label="Submit" secondary />
    <mu-raised-button v-on:click="saveProgress" label="Save Progress" primary />

    <!--<div class="assignment__feedback">-->
      <!--<h2>Success!</h2>-->
      <!--<p>Feedback about your submission and progress</p>-->
    <!--</div>-->
    <pre>{{ $data | json }}</pre>
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
    }
  }
</script>
