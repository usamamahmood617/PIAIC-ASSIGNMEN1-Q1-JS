var Arts = make_album("Usama", "amplifier", 6);
console.log(Arts);
console.log(Arts.Arts_name);
console.log(Arts.album_title);
console.log(Arts.number_of_tracks);
var Arts_1 = make_album("Bilal Saeed", "New 2023", 5);
console.log(Arts_1);
console.log(Arts_1.Arts_name);
console.log(Arts_1.album_title);
console.log(Arts_1.number_of_tracks);
var Arts_2 = make_album("Harnoor", "Pershawan", 25);
console.log(Arts_2);
console.log(Arts_2.Arts_name);
console.log(Arts_2.album_title);
console.log(Arts_2.number_of_tracks);
function make_album(Arts, title, tracks) {
    return {
        Arts_name: Arts,
        album_title: title,
        number_of_tracks: tracks
    };
}
