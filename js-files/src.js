// This code changes the arrow color in the intro page
// while the mouse hover in and out of the arrow

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
  document.getElementById("video").style.borderColor = "#FF6D00";
  console.log("video is ready");
  event.target.setVolume(60);
  console.log("the volume is set to 60%");
}

function changeBorderColor(playerStatus) {
  var color;
  if (playerStatus == -1) {
    color = "#37474F"; // unstarted = gray
  } else if (playerStatus == 0) {
    color = "#FFFF00"; // ended = yellow
  } else if (playerStatus == 1) {
    color = "#33691E"; // playing = green
  } else if (playerStatus == 2) {
    color = "#DD2C00"; // paused = red
  } else if (playerStatus == 3) {
    color = "#AA00FF"; // buffering = purple
  } else if (playerStatus == 5) {
    color = "#FF6DOO"; // video cued = orange
  }
  if (color) {
    document.getElementById("video").style.borderColor = color;
  }
}
function onPlayerStateChange(event) {
  changeBorderColor(event.data);
}

videoLink = document.querySelector("#video-hyperlink");
videoPopUp = document.querySelector(".video-pop-up");
overlay = document.querySelector("#overlay");
closebtn = document.querySelector(".close-btn");

videoLink.addEventListener("click", showVideo);
closebtn.addEventListener("click", hideVideo);

/**
 * shows video when pressing on the video icon
 * if the video was paused previously it would continue playing
 */
function showVideo() {
  console.log("show video");
  overlay.style.display = "block";
  videoPopUp.style.display = "block";
  player.playVideo();
}

/**
 * hides video when pressing on the video-slash icon
 * video will pause
 */
function hideVideo() {
  console.log("display video");
  videoPopUp.style.display = "none";
  overlay.style.display = "none";
  player.pauseVideo();
}
