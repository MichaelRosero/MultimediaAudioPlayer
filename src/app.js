let ap = null;

function start(){
    ap = new AudioPlayer({
        gui:{
            totalTime: {value: "0:00", DOMElement: document.querySelector(".totalTime")},
            currentTime: {value: "0:00", DOMElement: document.querySelector(".currentTime")},
            progressBar: {value: "0:00", DOMElement: document.querySelector(".progressBar")},
            songName:{value: null, DOMElement: document.querySelector(".songName")},
            albumCover:{value: null, DOMElement: document.querySelector("#player")},
            artistName:{value: null, DOMElement: document.querySelector(".artistName")}
        },
        buttons:{
            playPause: document.querySelector(".play"),
            volume: document.querySelector(".volume")
        }
    });
}