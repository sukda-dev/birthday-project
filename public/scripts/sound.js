export function initAudio() {
  const tracks = ["/audio/sound1.mp3"];
  let index = 0;
  let sound;

  const btnPlay = document.querySelector(".btn-play");
  const progressBar = document.querySelector(".progress-bar");
  const progressFill = document.querySelector(".progress-fill");

  function loadTrack(i) {
    if (sound) sound.unload();
    sound = new Howl({
      src: [tracks[i]],
      html5: true,
      onend: () => {
        progressFill.style.width = "0%"; // reset เมื่อจบเพลง
      },
    });
  }

  function playPause() {
    if (!sound) loadTrack(index);
    if (sound.playing()) {
      sound.pause();
    } else {
      sound.play();
      updateProgress();
    }
  }

  function updateProgress() {
    if (sound && sound.playing()) {
      let seek = sound.seek() || 0;
      let duration = sound.duration() || 1;
      let percent = (seek / duration) * 100;
      progressFill.style.width = percent + "%";
    }
    requestAnimationFrame(updateProgress);
  }

  // คลิกเพื่อ seek
  progressBar.addEventListener("click", (e) => {
    if (sound) {
      let rect = progressBar.getBoundingClientRect();
      let clickX = e.clientX - rect.left;
      let percent = clickX / rect.width;
      let seek = percent * sound.duration();
      sound.seek(seek);
      progressFill.style.width = percent * 100 + "%";
    }
  });

  btnPlay.addEventListener("click", playPause);

  loadTrack(index);
}
