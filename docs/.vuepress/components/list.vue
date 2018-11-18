<template>
  <div class="cpt-list">
    <ul v-for="item in $site.pages">
        <li v-if="item.path.indexOf($page.path) != -1 && item.path !== $page.path">
          <a v-bind:href="item.path">{{ item.title }}</a>
        </li>
    </ul>
    </div>
</template>

<style lang="stylus">
 @import '../styles/index.styl';
</style>


