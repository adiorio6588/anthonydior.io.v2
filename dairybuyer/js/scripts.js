
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




//Monday's Order

function quartFunction_Monday() {

    var quartBackStock = parseInt(prompt ('How many full crates in the back stock?'));
    var quartCrateToUnits = quartBackStock * 16;
    var quartUnitSubtractCount = quartCrateToUnits; 
   
    var quartCrate = 16;
    var quartSold1 = parseInt(prompt ('Quarts sold day 1'));
    var quartSold2 = parseInt(prompt ('Quarts sold day 2'));
    var quartSold3 = parseInt(prompt ('Quarts sold day 3'));

    var quartOrderTotal = (quartSold1 + quartSold2 + quartSold3) / quartCrate;
    var quartSoldTotal = Math.ceil(quartOrderTotal) * quartCrate;

    var quartUserOrder = quartSoldTotal - quartUnitSubtractCount;
                                                                                                                                                         
    alert( "You should order " + quartUserOrder + " units");
}   


function halfGallonFunction_Monday() {

    var halfGallonBackStock = parseInt(prompt ('How many full crates in the back stock?'));
    var halfGallonCrateToUnits = halfGallonBackStock * 9;
    var halfGallonUnitSubtractCount = halfGallonCrateToUnits; 

    var halfGallonCrate = 9;   
    var halfGallonSold1 = parseInt(prompt ('Half gallons sold day 1'));
    var halfGallonSold2 = parseInt(prompt ('Half gallons sold day 2'));
    var halfGallonSold3 = parseInt(prompt ('Half gallons sold day 3'));

    var halfGallonOrderTotal = (halfGallonSold1 + halfGallonSold2 + halfGallonSold3) / halfGallonCrate;
    var halfGallonSoldTotal = Math.ceil(halfGallonOrderTotal) * halfGallonCrate;
    
    var halfGallonUserOrder = halfGallonSoldTotal - halfGallonUnitSubtractCount;

    alert( "You should order " + halfGallonUserOrder + " units");
}

function gallonFunction_Monday() {

    var gallonBackStock = parseInt(prompt ('How many full crates in the back stock?'));
    var gallonCrateToUnits = gallonBackStock * 4;
    var gallonUnitSubtractCount = gallonCrateToUnits; 

    var gallonCrate = 4;
    var gallonSold1 = parseInt(prompt ('Gallons sold day 1'));
    var gallonSold2 = parseInt(prompt ('Gallons sold day 2'));
    var gallonSold3 = parseInt(prompt ('Gallons sold day 3'));

    var gallonOrderTotal = (gallonSold1 + gallonSold2 + gallonSold3) / gallonCrate;
    var gallonSoldTotal = Math.ceil(gallonOrderTotal) * gallonCrate;
    
    var gallonUserOrder = gallonSoldTotal - gallonUnitSubtractCount;

    alert( "You should order " + gallonUserOrder + " units");
}



//Wednesday's Order

function quartFunction_Wednesday() {

    var quartBackStock = parseInt(prompt ('How many full crates in the back stock?'));
    var quartCrateToUnits = quartBackStock * 16;
    var quartUnitSubtractCount = quartCrateToUnits; 
   
    var quartCrate = 16;
    var quartSold1 = parseInt(prompt ('Quarts sold day 1'));
    var quartSold2 = parseInt(prompt ('Quarts sold day 2'));
    var quartSold3 = parseInt(prompt ('Quarts sold day 3'));
    var quartSold4 = parseInt(prompt ('Quarts sold day 4'));
    var quartSold5 = parseInt(prompt ('Quarts sold day 5'));
    var quartSold5 = parseInt(prompt ('Quarts sold day 6'));

    var quartOrderTotal = (quartSold1 + quartSold2 + quartSold3 + quartSold4 + quartSold5 + quartSold6) / quartCrate;
    var quartSoldTotal = Math.ceil(quartOrderTotal) * quartCrate;

    var quartUserOrder = quartSoldTotal - quartUnitSubtractCount;
                                                                                                                                                         
    alert( "You should order " + quartUserOrder + " units");
}   


function halfGallonFunction_Wednesday() {

    var halfGallonBackStock = parseInt(prompt ('How many full crates in the back stock?'));
    var halfGallonCrateToUnits = halfGallonBackStock * 9;
    var halfGallonUnitSubtractCount = halfGallonCrateToUnits; 

    var halfGallonCrate = 9;   
    var halfGallonSold1 = parseInt(prompt ('Half gallons sold day 1'));
    var halfGallonSold2 = parseInt(prompt ('Half gallons sold day 2'));
    var halfGallonSold3 = parseInt(prompt ('Half gallons sold day 3'));
    var halfGallonSold4 = parseInt(prompt ('Half gallons sold day 4'));
    var halfGallonSold5 = parseInt(prompt ('Half gallons sold day 5'));
    var halfGallonSold5 = parseInt(prompt ('Half gallons sold day 6'));

    var halfGallonOrderTotal = (halfGallonSold1 + halfGallonSold2 + halfGallonSold3 + halfGallonSold4 + halfGallonSold5 + halfGallonSold6) / halfGallonCrate;
    var halfGallonSoldTotal = Math.ceil(halfGallonOrderTotal) * halfGallonCrate;
    
    var halfGallonUserOrder = halfGallonSoldTotal - halfGallonUnitSubtractCount;

    alert( "You should order " + halfGallonUserOrder + " units");
}

function gallonFunction_Wednesday() {

    var gallonBackStock = parseInt(prompt ('How many full crates in the back stock?'));
    var gallonCrateToUnits = gallonBackStock * 4;
    var gallonUnitSubtractCount = gallonCrateToUnits; 

    var gallonCrate = 4;
    var gallonSold1 = parseInt(prompt ('Gallons sold day 1'));
    var gallonSold2 = parseInt(prompt ('Gallons sold day 2'));
    var gallonSold3 = parseInt(prompt ('Gallons sold day 3'));
    var gallonSold4 = parseInt(prompt ('Gallons sold day 4'));
    var gallonSold5 = parseInt(prompt ('Gallons sold day 5'));
    var gallonSold5 = parseInt(prompt ('Gallons sold day 6'));

    var gallonOrderTotal = (gallonSold1 + gallonSold2 + gallonSold3 + gallonSold4 + gallonSold5 + gallonSold6) / gallonCrate;
    var gallonSoldTotal = Math.ceil(gallonOrderTotal) * gallonCrate;
    
    var gallonUserOrder = gallonSoldTotal - gallonUnitSubtractCount;

    alert( "You should order " + gallonUserOrder + " units");
}









//Thursday's Order

function quartFunction_Thursday() {

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


function halfGallonFunction_Thursday() {

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

function gallonFunction_Thursday() {

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
