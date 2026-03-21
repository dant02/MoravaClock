const fs = require("fs");
const path = require("path");

const appDir = path.join(__dirname, "..", "App");
const assetsDir = path.join(appDir, "assets");
const outputFile = path.join(appDir, "playlist.generated.js");
const supportedExtensions = new Set([
  ".mp3",
  ".flac",
  ".wav",
  ".ogg",
  ".m4a",
  ".aac"
]);

function getPlaylistEntries() {
  if (!fs.existsSync(assetsDir)) {
    return [];
  }

  return fs
    .readdirSync(assetsDir, { withFileTypes: true })
    .filter(function (entry) {
      return entry.isFile() && supportedExtensions.has(path.extname(entry.name).toLowerCase());
    })
    .map(function (entry) {
      return entry.name;
    })
    .sort(function (left, right) {
      return left.localeCompare(right, undefined, { numeric: true, sensitivity: "base" });
    });
}

function writePlaylistFile(entries) {
  const content =
    "window.playlist = " +
    JSON.stringify(entries, null, 2) +
    ";\n";

  fs.writeFileSync(outputFile, content, "utf8");
}

const playlistEntries = getPlaylistEntries();
writePlaylistFile(playlistEntries);

console.log("Generated playlist with " + playlistEntries.length + " media file(s).");
