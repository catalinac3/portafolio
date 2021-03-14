// This code changes the arrow color in the intro page
// while the mouse hover in and out of the arrow

const downArrow = document.querySelector(".down-arrow img");

downArrow.addEventListener("mouseover", changeOnHover, false);
downArrow.addEventListener("mouseout", changeOutHover, false);

function changeOnHover() {
  downArrow.setAttribute("src", "images/downArrowHover.svg");
}

function changeOutHover() {
  downArrow.setAttribute("src", "images/downArrow.svg");
}

const texts = document.querySelectorAll(".tab-content");
const buttonInFocus = document.querySelectorAll(".tab-button");
console.log(buttonInFocus);
/**
 * @param {String} contentType;
 * Controls the content displayed on the tab menu in the education section,
 * which changes by clicking on a button of the tab.
 * it also controls the button style on the tab menu by adding and removing
 * the focus class
 */
function openTab(contentType) {
  const textId = "#" + contentType;
  const buttonSelector = ".tab-button" + "." + contentType;
  const selectedText = document.querySelector(textId);
  const selectedButton = document.querySelector(buttonSelector);
  // x is the array containing the content that each button is suppossed to display
  for (let i = 0; i < texts.length; i++) {
    // desactivates any text that is not being selected.
    texts[i].style.display = texts[i] === selectedText ? "block" : "none";
    if (buttonInFocus[i] == selectedButton) {
      buttonInFocus[i].classList.add("focus");
    } else {
      // remove the class focus in not selected buttons.
      buttonInFocus[i].classList.remove("focus");
    }
  }
}

// This code uses Iframe player API
// todo  start to play the video when the video is shown
// stop playing or pause, when the video is hidden.
let player;
function onYouTubeIframeAPIReady() {
  //first parameter of the player constructor is the DOM ID.
  //second parameter player options.
  player = new YT.Player("video", {
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  document.getElementById("video").style.borderColor = "black";
  event.target.setVolume(60);
}

function changeBorderColor(playerStatus) {
  let color;
  const states = new Set([-1, 0, 2]);
  // -1 unstarted, 0 ended, 1playing, 2 paused
  if (playerStatus == 1) {
    color = "rgb(237, 106, 90)";
  } else if (states.has(playerStatus)) {
    color = "rgb(185, 146, 159)";
  }
  if (color) {
    document.getElementById("video").style.borderColor = color;
  }
}
function onPlayerStateChange(event) {
  changeBorderColor(event.data);
}

const videoLink = document.querySelector("#video-hyperlink");
const overlay = document.querySelector("#overlay");
const videoPopUp = document.querySelector(".video-pop-up");
const closebtn = document.querySelector(".close-btn");

videoLink.addEventListener("click", showVideo);
closebtn.addEventListener("click", hideVideo);

/**
 * shows video when pressing on the video icon
 * if the video was paused previously it would continue playing
 */
function showVideo() {
  overlay.style.display = "block";
  videoPopUp.style.display = "block";
  player.playVideo();
}

/**
 * hides video when pressing on the video-slash icon
 * video will pause
 */
function hideVideo() {
  videoPopUp.style.display = "none";
  overlay.style.display = "none";
  player.pauseVideo();
}
