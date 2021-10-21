const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const quotes = ["<q>There are many reasons why I am not grieved, O men of Athens, at the vote of condemnation. I expected it, and am only surprised that the votes are so nearly equal.</q>", "<q>The life which is unexamined is not worth living.</q>", "<q>A man who is good for anything ought not to calculate the chance of living or dying; he ought only to consider whether in doing anything he is doing right or wrong.</q>", "<q>It is not difficult to avoid death, gentlemen of the jury; it is much more difficult to avoid wickedness, for it runs faster than death.</q>"]
const quoteDisplay = document.getElementById("quote");



 function changeQuote(currentQuoteIndex, direction){
if(direction === "next"){
  fadeOutLeft(quote,function(){
    let nextQuoteIndex = currentQuoteIndex + 1;
    nextQuoteIndex === quotes.length ? nextQuoteIndex = 0 : {}
    quote.innerHTML = quotes[nextQuoteIndex]
    fadeInRight(quote)
    

});
}
else if (direction ==="prev"){
fadeOutRight(quote,function(){
        let nextQuoteIndex = currentQuoteIndex - 1;
    nextQuoteIndex <= -1 ? nextQuoteIndex = quotes.length -1 : {}
    quote.innerHTML = quotes[nextQuoteIndex];
      fadeInLeft(quote)
})
}

}



function getQuoteIndex(){
const index = quotes.findIndex(quote => quote == quoteDisplay.innerHTML);
return index;
}

prevBtn.addEventListener('click',function() {
 disableButton(prevBtn);
changeQuote(getQuoteIndex(),'prev');
});


nextBtn.addEventListener('click',function() {
disableButton(nextBtn);
changeQuote(getQuoteIndex(),'next');
});


function fadeOutLeft(element, callback){
element.animate([ {
    opacity: '1',
   transform: 'translate(0)'
},
{
   opacity: '0',
   transform: 'translate(-100%)'
}],{duration: 400, iterations: 1} );
setTimeout(() => {
    callback();
}, 350);
}

function fadeOutRight(element, callback){
element.animate([ {
    opacity: '1',
   transform: 'translate(0)'
},
{
   opacity: '0',
   transform: 'translate(100%)'
}],{duration: 400, iterations: 1} );
setTimeout(() => {
    callback();
}, 350);
}

function fadeInRight(element){
element.animate([ {
    opacity: `0`,
    transform: `translate(100%)`
},
               {
    opacity: `1`,
    transform: `translate(0)`
}],{duration: 400, iterations: 1} );
}

function fadeInLeft(element){
element.animate([ {
    opacity: `0`,
    transform: `translate(-100%)`
},
               {
    opacity: `1`,
    transform: `translate(0)`
}],{duration: 400, iterations: 1} );
}

function disableButton(element){
element.classList.add("disabled");
setTimeout(() => {
    element.classList.remove("disabled");
}, 500);
}

