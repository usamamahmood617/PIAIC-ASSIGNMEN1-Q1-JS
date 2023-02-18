var com = "Condition";
// String Equality and InEquality
console.log(com === "Condition" ? true : false);
console.log(com === "Conditional" ? true : false);
//Eqluality with lowercase
console.log(com.toLowerCase() === "condition" ? true : false);
console.log(com.toLowerCase() === "CONDITION" ? true : false);
// greater or less equlaity
var numb_1 = 10;
var numb_2 = 20;
console.log(numb_1 === numb_2 ? true : false);
console.log(numb_1 > numb_2 ? true : false);
console.log(numb_1 < numb_2 ? true : false);
console.log(numb_1 >= numb_2 ? true : false);
console.log(numb_1 <= numb_2 ? true : false);
// AND Operation
if (numb_1 < numb_2 && numb_2 > numb_1) {
    console.log(numb_2 + " is greater");
}
if (numb_1 > numb_2 && numb_2 < numb_1) {
    console.log(numb_2 + " is greater");
}
// OR operation
if (numb_1 < numb_2 || numb_2 > numb_1) {
    console.log(numb_2 + " is greater");
}
if (numb_1 > numb_2 || numb_2 < numb_1) {
    console.log(numb_1 + " is smaller");
}
var language_list;
var languages = "German,Spanish,Chinese,Japenese,Arabic,Urdu,English";
language_list = languages.split(",");
// item detection in array
var to_be_matched = "Urdu";
language_list.forEach(function (element) {
    if (to_be_matched === element) {
        console.log(to_be_matched + " is present in the languages list");
    }
});
// false item detection in array
var false_detection = "Korean";
language_list.forEach(function (element) {
    if (false_detection === element) {
        console.log(false_detection + " is present in the languages list");
    }
    else {
        console.log(false_detection + " is not present in the languages list");
    }
});
