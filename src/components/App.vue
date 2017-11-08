<template>
    <div id="app">
        <MainPanel :entry="currentEntry.entry" :queue="currentEntry.queue"/>
        <CardList :queues="queues" />
    </div>

</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
    import CardList from './CardList.vue';
    import MainPanel from './MainPanel.vue';
    export default {
        computed : mapState([
        'queues', 'currentEntry'
        ]),
        components: { CardList, MainPanel },
        methods: {
            ...mapActions([
            'increment',
            'decrement'
            ])
        }
    }
</script>

<style lang="stylus">
    body
        font-family: 'Ubuntu Mono', cursive
        margin: 0
        overflow: hidden

    #app
      display: flex
      height: 100vh
</style>
