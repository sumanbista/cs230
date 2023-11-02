const $ = document.querySelector.bind(document)
let clickCount = 0

function hello(){
    clickCount ++;
    alert('You clicked the button '+ clickCount+ ' times');
}

