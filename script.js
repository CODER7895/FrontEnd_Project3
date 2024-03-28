var arr = [
   {songName: "Noor-Mahal", url: "./songs/noor-mahal-official-visualizer-chani-nattan-inderpal-moga-j-statik-takeover-ep-128-ytshorts.savetube.me.mp3", img: "https://i1.sndcdn.com/artworks-Bq8qaj6btQTimA9z-TCd5lw-t500x500.jpg"},
   {songName: "Udaarian", url: "./songs/udaarian-badi-lambi-hai-kahani-mere-pyaar-di-satinder-sartaaj-love-songs-new-punjabi-songs-128-ytshorts.savetube.me.mp3", img: "https://i.ytimg.com/vi/eeDO9CyzK2w/maxresdefault.jpg"},
   {songName: "Pagal", url: "./songs/pagal-official-music-video-gurnam-bhullar-g-guri-baljit-singh-deo-songs-2019-128-ytshorts.savetube.me.mp3", img: "https://c.saavncdn.com/777/Pagal-Punjabi-2019-20190909161954-500x500.jpg"},
   {songName: "Chann-Sitare", url: "./songs/chann-sitare-ammy-virk-tania-simerjit-singh-avvy-sra-oye-makhna-new-punjabi-song-2023-128-ytshorts.savetube.me.mp3", img: "https://m.timesofindia.com/photo/95018179/size-146228/95018179.jpg"},
   {songName: "Dismiss-141", url: "./songs/dismiss-141-full-video-korala-maan-desi-crew-punjabi-songs-2020-128-ytshorts.savetube.me.mp3", img: "https://m.timesofindia.com/photo/75845836/size-135232/75845836.jpg"},
   {songName: "Farooq-Edits", url: "./songs/ghoongte-mein-chanda-farooqgotaudio-remix-koyla-hip-hop-trap-afro-mix-128-ytshorts.savetube.me (1).mp3", img: "https://i.ytimg.com/vi/uhVA5FT81EU/hqdefault.jpg"}
]
var allSongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")

var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")



var audio = new Audio()

var selectedSong = 0

function mainFunction() {
    var clutter = ""

    arr.forEach(function (elem, index) {
        clutter += `<div class="song-card" id=${index}>
    <div class="part1">
        <img src=${elem.img} alt="">
        <h2>${elem.songName}</h2>
    </div>
    <h6>3:56</h6>
</div>`
    })
    allSongs.innerHTML = clutter;

    audio.src = arr[selectedSong].url
    poster.innerHTML = `<img src="${arr[selectedSong].img}" alt=""></img>`
}
mainFunction()

allSongs.addEventListener("click", function (dets) {
    selectedSong = dets.target.id
    mainFunction()
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    audio.play()
})

var flag = 0

play.addEventListener("click", function () {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        mainFunction()
        audio.play()
        flag = 1
    } else {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click", function () {
    if (selectedSong < arr.length - 1) {
        selectedSong++
        mainFunction()
        audio.play()
    }else{
        forward.style.opacity = 0.4
    }
})
backward.addEventListener("click", function () {
    if (selectedSong > 0) {
        selectedSong--
        mainFunction()
        audio.play()
    }else{
        backward.style.opacity = 0.4
    }
})