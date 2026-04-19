document.addEventListener("DOMContentLoaded", () => {
  const video1 = document.getElementById("video1");
  const video2 = document.getElementById("video2");
  const subtitle = document.getElementById("subtitle");
  const clickLayer = document.getElementById("clickLayer");

  const courseEndOverlay = document.getElementById("courseEndOverlay");
  const goTrainingBtn = document.getElementById("goTrainingBtn");

  // 按你的实际文件名修改
  const VIDEO_A = "video1.mp4";
  const VIDEO_B = "video2.mp4";
  const VIDEO_C = "video3.mp4";

  let currentVideo = video1;
  let nextVideo = video2;

  let stage = "A";   // A -> B -> C
  let started = false;

  function setVideoState(video, isActive) {
    if (isActive) {
      video.classList.remove("inactiveVideo");
      video.classList.add("activeVideo");
    } else {
      video.classList.remove("activeVideo");
      video.classList.add("inactiveVideo");
    }
  }

  function swapVideos() {
    const temp = currentVideo;
    currentVideo = nextVideo;
    nextVideo = temp;
  }

  function showCourseEndOverlay() {
    courseEndOverlay.classList.remove("hidden");
  }

  function bindEndedHandler() {
    currentVideo.onended = null;

    currentVideo.onended = () => {
      if (stage === "B") {
        stage = "C";
        switchToVideo(VIDEO_C, {
          loop: false,
          muted: false,
          controls: true
        });
      } else if (stage === "C") {
        console.log("视频 C 播放结束");
        showCourseEndOverlay();
      }
    };
  }

  function playInitialVideo() {
    currentVideo.src = VIDEO_A;
    currentVideo.loop = true;
    currentVideo.muted = true;
    currentVideo.controls = false;
    currentVideo.currentTime = 0;
    currentVideo.load();

    currentVideo.play().catch((err) => {
      console.error("视频 A 播放失败：", err);
    });

    bindEndedHandler();
  }

  function switchToVideo(src, { loop = false, muted = false, controls = false } = {}) {
    nextVideo.pause();
    nextVideo.oncanplay = null;
    nextVideo.onended = null;

    nextVideo.src = src;
    nextVideo.loop = loop;
    nextVideo.muted = muted;
    nextVideo.controls = controls;
    nextVideo.currentTime = 0;
    nextVideo.load();

    nextVideo.oncanplay = () => {
      nextVideo.oncanplay = null;

      nextVideo.play().then(() => {
        setVideoState(nextVideo, true);
        setVideoState(currentVideo, false);

        setTimeout(() => {
          currentVideo.pause();
          currentVideo.controls = false;
          currentVideo.removeAttribute("src");
          currentVideo.load();

          swapVideos();
          bindEndedHandler();
        }, 250);
      }).catch((err) => {
        console.error("视频切换失败：", err);
      });
    };
  }

  clickLayer.addEventListener("click", () => {
    if (started) return;
    started = true;

    subtitle.classList.add("hidden");
    clickLayer.classList.add("hidden");

    stage = "B";
    switchToVideo(VIDEO_B, {
      loop: false,
      muted: false,
      controls: false
    });
  });

  goTrainingBtn.addEventListener("click", () => {
    // 这里改成你的训练场页面地址
    window.location.href = "training.html";
  });

  // 初始化显示状态
  setVideoState(video1, true);
  setVideoState(video2, false);

  // 初始播放视频 A
  playInitialVideo();
});