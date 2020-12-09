<template>
  <div>
    <button @click="show">Loading</button>
  </div>
</template>

<script>

export default {
  methods: {
    show () {
      const create = this.$create({ 
        type: 'spiningSpot',
        color: 'white',
        bgColor: 'rgba(0, 0, 0, 0.7)',
        text: '加载中...',
        size: 60,
        textStyle: {
          color: 'white',
          'font-size': '14px',
          'font-weight': 'bolder'
        }
       })
      create.show()
      setTimeout(() => {
        create.hide()
      }, 2000)
    }
  }
}
</script>

<style lang="scss">

</style>
