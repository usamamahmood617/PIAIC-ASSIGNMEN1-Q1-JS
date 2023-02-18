var current_user = ['shahzaib', 'ALi', 'Usman', 'Hadi', 'wasiq'];
var new_user = ['wasiq', 'waleed', 'Hadi', 'ayan', 'shayan'];
for (var i = 0; i < new_user.length; i++) {
    if (new_user[i].toLowerCase == current_user[0].toLowerCase || new_user[i].toLowerCase == current_user[1].toLowerCase || new_user[i].toLowerCase == current_user[2].toLowerCase || new_user[i].toLowerCase == current_user[3].toLowerCase || new_user[i].toLowerCase == current_user[4].toLowerCase) {
        console.log("User name (" + new_user[i] + ") not available");
        console.log("choose different username\n");
    }
    else
        console.log("user name (" + new_user[i] + ") is available\n");
}
