# Readme
## Tribute Page
Hello!

I had initially completed this specific challenge on freeCodeCamp this month, but gladly took this opportunity to go back and give the site a well-needed renovation. The acclaimed philosopher Socrates strikes as particularly interesting due to the lack of any self-written works, and a tragic public sentencing culminating from an apparent humble desire of wisdom.    

### Some noteworthy points:  

* I've included a self-wrote carousel which contains various quotes pulled from Plato's _Apology_. This was surprisingly easy to create with the use of a flex container with `overflow: hidden` set on its content when animating/fading to the next quote. Some simple JavaScript stores the quotes in an array and cycles through the index to display each quote to the user with event listeners attached to the buttons.  

* While the site is somewhat responsive by design, the carousel and its attached `#quote-caption` gets very squashed on small viewport widths, likely due to the fixed `height` setting. A simple media query reduces its font-size and adjusts the `position` property of the latter to accommodate for the slimmer viewport.

---

I'd greatly appreciate any feedback. Here's the link below:

[Socrates Tribute Page](https://schoolofcode.github.io/w0d0_precourse-challenge-Laurence279/)