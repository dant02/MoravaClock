# MoravaClock

[![Build webOS Package](https://github.com/dant02/MoravaClock/actions/workflows/build.yml/badge.svg)](https://github.com/dant02/MoravaClock/actions/workflows/build.yml)

MoravaClock is a simple webOS TV web application that displays a large full-screen digital clock and can play a local playlist of bundled audio tracks.

The app is designed for TV use and supports basic remote-control actions for changing the visual theme and controlling audio playback.

## Features

- Full-screen digital clock with seconds and tenths of a second
- Simple high-contrast TV-friendly layout
- Local playlist playback from bundled media files
- Remote-control support for playback and theme switching
- Packaged as a standard webOS web app

## Project Structure

- `App/` - webOS application source files
- `App/index.html` - app markup
- `App/styles.css` - app styling
- `App/app.js` - clock, playback, and remote-control logic
- `App/playlist.js` - playlist definition
- `Package/` - packaged `.ipk` output
- `package-and-deploy.bat` - package, install, and launch script
- `setup-environment.bat` - CLI setup helper

## Requirements

- Node.js and npm
- webOS CLI tools (`@webos-tools/cli`)
- A configured webOS TV device or emulator
- A device alias named `MyTv` if using the provided deploy script as-is

## Setup

Install the webOS CLI tools:

```bat
setup-environment.bat
```

Or manually:

```bat
npm install -g @webos-tools/cli
ares -V
```

## Build and Deploy

Package, install, and launch the app with:

```bat
package-and-deploy.bat
```

This script will:

1. Package the app from `App/`
2. Install the generated `.ipk` to the configured `MyTv` device
3. Launch the application on that device

## Remote Controls

The app supports these remote keys:

- `1` - light theme
- `2` - dark theme
- `3` - blue theme
- `Play` - start playback
- `Pause` - pause playback
- `<<` - previous track
- `>>` - next track

## Notes

- Audio files in `App/assets/` are local project media and are ignored from git.
- `tmpAssets/` is also ignored from git.
- `Package/` contains generated output and may be treated as a build artifact.
- The playlist is defined in `App/playlist.js`.

## License

See `LICENSE`.
