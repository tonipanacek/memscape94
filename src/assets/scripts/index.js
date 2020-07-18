const foo = (() => Promise.resolve().then(() => console.log('Hello Memscape94 World')))();

const kelly = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595076260/memscape94/ms94_kitchen.mp4",
  id: "#kelly-room",
  videoGridArea: "5 / 14 / 8 / 18"
}
const kitchen = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595082711/memscape94/Kitchen.mp4",
  id: "#kitchen",
  videoGridArea: "3 / 9 / 7 / 15"
}
const jamie = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595076260/memscape94/ms94_kitchen.mp4",
  id: "#jamies-room",
  videoGridArea: ""
}
const parents = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595076260/memscape94/ms94_kitchen.mp4",
  id: "#parents-room",
  videoGridArea: ""
}
const hallway = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595083775/memscape94/Hallway.mp4",
  id: "#hallway",
  videoGridArea: ""
}
const living = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595076260/memscape94/ms94_kitchen.mp4",
  id: "#living-room",
  videoGridArea: ""
}
const bathroom = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595084303/memscape94/Bathroom.mp4",
  id: "#bathroom",
  videoGridArea: ""
}
const slide = {
  src: "https://res.cloudinary.com/tonipanoche/video/upload/v1595076260/memscape94/ms94_kitchen.mp4",
  id: "#slide-room",
  videoGridArea: ""
}

const areas = [kelly, kitchen, jamie, parents, hallway, living, bathroom, slide]
const videoArea = document.querySelector('#video-area');

areas.forEach(area => {
  const div = document.querySelector(area.id);
  div.addEventListener('mouseover', function(event) {
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
