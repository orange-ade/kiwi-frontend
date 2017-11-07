<template>
    <div id="app">
        <MainPanel :entry="currentEntry.entry" :queue="currentEntry.queue"/>
        <div class="cards-list">
            <Card v-for="queue in queues" :key="queue.name" :title="queue.name" :priority="queue.priority"></Card>
        </div>
    </div>

</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
    import Card from './Card.vue';
    import MainPanel from './MainPanel.vue';
    export default {
        computed : mapState([
            'queues', 'currentEntry'
        ]),
        components: { Card, MainPanel },
        methods: {
            ...mapActions([
                'increment',
                'decrement'
            ])
        }
    }
</script>

<style lang="stylus" scoped>
    .cards-list
        display: flex
</style>
