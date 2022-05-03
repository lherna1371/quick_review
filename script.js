
// 1
// create a button and append it to the card element 

let button = document.createElement('button');
button.textContent = 'click me!'

let card = document.querySelector('.card')
card.append(button)


// 2
// inlude a class (title) to the p tag for job/role title 

// 3
// Select all the link and set them to target _blank

let aTags = document.querySelectorAll('a');

for(let i = 0; i < aTags.length; i++){
    aTags[i].setAttribute('target', '_blank')
}


// 4
// add an event listener to the button and on click call updateCard function


button.addEventListener('click', function(e){
    console.log(e)

    // select and update h2 text 
    let educationHeader = document.querySelector('.education-h');
    educationHeader.style.color = 'red';


    // udpate card color
    card.style.backgroundColor = 'red';

    // remove ul to remove li items 
    let ulItem = document.querySelector('ul')
    ulItem.remove()
})