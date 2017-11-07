<template functional>
    <div class="card-container">
        <h1>{{ title }}</h1>
        <p>{{ priority }}</p>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
    export default {
        props: ['title', 'priority']
    }
</script>

<style lang="stylus" scoped>
  .card-container
    display block
    border: 1px solid rgba(0,0,0,0.1)
    padding: 10px
    margin: 5px

  h1
    color: black
</style>
