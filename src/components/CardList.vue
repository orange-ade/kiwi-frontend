<template>
        <div class="cards-list">
            <Card v-for="queue in queues" :key="queue.title" v-bind="queue" />
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
  .cards-list
    display: flex
    flex: 1
    align-items: center 
    padding: 10px
</style>
