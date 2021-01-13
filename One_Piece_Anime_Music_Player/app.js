const music = document.querySelector("audio");
const play = document.getElementById('play');
const img = document.querySelector("img");

const artist = document.getElementById('artist');
const title = document.getElementById('title');

const prev = document.getElementById('prev');
const next = document.getElementById('next');

let progress = document.getElementById('progress');
let total_duration = document.getElementById('duration');
let total_currentTime = document.getElementById('current_time');
const progress_div = document.getElementById('progress_div');


const songs = [{
        name: "music1",
        title: "ONE PIECE",
        artist: "WAR THEME",
    },
    {
        name: "music2",
        title: "THE GOING MERRY",
        artist: "KUINA THEME",
    },
    {
        name: "music3",
        title: "RORONOA ZORO",
        artist: "BELIEVE OST",
    },
    {
        name: "music4",
        title: "VINSMOKE SANJI",
        artist: "COME ABOARD",
    },
    {
        name: "music5",
        title: "GOD USSOP",
        artist: "OVERTAKEN OST",
    },
    {
        name: "music6",
        title: "Arlong Park ARC",
        artist: "SHONUKEN OST",
    },
    {
        name: "music7",
        title: "OFF TO GRAND LINE",
        artist: "FIRE FIST ACE",
    },
]


let isPlaying = false;

// for play functionality
const playMusic = () => {
    music.play();
    play.classList.replace('fa-play', "fa-pause");
    img.classList.add("anime");
    isPlaying = true;
};

// for pause functionality
const pauseMusic = () => {
    music.pause();
    play.classList.replace('fa-pause', "fa-play");
    img.classList.remove("anime");
    isPlaying = false;
};

play.addEventListener('click', () => {
    if (isPlaying == false) {
        playMusic();
    } else {
        pauseMusic();
    }
});

// changing the music data
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = songs.name + ".mp3";
    img.src = "img" + songs.name[5] + ".jpg";
}

// to keep the song index
songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex + 1) % (songs.length);
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % (songs.length);
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);

// Progress Bar Js work

music.addEventListener('timeupdate', (event) => {
    const { currentTime, duration } = event.srcElement;
    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%`;

    // music duration update
    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);

    if (sec_duration < 10)
        sec_duration = `0${sec_duration}`;

    if (duration) {
        total_duration.textContent = `${min_duration} : ${sec_duration}`;
    }

    // music current time update
    let min_currenttime = Math.floor(currentTime / 60);
    let sec_currenttime = Math.floor(currentTime % 60);

    if (sec_currenttime < 10)
        sec_currenttime = `0${sec_currenttime}`;

    if (currentTime) {
        total_currentTime.textContent = `${min_currenttime} : ${sec_currenttime}`;
    }
});

// on clicking the progress bar
progress_div.addEventListener('click', (event) => {
    const { currentTime, duration } = music;
    let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
    music.currentTime = move_progress;
});


// if cuurent track ends, next song will play automatically
music.addEventListener('ended', nextSong);