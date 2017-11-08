<template>
  <ul class="entries-list">
    <li class="entry" key="entry" v-for="entry in entries">{{ entry }}</li>
  </ul>
</template>

<script>
    export default {
      props: ['entries']
    }
</script>

<style lang="stylus" scoped>
  .entries-list
    padding: 0
    list-style: none
    display: flex
    flex-flow: row wrap
    justify-content: center
    align-items: center
    text-align: center

  .entry
    margin: 5px;
    box-sizing: border-box
    &:first-child
      width: 100%
      font-size: 5em
      display: block
</style>
