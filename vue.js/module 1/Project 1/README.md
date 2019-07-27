#The Monster Slayer

Vue.js
Project 1

So we covered a lot of the basics until now, we learned how we can interact with the template of vue.js, how we can output data there, how we can listen to events and we also had a look at how we could conditionally render content with v-if or v-show and how we can render a list. I'd say before we dive into the depths of vue.js and learn more about what this vue.js instance we're using, let's take the knowledge we gathered until now and let's build our first course project so that we could actually see what we can already do with that knowledge.

We're going to build a little game here, we fight against a monster and once I click on start new game we got the ability to attack, to make a special attack, to heal or to give up. If I attack, I do a random amount of damage logged down there and I also take some damage as the monster has a chance to attack me. I can also launch a special attack and if I take too much damage of course, I can heal up here, meanwhile the monster still attacks me but overall, I should gain some health at least. And if I get a feeling this all is not ending well, well I can always give up and therefore start a new game but now let's quickly defeat this monster here and yeah, we won and can either now start a new game again or just cancel and either start a new game here or leave.

This is the very basic application, this little game and as you might already be able to tell, it uses a lot of the things we practiced. It clearly listens to events, it conditionally shows you different buttons and this log which is clearly a list getting rendered here, we have our health bars here which are kind of managed by the application and much more. So this is what we're going to build, now the challenge for you is try building this on your own, features used are of course v-if for conditionally showing things, v-for this list, we're probably somehow setting the styles on the monster and our health bar and we need some methods to be executed whenever we click one of the buttons. Again when we click attack or any button besides give up, we always have two rounds getting executed, our round where we do some damage or heal ourselves and a round for the monster where it is able to damage us.

This is the challenge, try building this game and thereafter, we'll do this together and you can compare your solution to mine. Challenge mine obviously and see how I solve this. The styles and the general html code for this project can be found attached to this video you so that you don't have to worry about setting this interface up but can really focus on the javascript code.
Downloads

Download the starting files here


