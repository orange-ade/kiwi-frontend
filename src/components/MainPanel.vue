<template>
  <div class="main-panel-container">
    <h1>{{ entry }}</h1>
    <p>{{ queue }}</p>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  export default {
    props: ['entry', 'queue']
  }
</script>

<style lang="stylus" scoped>
  .main-panel-container
    width: 40%
    font-size: 5em
    text-align: center
    display: flex
    flex-direction: column
    justify-content: center
    margin: 0 40px
    box-sizing: border-box
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3)
    height: 50%
    position: relative
    top: 50%
    transform: translateY(-50%)
  h1, p
    margin: 0

  p
    color: #555
</style>
