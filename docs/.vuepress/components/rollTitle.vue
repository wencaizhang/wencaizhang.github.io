<template>
  <section>
    <button
      title="开启滚动效果"
      @click="start"
    >
      Start
    </button>
    <button
      title="停止滚动效果"
      @click="stop"
    >
      Stop
    </button>
    <button
      title="重置标题"
      @click="reset"
    >
      Reset
    </button>
  </section>
</template>

<script>
var rollTitle = {
  timer: '',
  title: '',
  start: function (title, delay, callback) {
    var delay = delay || 300
    var title = title || document.title
    var step = 0
    var len = title.length
    var changeTitle = function (step) {
      // 根据时间每次将切割后前面的字加到后面，直到step比标题个数还大，重新开始
      document.title = title.substring(step, len) + title.substring(0, step)
    }
    this.title = document.title
    this.stop()
    this.timer = setInterval(function () {
      changeTitle(step)
      callback && typeof callback === 'function' && callback()
      step++
      if (step > len) step = 0
    }, delay) // 根据需求自己调整速度
  },
  stop: function () {
    clearInterval(this.timer)
  },
  reset: function (title) {
    document.title = title || this.title
  },
}

export default {
  name: 'RollTitle',
  data () {
    return {
      rollTitle,
    }
  },
  mounted () {
    this.$bus.$on('stopRollTitle', () => {
      this.stop()
    })
  },
  methods: {
    start () {
      this.rollTitle.start()
    },
    stop () {
      this.rollTitle.stop()
    },
    reset () {
      this.rollTitle.reset()
    },
  },
}
</script>

<style src='./styles/button.css'>
</style>
