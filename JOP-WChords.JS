import { churchSongs } from "./List-of-Song&Chords/JOPSongsWithChords.JS";


function displaySongAndChords(songchordsList = churchSongs){
    const lists = document.querySelector('.songList');
    lists.innerHTML = '';

    songchordsList.forEach((song) => {
        const songElem = document.createElement('div');
        songElem.textContent = song.title;
        songElem.addEventListener('click', () => {
            showSong(song.id);
        });
        lists.appendChild(songElem);
    });
}


function showSong(id){
    const findId = churchSongs.find(f => f.id === id);
    if(!findId){
        return;
    };

    document.querySelector('.songList').innerHTML = 
    `
    <h2>${findId.title}</h2>
    <p>Key: ${findId.keyOf}</p>
    <pre>${findId.songAndChords}</pre>
    `;
    document.querySelector('.inputSong').value = '';
}
showSong();

function searchSong(){
    const searchInput = document.querySelector('.inputSong');
    searchInput.addEventListener('keyup', searchSong);

    const keys = searchInput.value.toLowerCase();

    if(keys === ''){
        document.querySelector('.songList').innerHTML = '';
        return;
    }

    const resultHere = churchSongs.filter(re => re.title.toLowerCase().includes(keys));

    displaySongAndChords(resultHere);   
}
searchSong();