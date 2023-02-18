var user_names = ["admin", "James", "Ali", "Ayan", "Ahmed"];
for (var i = 0; i < user_names.length; i++) {
    if (user_names[i] === 'admin') {
        console.log("Hello " + user_names[i] + ", do you want to see , Status rport");
    }
    else {
        console.log("Hello " + user_names[i] + ", thank you for logging in again");
    }
}
