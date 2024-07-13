/**
 * Aileen Shi
 * CPSC 3750
 * 7/13/24
 * Project Audio App
 * **/
// Variables
const skip = 5;
let stopTime = null;
var tracks = [
  {
    name: "Verse 1",
    time: 55,
  },
  {
    name: "Refrain 1",
    time: 98,
  },
  {
    name: "Verse 2",
    time: 114,
  },
  {
    name: "Refrain 2",
    time: 143,
  },
  {
    name: "Chorus 1",
    time: 158,
  },
  {
    name: "Segue",
    time: 197,
  },
  {
    name: "Refrain 3",
    time: 227,
  },
  {
    name: "Chorus 2",
    time: 258,
  },
  {
    name: "Outro",
    time: 310,
  },
];

// Make sure doc loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const rw = document.getElementById("rewind");
  const add = document.getElementById("add");
  const fw = document.getElementById("forward");
  const playlist = document.getElementById("playlist-container");
  const audio = document.getElementById("player");

  // Forward button
  fw.addEventListener("click", function () {
    player.currentTime += skip;
  });

  // Rewind button
  rw.addEventListener("click", function () {
    player.currentTime -= skip;
  });

  // Add button
  add.addEventListener("click", function () {
    let newTime = player.currentTime;
    let newName = prompt("Enter name for added track");
    index = tracks.findIndex((song) => song.time >= newTime);
    // New song
    newSong = {
      name: newName,
      time: newTime,
    };
    // Add to beginning if smallest time
    if (index == 0) {
      tracks.unshift(newSong);
    }
    // Add to end if longest time
    else if (index == tracks.length) {
      tracks.push(newSong);
    }
    // Add
    else {
      tracks.splice(index, 0, newSong);
    }
    update();
  });

  // Check time to stop
  player.addEventListener("timeupdate", function () {
    // Check if current time matches stop time
    if (stopTime != null && player.currentTime >= stopTime) {
      player.pause();
      stopTime = null;
    }
  });

  // Play track
  function playTrack(time) {
    player.currentTime = time;
    player.play();
    // Update time to stop
    // Check for time of next track
    index = tracks.findIndex((song) => song.time == time);
    if (index + 1 != tracks.length) {
      stopTime = tracks[index + 1].time;
    } else {
      stopTime = null;
    }
  }

  // Delete track
  function deleteTrack(removeSong) {
    // Remove from tracks array
    index = tracks.findIndex((song) => song.name == removeSong);
    tracks.splice(index, 1);
    update();
  }

  // Seconds to minutes and seconds
  function timeFormat(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec % 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  }

  // Update playlist
  function update() {
    // Reset
    playlist.innerHTML = "";
    tracks.forEach((song, index, array) => {
      // Track container
      songDiv = document.createElement("div");
      songDiv.classList.add("track-container");

      // Play button
      play = document.createElement("button");
      play.addEventListener("click", () => playTrack(song.time));
      play.innerHTML = "Play";
      play.classList.add("track-play", "track-btn");
      songDiv.appendChild(play);

      // Track name
      let convertedTime = timeFormat(song.time);
      songName = document.createElement("h3");
      songName.innerHTML = song.name + " " + convertedTime;
      songName.classList.add("track-txt");
      songDiv.appendChild(songName);

      // Delete button
      trash = document.createElement("button");
      trash.addEventListener("click", () => deleteTrack(song.name));
      trash.innerHTML = "Delete";
      trash.classList.add("track-trash", "track-btn");
      songDiv.appendChild(trash);

      playlist.appendChild(songDiv);
    });
  }
  // Initial load of playlist
  update();
});
