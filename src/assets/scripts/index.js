const foo = (() => Promise.resolve().then(() => console.log('Hello Memscape94 World')))();

const audio = document.querySelector('#bg-sound');

const kelly = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595086133/memscape94/kelly_room.mp4",
  id: "#kelly-room",
  videoGridArea: "2 / 14 / 7 / 20"
}
const kitchen = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595093961/memscape94/ms94_Kitchen_FINAL.mp4",
  id: "#kitchen",
  videoGridArea: "3 / 11 / 8 / 17"
}
const jamie = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595085604/memscape94/ms94_Jamie_FINAL.mp4",
  id: "#jamies-room",
  videoGridArea: "5 / 2 / 10 / 8"
}
const parents = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595085793/memscape94/ms94_Parents_FINAL.mp4",
  id: "#parents-room",
  videoGridArea: "1 / 3 / 6 / 9"
}
const hallway = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595093665/memscape94/ms94_Hallway_FINAL.mp4",
  id: "#hallway",
  videoGridArea: "5 / 6 / 10 / 12"
}
const living = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595086174/memscape94/living_room-.mp4",
  id: "#living-room",
  videoGridArea: "2 / 8 / 7 / 14"
}
const bathroom = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595092539/memscape94/ms94_Bathroom_FINAL.mp4",
  id: "#bathroom",
  videoGridArea: "1 / 10 / 6 / 16"
}
const slide = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595085854/memscape94/ms94_Slide_FINAL.mp4",
  id: "#slide-room",
  videoGridArea: "4 / 12 / 9 / 18"
}

const areas = [kelly, kitchen, jamie, parents, hallway, living, bathroom, slide]
const videoArea = document.querySelector('#video-area');

areas.forEach(area => {
  const div = document.querySelector(area.id);
  div.addEventListener('mouseover', function(event) {
    audio.pause();
    videoArea.style.gridArea = area.videoGridArea;
    videoArea.style.display = "block";
    let video = videoArea.firstElementChild;
    video.src = area.src;
    video.play();
  });
  div.addEventListener('mouseleave', function(event) {
    videoArea.style.display = "none";
    let video = videoArea.firstElementChild;
    video.pause();
    audio.play();
  });
})

