var app = new Vue({
  el: '#nav',
  data() {
      return {
          isNavTransparent: true
      }
  },
  mounted() {
      window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
      handleScroll() {
          const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
          this.isNavTransparent = scrollTop < 30 // 假设阈值为100，即滚动距离小于100时导航栏为透明
      }
  }

})