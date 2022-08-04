// This will give random song from the array without any repeating songs with O(1) space.
const song = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

function shuffle(song){
    const songIndex =  parseInt(Math.random() * song.length)
    return songIndex
}
function play(song){
    for(let i = 0; i < song.length; i++){
        let newIndex;
        newIndex = shuffle(song)

        let temp = song[i]
        song[i] = song[newIndex]
        song[newIndex] = temp


    }
}

play(song)
for(let i = 0; i < song.length; i++){
    console.log(song[i])
}
