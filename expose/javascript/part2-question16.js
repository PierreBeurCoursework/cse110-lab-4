let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};

for (const property in statistics) {
    if ((property[0] == 'r') || (statistics[property] % 2)) {
        console.log(property);
    }
}