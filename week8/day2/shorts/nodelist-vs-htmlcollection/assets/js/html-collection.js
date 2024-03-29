export default () => {
  const bodyChildElements = document.body.children; // HTMLCollection [div]
  console.log(bodyChildElements);

  const div = bodyChildElements[0];

  const divChildElements = div.children; // HTMLCollection [span]
  const helloWorld = div.innerText; // Hello World! Yes!    <-- NOT Hello World!
  setTimeout(() => {
    div.innerText = "Change the world"
  },[1000]);

  const span = divChildElements[0]; // <span>Yes!</span>
  // debugger
};