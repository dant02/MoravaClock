// https://webos-devrel.github.io/webOS.js/
const assets = window.playlist || [];
const REMOTE_KEYS = {
  themeLight: 49,
  themeDark: 50,
  themeBlue: 51,
  rewind: 412,
  play: 415,
  fastForward: 417,
  pause: 19
};

const cl = document.getElementById("clock");
const ms = document.getElementById("milliseconds");
const body = document.body;
var index = 0;
const audioElement = createAudio("assets/" + assets[index]);

audioElement.addEventListener("ended", playNextTrack);

setInterval(updateClock, 100);

document.addEventListener("keydown", handleRemoteKeyDown, false);

function updateClock() {
  var date = new Date();
  var d = date.getMilliseconds();
  var t = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  cl.innerText = t;
  ms.innerText = (d - (d % 100)) / 100;
}

function createAudio(src) {
  var audioElement = new Audio(src);
  return audioElement;
}

function getAssetPath(trackIndex) {
  return "assets/" + assets[trackIndex];
}

function setTrack(trackIndex) {
  audioElement.src = getAssetPath(trackIndex);
}

function playCurrentTrack() {
  audioElement.play();
}

function pauseCurrentTrack() {
  audioElement.pause();
}

function playNextTrack() {
  if (!assets.length) {
    return;
  }

  index++;

  if (index >= assets.length) {
    index = 0;
  }

  setTrack(index);
  playCurrentTrack();
}

function playPreviousTrack() {
  if (!assets.length) {
    return;
  }

  index--;

  if (index < 0) {
    index = assets.length - 1;
  }

  setTrack(index);
  playCurrentTrack();
}

function applyTheme(backgroundColor, textColor) {
  body.style.backgroundColor = backgroundColor;
  body.style.color = textColor;
}

function setLightTheme() {
  applyTheme("white", "black");
}

function setDarkTheme() {
  applyTheme("black", "white");
}

function setBlueTheme() {
  applyTheme("#008", "white");
}

function handleRemoteKeyDown(event) {
  switch (event.keyCode) {
    case REMOTE_KEYS.themeLight:
      setLightTheme();
      break;
    case REMOTE_KEYS.themeDark:
      setDarkTheme();
      break;
    case REMOTE_KEYS.themeBlue:
      setBlueTheme();
      break;
    case REMOTE_KEYS.rewind:
      playPreviousTrack();
      break;
    case REMOTE_KEYS.play:
      playCurrentTrack();
      break;
    case REMOTE_KEYS.fastForward:
      playNextTrack();
      break;
    case REMOTE_KEYS.pause:
      pauseCurrentTrack();
      break;
  }
}
