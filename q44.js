function make_SW() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("i will make you best sandwich\n");
    for (var i = 0; i < items.length; i++) {
        console.log("adding " + items[i] + " to your sandwich");
    }
    ;
    console.log("your sandwich is ready");
}
make_SW("chicken", "Tomato", "Ketchup", "cheese", "fries");
make_SW("Grilled chicken", "pickle", "Onion", "fries", "extra-Cheese");
make_SW("Kebab", "Mayo", "Ketchup", "Letuce", " chicken");
