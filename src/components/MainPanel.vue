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
</style>
