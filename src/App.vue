<template>
  <div id="wrapper">
    <header class="header">
      <a class="logo" :href="'#/posts'">
        <span>Blended Learning Tool</span>
      </a>
      <mu-raised-button href="/#/create" class="link__create-assignment" label="Create assignment" primary />
    </header>
    <div class="container">
      <router-view
          class="view"
          keep-alive
          transition
          transition-mode="out-in">
      </router-view>
    </div>
  </div>
</template>

<style lang="scss">
  @import "./scss/main.scss"
</style>
