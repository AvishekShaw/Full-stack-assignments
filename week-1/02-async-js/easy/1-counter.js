/* Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second */

num = 0

function counter(){
    num += 1;
    console.clear();
    console.log(num);
}

setInterval(counter,1000)
