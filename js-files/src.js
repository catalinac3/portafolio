// turn the style :focus given by the css when the page is loaded
document.getElementById("start-focus").focus()

// The openEducation() function is called when the user clicks on one of the buttons of the tab menu.
// it is called through the onclick at the button in html
// it change on the content the style: block to display, none to not display, depending on which button has been pressed
// buttons and content are connected with id of the content.
function openEducation(educationType) {
  var selectedText = document.getElementById(educationType);
  // x is the array containing the content that each button is suppossed to display
  var texts = document.getElementsByClassName("education");
  
  for (var i = 0; i < texts.length; i++) {
    // desactivates any text that is not being selected.
    texts[i].style.display = texts[i].id === selectedText.id ? "block" : "none";
  }
}
