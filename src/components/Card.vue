<template functional>
    <div class="card-container">
      <header>
        <h1 class="title">{{ title }}</h1>
        <h1 class="priority">{{ priority }}</h1>
      </header>
      <LastEntries :entries="lastEntries"/>
    </div>
</template>

<script>
    import LastEntries from './LastEntries.vue';
    export default {
        props: ['title', 'lastEntries', 'priority'],
	components: { LastEntries }
    }
</script>

<style lang="stylus" scoped>
  .card-container
    display block
    position: relative
    border: 1px solid rgba(0,0,0,0.1)
    padding: 30px 10px 10px 10px;
    margin: 10px
    flex: 1
    height: 200px
    box-sizing: border-box
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1)

  header
    position: absolute
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    right: 0
    top: 0
    padding: 5px 15px
    transform: scaleX(1.07)
    background: #ddd
    color: #333
    font-size: 0.7em
    box-sizing: border-box
    box-shadow: 0px 2px 3px rgba(0,0,0,0.5);

  .title, .priority
    margin: 0

  .priority
    background: #fe9684
    color: white
    border-radius: 50%
    width: 1em
    height: 1em
    padding: 3px
    text-align: center
    font-size: 1.2em

  border-size=8px
  after-and-before(leftColor, rightColor)
    content: ''
    position: absolute
    border-bottom: border-size solid transparent
    border-left: border-size solid leftColor
    border-right: border-size solid rightColor 
    top: 100%

  header:after
    after-and-before transparent #333
    left: -(border-size)

  header:before
    after-and-before #333 transparent 
    right: -(border-size)
</style>
