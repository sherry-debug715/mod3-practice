window.addEventListener("DOMContentLoaded", event => {
    
    handleCheckBoxEvent();
    
    handleInputMirror();

});

function handleCheckBoxEvent () {
    const getCheckbox = document.getElementById("on-off");
    const getHiddenContent = document.getElementById("now-you-see-me");

    getCheckbox.addEventListener("click", event => {
        if (getCheckbox.checked) {
            getHiddenContent.classList.remove("hide");
            getHiddenContent.classList.add("show");
        } else {
            getHiddenContent.classList.remove("show");
            getHiddenContent.classList.add("hide");
        };
    });
};

function handleInputMirror () {
    const getInput = document.getElementById("original");
    const getMirroredDiv = document.getElementById("mirrored");

    getInput.addEventListener("input", event => {
        const inputValue = getInput.value;
        getMirroredDiv.innerText = inputValue;
    });
};


