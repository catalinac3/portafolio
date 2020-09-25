// The openEducation() function is called when the user clicks on one of the buttons in the menu.
// it is called through the onclick at the button in html
function openEducation(educationType) {
  var selectedText = document.getElementById(educationType);
  // x is the array containing the content that each button is suppossed to display
  var texts = document.getElementsByClassName("education");
  for (var i = 0; i < texts.length; i++) {
    // desactivates any text that is not being selected.
    // deactivated style="display:none" from html
    // activated:  style="display:block"
    texts[i].style.display = texts[i].id === selectedText.id ? "block" : "none";
  }
}
