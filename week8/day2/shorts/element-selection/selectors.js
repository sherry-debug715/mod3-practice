const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const allSeedFruitsArr = document.getElementsByClassName("seed");

    // 2. Get all seedless fruit elements
    // Your code here
    const allSeedlessFruitsArr = document.getElementsByClassName("seedless");

    // 3. Get first seedless fruit element
    // Your code here
    const firstSeedlessFruit = allSeedlessFruitsArr[0];

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    const wrapperDiv = document.getElementById("wrapper");
    const pTag = wrapperDiv.children[0];
    const span = pTag.children[0];

    // 5. Get all children of element "wrapper"
    // Your code here
    const wrapper = document.getElementById("wrapper");
    const wrapperChildren = wrapper.children;

    // 6. Get all odd number list items in the list
    // Your code here
    const oddNumberList = document.getElementsByClassName("odd");

    // 7. Get all even number list items in the list
    // Your code here
    const evenNumber = Array.from(oddNumberList).map(oddNode => oddNode.nextElementSibling);

    evenNumber.forEach(node => console.log(node.innerText));

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const techSection = document.getElementById("three");

    const getTechCompaniesList = techSection.querySelector("p");

    const noClassName = getTechCompaniesList.children[0];

    console.log("noClassName", noClassName)

    // 9. Get "Amazon" list element
    // Your code here
    const amazonList = getTechCompaniesList.querySelector(".shopping");

    console.log("amazonList", amazonList)
    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const unicorns = document.querySelectorAll(".unicorn");

    const returnedList = [...unicorns].map(imgNode => imgNode.parentElement);

    console.log("returnedList", returnedList)
}

window.onload = select;