export function initPage() {
  window.addEventListener("load", () => {
    // ซ่อน preloader
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";

    // แสดงเนื้อหาหลัก
    const mainContainer = document.getElementById("main-container");
    mainContainer.style.display = "block";

    // initAudio
    const tracks = ["public/audio/sound1.mp3"];
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
        btnPlay.classList.remove("playing");
        btnPlay.classList.add("paused");
      } else {
        sound.play();
        btnPlay.classList.remove("paused");
        btnPlay.classList.add("playing");
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

    // เตรียม state เริ่มต้น
    gsap.set(".card__left", {
      rotationY: 0,
      transformOrigin: "left center",
    });

    // toggle flip
    let isOpen = false;
    let fistOpen = false;

    $(".group-card").on("click", function () {
      let tl = gsap.timeline({
        defaults: { duration: 1.2, ease: "power2.inOut" },
      });

      if (!fistOpen) {
        fistOpen = true;
        btnPlay.click();
      }

      if (!isOpen) {
        console.log("if");

        // เปิดการ์ด
        tl.to(".cake-front, .card__left", { rotationY: -180 }).to(
          ".cake-back, .card__left",
          { rotationY: 0 },
          "<"
        );

        tl.to(
          `.group-card`,

          {
            margin: `0px`,
          },
          "<"
        );
      } else {
        console.log("else");

        // ปิดกลับ
        tl.to(".cake-front, .card__right", { rotationY: 0 }).to(
          ".cake-back, .card__left",
          { rotationY: -180 },
          "<"
        );

        let cardWidth = $(".card__right").width();

        tl.fromTo(
          `.group-card`,
          {
            marginRight: "0",
          },
          {
            marginRight: `-${cardWidth}px`,
          },
          "<"
        );
      }

      isOpen = !isOpen;
    });
  });
}
