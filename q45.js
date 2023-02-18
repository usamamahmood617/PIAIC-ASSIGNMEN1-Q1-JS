function manufactur_car(Manufacturers, Models) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car_object = {
        'Manufacturer': Manufacturers,
        'Model': Models
    };
    options.forEach(function (option) {
        var key = option[0], value = option[1];
        car_object[key] = value;
    });
    return car_object;
}
console.log(manufactur_car('Toyota', 'Corolla', ['Color', 'Red'], ['Sun Roof', 'Yes']));
