function manageSongs(arr){
    class Song{
        constructor(typeList, songName, songDuration){
            this.typeList = typeList;
            this.name = songName;
            this.time = songDuration;
        }
    }

    let songCount = arr.shift();
    let searshedList = arr.pop();
    let songs = [];

    for (const str of arr){
        let[typeList,songName,songDuration] = str.split('_');
        let currentSong =new Song(typeList,songName,songDuration);
        songs.push(currentSong);

    }

    if (searshedList === 'all'){
        songs.forEach(song => console.log(song.name));
        
    }else{
        let filteredSongs =songs.filter(song =>song.typeList === searshedList);
        filteredSongs.forEach(song => console.log(song.name));
        
    }
}

manageSongs([3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']
)