<template>
        <div class="cards-list">
            <Card v-for="queue in queues" :key="queue.name" :title="queue.name" :priority="queue.priority"></Card>
        </div>
</template>

<script>
    import Card from './Card.vue';
    export default {
	props: ['queues'],
        components: { Card },
    }
</script>

<style lang="stylus" scoped>
</style>
