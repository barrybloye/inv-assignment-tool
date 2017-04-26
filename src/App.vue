<template>
  <div id="wrapper">
    <header class="header">
      <a class="logo" :href="'#/posts'">
        <span>Blended Learning Tool</span>
      </a>
      <a href="/#/create" class="create">Create assignment</a>
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
