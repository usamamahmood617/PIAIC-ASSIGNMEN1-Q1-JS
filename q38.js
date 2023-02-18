var default_country = "Pakistan";
describe_city("Karachi", default_country);
describe_city("Peshawar", default_country);
describe_city("Paris", "France");
function describe_city(city, country) {
    console.log(city + " is in " + country);
}
