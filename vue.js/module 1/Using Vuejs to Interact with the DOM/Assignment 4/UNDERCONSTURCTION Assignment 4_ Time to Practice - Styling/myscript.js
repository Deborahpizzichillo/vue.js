new Vue({
    el: "#exercise",
    data: {
      applyEffect: false,
      effectClass: [],
      userInputClass: '',
      cssClass: '',
      applyCSSClass: '',
      cssStyle: '',
      progress: 0
    },
    watch: {
      applyEffect: function(value) {
        this.effectClass = value ? ['highlight'] : ['shrink'];
      }
    },
    computed: {
      className: function() {
        var obj = {}
        if (this.applyCSSClass === 'true')
          obj[this.cssClass] = this.applyCSSClass
        return obj
      }
    },
    methods: {
      startEffect: function() {
        var vm = this;
        setInterval(function() {
          vm.applyEffect = !vm.applyEffect;
        }, 1000)
      },
      startProgress: function() {
        var vm = this
        setInterval(function() {
          if (vm.progress >= 100) {
            vm.progress = 0;
          }
          vm.progress++
        }, 500)
      }
    }
  })
  