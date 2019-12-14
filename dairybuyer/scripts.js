
//take random number
//divde random number
//round up


// function quartFunction() {
   
//     var quartCreate = 16;
//     var quartSold1 = parseInt(prompt ('Quart Day 1'));
//     var quartSold2 = parseInt(prompt ('Quart Day 2'));
//     var quartSold3 = parseInt(prompt ('Quart Day 3'));
//     var quartSold4 = parseInt(prompt ('Quart Day 4'));
//     var quartSold5 = parseInt(prompt ('Quart Day 5'));

//     var quartOrderTotal = (quartSold1 + quartSold2 + quartSold3 + quartSold4 + quartSold5) / quartCreate;
//     var quartUserOrder = Math.ceil(quartOrderTotal) * quartCreate;
                                                                                                                                                         
//     alert( "You should order " + quartUserOrder + " units");
// }   


//take number of full crates
//times crates by unit count
//subtract unit count from order total

function quartFunction() {

    var quartBackStock = parseInt(prompt ('How many full crates in the back stock?'));
    var quartCrateToUnits = quartBackStock * 16;
    var quartUnitSubtractCount = quartCrateToUnits; 
   
    var quartCrate = 16;
    var quartSold1 = parseInt(prompt ('Quarts sold day 1'));
    var quartSold2 = parseInt(prompt ('Quarts sold day 2'));
    var quartSold3 = parseInt(prompt ('Quarts sold day 3'));
    var quartSold4 = parseInt(prompt ('Quarts sold day 4'));
    var quartSold5 = parseInt(prompt ('Quarts sold day 5'));

    var quartOrderTotal = (quartSold1 + quartSold2 + quartSold3 + quartSold4 + quartSold5) / quartCrate;
    var quartSoldTotal = Math.ceil(quartOrderTotal) * quartCrate;

    var quartUserOrder = quartSoldTotal - quartUnitSubtractCount;
                                                                                                                                                         
    alert( "You should order " + quartUserOrder + " units");
}   


function halfGallonFunction() {

    var halfGallonBackStock = parseInt(prompt ('How many full crates in the back stock?'));
    var halfGallonCrateToUnits = halfGallonBackStock * 9;
    var halfGallonUnitSubtractCount = halfGallonCrateToUnits; 

    var halfGallonCrate = 9;   
    var halfGallonSold1 = parseInt(prompt ('Half gallons sold day 1'));
    var halfGallonSold2 = parseInt(prompt ('Half gallons sold day 2'));
    var halfGallonSold3 = parseInt(prompt ('Half gallons sold day 3'));
    var halfGallonSold4 = parseInt(prompt ('Half gallons sold day 4'));
    var halfGallonSold5 = parseInt(prompt ('Half gallons sold day 5'));

    var halfGallonOrderTotal = (halfGallonSold1 + halfGallonSold2 + halfGallonSold3 + halfGallonSold4 + halfGallonSold5) / halfGallonCrate;
    var halfGallonSoldTotal = Math.ceil(halfGallonOrderTotal) * halfGallonCrate;
    
    var halfGallonUserOrder = halfGallonSoldTotal - halfGallonUnitSubtractCount;

    alert( "You should order " + halfGallonUserOrder + " units");
}

function gallonFunction() {

    var gallonBackStock = parseInt(prompt ('How many full crates in the back stock?'));
    var gallonCrateToUnits = gallonBackStock * 4;
    var gallonUnitSubtractCount = gallonCrateToUnits; 

    var gallonCrate = 4;
    var gallonSold1 = parseInt(prompt ('Gallons sold day 1'));
    var gallonSold2 = parseInt(prompt ('Gallons sold day 2'));
    var gallonSold3 = parseInt(prompt ('Gallons sold day 3'));
    var gallonSold4 = parseInt(prompt ('Gallons sold day 4'));
    var gallonSold5 = parseInt(prompt ('Gallons sold day 5'));

    var gallonOrderTotal = (gallonSold1 + gallonSold2 + gallonSold3 + gallonSold4 + gallonSold5) / gallonCrate;
    var gallonSoldTotal = Math.ceil(gallonOrderTotal) * gallonCrate;
    
    var gallonUserOrder = gallonSoldTotal - gallonUnitSubtractCount;

    alert( "You should order " + gallonUserOrder + " units");
}


// var secondsPerMin = 60;
// var minsPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYear = 52;
// var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;

// var yearsAlive = 31;

// var secondsAlive = secondsPerDay * daysPerWeek * weeksPerYear * yearsAlive;

// document.write();

// var monday = prompt ('Monday Hours');
// var tuesday = prompt ('Tuesday Hours');
// var wednesday = prompt ('Wednesday Hours');
// var thursday = prompt ('Thursday Hours');
// var friday = prompt ('Friday Hours');
// var saturday = prompt ('Saturday Hours');
// var sunday = prompt ('Sunday Hours');

//var imonday = parseInt(monday);
//var ituesday = parseInt(tuesday);
//var iwednesday = parseInt(wednesday);
//var ithursday = parseInt(thursday);
//var ifriday = parseInt(friday);
//var isaturday = parseInt(saturday);
//var isaturday = parseInt(saturday);

//var timeTotal = parseFloat(monday) + parseFloat(tuesday) + parseFloat(wednesday) + parseFloat(thursday) + parseFloat(friday) + parseFloat(saturday) + parseFloat(sunday);
//
//
//document.write('Wow! You had a total of ' + timeTotal + ' hours');