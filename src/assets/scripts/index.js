const foo = (() => Promise.resolve().then(() => console.log('Hello Memscape94 World')))();

const kelly = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595086133/memscape94/kelly_room.mp4",
  id: "#kelly-room",
  videoGridArea: "2 / 14 / 7 / 20"
}
const kitchen = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595082711/memscape94/Kitchen.mp4",
  id: "#kitchen",
  videoGridArea: "3 / 9 / 8 / 15"
}
const jamie = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595085604/memscape94/ms94_Jamie_FINAL.mp4",
  id: "#jamies-room",
  videoGridArea: "4 / 12 / 9 / 18"
}
const parents = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595085793/memscape94/ms94_Parents_FINAL.mp4",
  id: "#parents-room",
  videoGridArea: "1 / 3 / 6 / 9"
}
const hallway = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595083775/memscape94/Hallway.mp4",
  id: "#hallway",
  videoGridArea: "5 / 2 / 10 / 8"
}
const living = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595086174/memscape94/living_room-.mp4",
  id: "#living-room",
  videoGridArea: "6 / 15 / 11 / 21"
}
const bathroom = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595084303/memscape94/Bathroom.mp4",
  id: "#bathroom",
  videoGridArea: "5 / 4 / 10 / 10"
}
const slide = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595085854/memscape94/ms94_Slide_FINAL.mp4",
  id: "#slide-room",
  videoGridArea: "5 / 2 / 10 / 8"
}

const areas = [kelly, kitchen, jamie, parents, hallway, living, bathroom, slide]
const videoArea = document.querySelector('#video-area');

areas.forEach(area => {
  const div = document.querySelector(area.id);
  div.addEventListener('mouseover', function(event) {
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
  });
})
