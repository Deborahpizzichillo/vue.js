const slider = new Vue ({
	el: '#slider',
	data(){
		return {
			val: 70
		}
	},
	mounted(){
		this.val = Math.floor(Math.random() * 101)
	},
	computed: {
		getPlacement: function(){
			return `${(-0.009 * ((this.val * -1) + 104))}em`;
		},
		greaterThanFifty: function(){
			return this.val > 50 ? `var(--roundness)` : `0`;
		},
		getHappinessColor: function(){
  		return `rgba(255, ${106 + (103 / 100 * this.val)}, ${(Math.floor(this.val * -1 / 7.692)) + 13}`;
		},
		getSliderBackground: function(){
			return `linear-gradient(to right, var(--orange), ${(this.val * -1) + 125}%, var(--yellow))`
		},
		getHappiness: function(){
			//This used to be a lengthy if/else; shoutout to @raddevus for suggesting this clever method to shorten the code
			let moods = ["😡","😠","😦","☹️","🙁","😐","🙂","😊","😄","😃","😍"]
			if(this.val == 0){
				return "🤬";
			} else {
				return moods[(Math.floor(this.val / 10))];
			}
		}
	}
});