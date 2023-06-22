// index.js

let paragraph = document.getElementById('paragraph');

paragraph.setAttribute('id', 'info-paragraph');

let link = document.getElementById("google-link")

link.setAttribute("href", "http://www.google.com")
link.setAttribute("target", "_blank")

paragraph.removeAttribute('id');
paragraph.setAttribute('class', 'paragraph');

// index.js
// ...

let h2Tag = document.createElement('h2');
h2Tag.innerHTML = 'Elephant';
console.log(h2Tag); // <== <h2></h2>

// index.js
// ...
let parent = document.getElementsByTagName('body')[0];
parent.appendChild(h2Tag);

// index.js
// ...
let text = document.createTextNode('This text is created dynamically  ');

parent.appendChild(text);

let newNode = document.createElement('p')

newNode.innerText = "Hi there! I am using JavaScript"

parent.appendChild(newNode)

let h1Tag = document.createElement('h1');
h1Tag.innerHTML = 'Heading 1 - comes before Heading 2';
parent.insertBefore(h1Tag, h2Tag);

let input = document.createElement('input')

let button = document.getElementById("add-item-button")

parent.insertBefore(input, button)

let hello = document.getElementById("hello")

parent.removeChild(hello)
parent.removeChild(h2Tag)

let contentDiv = document.getElementById('content');


let superList = document.getElementsByClassName("super-list")[0]

parent.removeChild(superList)

console.log(button)

let list = document.getElementById("item-list")

let first = 1


 
button.onclick = function() {


    list.innerHTML += `<li>Item number ${first}</li>`
    first++
  console.log('adding an element to the list');
};

let thisInput = document.getElementById("this-input")

console.log(thisInput.value)

let sendButton = document.getElementById('send-btn');
// move the input inside the function (this step is optional):
sendButton.onclick = function() {
    let thisInput = document.getElementById("this-input")

    console.log(thisInput.value)
};

let liTags = document.getElementsByTagName('li');

let thisList = document.getElementsByClassName('list')[0]

console.log(thisList)

for (let i = 0; i < liTags.length; i++) {
  liTags[i].onclick = function(e) {

    console.log(e.currentTarget.innerHTML);
    thisList.removeChild(liTags[i])
  };
}


// console.log(paragraph); // <== <p id="paragraph">What is your name?</p>
