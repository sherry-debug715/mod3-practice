/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");

        if (!res.ok) { // check if response returned an error
            throw new Error("Network response was not ok");
        };


        const data = await res.json();

        const url = data.message; // URL of new dog image
        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        const newUrl = new URL(url).pathname;
        const convertToArr = newUrl.split("/");
        const breed = convertToArr[2]; 

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const newLi = document.createElement("li");
        const newFigure = document.createElement("figure");
        const newFigcaption = document.createElement("figcaption");
        const newImg = document.createElement("img");
        
        newImg.src = url;
        newFigcaption.innerText = breed;

        newLi.appendChild(newFigure);
        newFigure.appendChild(newImg);
        newFigure.appendChild(newFigcaption);
        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        document.querySelector(".gallery ul").appendChild(newLi);

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const getUl = document.querySelector(".gallery ul");
    const dogLists = getUl.children;
    dogLists[0].remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const getUl = document.querySelector(".gallery ul");
    const dogLists = getUl.children;
    dogLists[dogLists.length-1].remove();
    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});