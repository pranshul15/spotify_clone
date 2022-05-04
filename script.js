console.log("Welcome to spotify");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let forwardPlay = document.getElementById('forwardPlay');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName:"Love Me Like You Do", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Away From Home", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Symphony", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Tose Naina", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Iktara", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Gul", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Haan tu hai", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Raabta", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"Tum Hi Ho", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName:"Attention", filePath:"songs/ten.mp3", coverPath:"covers/10.jpg"}
]

songItems.forEach((element,i)=>{
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("timeStamp")[0].innerText = "5:34";
})

// audioElement.play();

// Handle Play/Pause Click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate' , ()=>{
    // console.log('timeupdate');
    // Update Seek Bar
    let progress = (audioElement.currentTime/audioElement.duration)*100;
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , ()=>{
    let newTime = (myProgressBar.value * audioElement.duration)/100;
    audioElement.currentTime = newTime;
})

forwardPlay.addEventListener('click',()=>{
    songIndex = ((songIndex+1)%(songs.length));
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement = new Audio(songs[songIndex]["filePath"]);
    audioElement.play();
})