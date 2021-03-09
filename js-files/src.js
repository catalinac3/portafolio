// this code changes the arrow color in the intro page
// while the mouse hover and out of hover

let downArrow = document.querySelector(".down-arrow img");

downArrow.addEventListener("mouseover", changeOnHover, false);
downArrow.addEventListener("mouseout", changeOutHover, false);

function changeOnHover() {
  downArrow.setAttribute("src", "images/downArrowHover.svg");
}

function changeOutHover() {
  downArrow.setAttribute("src", "images/downArrow.svg");
}

/**
 * @param {String} educationType;
 * Control content displayed of the tab menu in the education section,
 * which changes by clicking on a button of the tab.
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

// todo --> use youtube api to control when the video
// stops playing and continous to play

// todo --> responsive design for video

videoLink = document.querySelector("#video-hyperlink");
video = document.querySelector("#video-pop-up");
overlay = document.querySelector("#overlay");
closebtn = document.querySelector(".close-btn");

videoLink.addEventListener("click", showVideo);
closebtn.addEventListener("click", hideVideo);

/**
 * shows video when pressing on
 * the video icon
 */
function showVideo() {
  console.log("show video");
  overlay.style.display = "block";
  video.style.display = "block";
}

/**
 * hides video when pressing on
 * the video-slash icon
 */
function hideVideo() {
  console.log("display video");
  video.style.display = "none";
  overlay.style.display = "none";
}
