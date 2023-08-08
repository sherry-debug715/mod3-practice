// create a new h1 element
// set the h1's id
// and give it some content
// add the text node to the newly created div
// add the newly created element and its content into the DOM
// run script when page is loaded

// const createNewDom = () => {
//     const newDiv = document.createElement("h1");

//     newDiv.setAttribute("id", "content-for-id");

//     const newContent = document.createTextNode("Hello World");

//     newDiv.appendChild(newContent);

//     document.body.appendChild(newDiv);
// };

// window.onload = createNewDom;


// PRACTICE 2

// const addElement = () => {
//     const newElementToAdd = document.createElement("h1");

//     newElementToAdd.innerText = "Hello World";

//     document.body.appendChild(newElementToAdd);
// };

// window.onload = addElement;

// PRACTICE 3

// if an element has id of 2, remove it

const removeSecondDiv = () => {
    //getElementsByTagName returns an HTMLCollection, not an array. The HTMLCollection object doesn't have the forEach method like arrays do.
    const divArr = document.getElementsByTagName("div");

    Array.from(divArr).forEach(div => {
        const divId = div.getAttribute("id");
        if (divId === "2") {
            div.remove();
            return;
        };
    });
};

window.onload = removeSecondDiv;