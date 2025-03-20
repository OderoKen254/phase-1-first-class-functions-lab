// Code your solution in this file!


const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//declare variable and assign anonymous function that takes an array argument(driver names)and returns new array of first two drivers.
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
console.log(returnFirstTwoDrivers(drivers));

//declare variable and assign anonymous function that takes an array argument(driver names)and returns new array of last two drivers.
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};
console.log(returnLastTwoDrivers(drivers));

//function that takes the first two functions as arguments/arguments, then called to return the first two or the last two;
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0](drivers));
console.log(selectingDrivers[1](drivers));


function selectDifferentDrivers(drivers, selectionFunction) {
    return selectionFunction(drivers);
}
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); 



//higher order functions: function multiplier that takes in one argument (integer) and returns a function to multiply fare for the ride
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}
const fareQuadrupler = createFareMultiplier(4);
console.log(fareQuadrupler(5));

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10)); 

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(10)); 