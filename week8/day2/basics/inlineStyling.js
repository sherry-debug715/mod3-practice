const redText = () => {
    const fruitsArr = document.getElementsByTagName("li");
    
    const indexTracker = ["red", "orange", "yellow"];

    indexTracker.forEach((color, index) => {
        const fruit = fruitsArr[index];
        fruit.style.color = color;
    });

};

window.onload = redText;