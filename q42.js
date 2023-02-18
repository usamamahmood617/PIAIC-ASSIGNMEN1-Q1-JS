var magician_list = ['Ali', "Usman", "ahmed", 'Hasnain'];
function show_mag(mag_list) {
    for (var i = 0; i < mag_list.length; i++) {
        console.log(mag_list[i]);
    }
    console.log("\n\n");
}
show_mag(magician_list);
function great_magician(Great_mag) {
    for (var i = 0; i < Great_mag.length; i++) {
        Great_mag[i] = Great_mag[i] + ' the great magician';
    }
    for (var i = 0; i < Great_mag.length; i++) {
        console.log(Great_mag[i]);
    }
}
great_magician(magician_list);
