// gives the style :focus to the element.  Displays the tab programming
// courses on the education section when the page is load.
//todo: find another way!!!!!!!!!!!!
//document.getElementById("start-focus").focus();
// to take the foucs out of the education section and
// give it to the top of the page, when the page is loaded.
//document.querySelector("h1").focus();

/**
 * @param {String} educationType;
 * Control content displayed of the tab menu, which changes by clicking
 * on a button of the tab.
 */
function openEducation(educationType) {
  let selectedText = document.getElementById(educationType);
  // x is the array containing the content that each button is suppossed to display
  let texts = document.getElementsByClassName("education");

  for (let i = 0; i < texts.length; i++) {
    // desactivates any text that is not being selected.
    texts[i].style.display = texts[i].id === selectedText.id ? "block" : "none";
  }
}

//----------------hover text for the icons--------------------------------
// function displayText(e) {
//   console.log("mouseover");
//   let title = this.title;
//   this.setAttribute("tooltip", title);
// }

// function hideText(e) {
//   console.log("mouseout");
//   this.removeAttribute("tooltip");
// }

// let jsIcon = document.querySelector("#js");
// jsIcon.addEventListener("mouseover", displayText, false);
// jsIcon.addEventListener("mouseout", hideText, false);
