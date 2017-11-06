<template>
    <div id="app">
        <div v-for="queue in queues">
	    <h1>{{ queue.name }}</h1>
	    <p>{{ queue.priority }}</p>
	</div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
    export default {
        computed : mapState([
            'queues'
        ]),
        methods: {
            ...mapActions([
                'increment',
                'decrement'
            ])
        }
    }
</script>

<style lang="scss">
    $color : black;
    h1{
        color: $color;
        background-color: lightyellow;
    }
</style>
