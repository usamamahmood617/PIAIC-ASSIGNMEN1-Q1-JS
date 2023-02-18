
let inv_guest = ["John Smith","Will Smith","Imran Nazeer"];

inv_guest.forEach(element => {
    console.log("Dear Mr."+element+",We request your pleasure to join us for dinner.");
});

var new_guest = "ImranKhan";
console.log("Mr. "+inv_guest[0]+" won't be ale to join for us dinner.");

inv_guest = [new_guest,"WillSmith","Imran Nazeer"];

inv_guest.forEach(element => {
    console.log("Mr."+element+",We request your pleasure to join us for dinner.");
});



