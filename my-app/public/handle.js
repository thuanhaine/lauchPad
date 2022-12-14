const drumList = document.querySelectorAll('.drum')
const btnPlay = document.querySelector('.fa-play')
const btnPlayMusic = document.querySelector('.fa-music')
const music = new Audio('./audio/sound_mono.mp3');
const btnback = document.querySelector('.fa-arrow-left')


function start (){
    handleHomePage();
    deteleEffect();
    handlePlayGame();
}

start();


function handleHomePage() {
    
    btnPlayMusic.onclick = function() {
        handlePlayMusic();
        

    }

    btnPlay.onclick = function(){
        document.querySelector('.homepage').style.display = 'none';
        document.querySelector('.gameplay').style.display = 'block';
        music.pause();
                music.currentTime = 0;
    };


    btnback.onclick = function(){
        document.querySelector('.gameplay').style.display = 'none';
        document.querySelector('.homepage').style.display = 'block';
        handlePlayMusic();
    };
}
function deteleEffect () {
    drumList.forEach(drum => {
        if(drum.classList.contains('effect'))
            drum.classList.remove('effect');    
    });
}
function handlePlayGame() {
    window.addEventListener('keydown', (e) => {
        let key = e.keyCode;
        switch (key) {
            case 32: 
                handlePlayMusic();
                break;
            case 97:
                drumList[6].classList.add('effect');
                const sound97 = new Audio('./audio/sounds_snare.wav')
                sound97.play();
                setTimeout(()=>{
            drumList[6].classList.remove('effect');
        },100)
                break;
            case 98:
                drumList[7].classList.add('effect');
                const sound98 = new Audio('./audio/sounds_tink.wav')
                sound98.play();
                setTimeout(()=>{
                    drumList[7].classList.remove('effect');
                },100)
                break;
            case 99:
                drumList[8].classList.add('effect');
                const sound99 = new Audio('./audio/sounds_tom.wav')
                sound99.play();
                setTimeout(()=>{
                    drumList[8].classList.remove('effect');
                },100)
                
                break;
            case 100:
                drumList[3].classList.add('effect');
                const sound100 = new Audio('./audio/sounds_kick.wav')
                sound100.play();
                setTimeout(()=>{
                    drumList[3].classList.remove('effect');
                },100)
                break;
            case 101:
                drumList[4].classList.add('effect');
                const sound101 = new Audio('./audio/sounds_openhat.wav')
                sound101.play();
                setTimeout(()=>{
                    drumList[4].classList.remove('effect');
                },100)
                break;
            case 102:
                drumList[5].classList.add('effect');
                const sound102 = new Audio('./audio/sounds_ride.wav')
                sound102.play();
                setTimeout(()=>{
                    drumList[5].classList.remove('effect');
                },100)
                break;
            case 103:
                drumList[0].classList.add('effect');
                const sound103 = new Audio('./audio/sounds_boom.wav')
                sound103.play();
                setTimeout(()=>{
                    drumList[0].classList.remove('effect');
                },100)
                break;
            case 104:
                drumList[1].classList.add('effect');
                const sound104 = new Audio('./audio/sounds_clap.wav')
                sound104.play();
                setTimeout(()=>{
                    drumList[1].classList.remove('effect');
                },100)
                break;
            case 105:
                drumList[2].classList.add('effect');
                const sound105 = new Audio('./audio/sounds_hihat.wav')
                sound105.play();
                setTimeout(()=>{
                    drumList[2].classList.remove('effect');
                },100)
                break;
        }
    });
}

function handlePlayMusic (){
    if(btnPlayMusic.classList.contains('stop')){
        btnPlayMusic.classList.remove('stop');
        btnPlayMusic.classList.add('playing');

        music.play();
    }
    else if(btnPlayMusic.classList.contains('playing')) 
     {
        btnPlayMusic.classList.remove('playing');
        btnPlayMusic.classList.add('stop');
        music.pause();
        music.currentTime = 0;

     }
}