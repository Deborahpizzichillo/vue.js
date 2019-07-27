new Vue({
	el: '#exercise',
	data: {
		Name: 'Deborah Pizzichillo',
		age: 26,
		Images: 'http://www.sinoorigin.com/images/classical-figure-painting/large/A%20portrait%20of%20a%20Woman.jpg',
	},
	methods: {
		multipliedAge: function(multiplier){
			return this.age * multiplier
		},
		randomFloat: function(){
			return Math.random()
		}
	}
});


