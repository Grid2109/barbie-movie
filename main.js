const modalContainer = document.getElementById('modalContainer');
const openModal = document.getElementById('openModal');
const youtubeIframe = document.getElementById('youtubeIframe');

openModal.addEventListener('click', function (){
    modalContainer.style.display = 'block'
})

window.addEventListener('click', function (event){
   if(event.target == modalContainer) {
       modalContainer.style.display = 'none'
       youtubeIframe.src = youtubeIframe.src;
   }
})

function playAudio() {
    let audio = document.getElementById('music');
    let speakerSlash = document.getElementsByClassName('ph-speaker-slash')[0];
    let speakerHigh = document.getElementsByClassName('ph-speaker-high')[0];

    if (!audio.paused && !audio.ended) {
        audio.pause();
        speakerSlash.style.display = "block";
        speakerHigh.style.display = "none";
      } else {
        audio.play();
        speakerSlash.style.display = "none";
        speakerHigh.style.display = "block";
      }
}

