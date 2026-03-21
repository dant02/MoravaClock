// https://webos-devrel.github.io/webOS.js/
const assets = window.playlist || [];

const cl = document.getElementById("clock");
const ms = document.getElementById("milliseconds");

setInterval(function () {
  var date = new Date();
  var d = date.getMilliseconds();
  var t = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  cl.innerText = t;
  ms.innerText = (d - (d % 100)) / 100;
}, 100);

function playAudio(src) {
  var audioElement = new Audio(src);
  return audioElement;
}

var index = 0;

function endPlay() {
  index++;

  if (index >= assets.length) {
    index = 0;
  }

  audioElement.src = "assets/" + assets[index];
  audioElement.play();
}

const audioElement = playAudio("assets/" + assets[index]);
audioElement.addEventListener("ended", endPlay);

document.addEventListener(
  "keydown",
  function (event) {
    var body = document.getElementsByTagName("body")[0];

    switch (event.keyCode) {
      case 49: // 1 on remote
        body.style["background-color"] = "white";
        body.style.color = "black";
        break;
      case 50: // 2 on remote
        body.style["background-color"] = "black";
        body.style.color = "white";
        break;
      case 51: // 3 on remote
        body.style["background-color"] = "#008";
        body.style.color = "white";
        break;
      case 412: // << on remote
        index = -1;
        endPlay();
        break;
      case 415: // play on remote
        audioElement.play();
        break;
      case 417: // >> on remote
        index++;
        endPlay();
        break;
      case 19: // pause on remote
        audioElement.pause();
        break;
    }
  },
  false
);
