
//take random number
//divde random number
//round up


function quartFunction() {
   
    var quartCreate = 16;
    var quartSold1 = parseInt(prompt ('Quart Day 1'));
    var quartSold2 = parseInt(prompt ('Quart Day 2'));
    var quartSold3 = parseInt(prompt ('Quart Day 3'));
    var quartSold4 = parseInt(prompt ('Quart Day 4'));
    var quartSold5 = parseInt(prompt ('Quart Day 5'));

    var quartOrderTotal = (quartSold1 + quartSold2 + quartSold3 + quartSold4 + quartSold5) / quartCreate;
    var quartUserOrder = Math.ceil(quartOrderTotal) * quartCreate;
                                                                                                                                                         
    alert( "You should order " + quartUserOrder + " units");
}   

function halfGallonFunction() {

    var halfGallonCreate = 9;   
    var halfGallonSold1 = parseInt(prompt ('Half Gallon Day 1'));
    var halfGallonSold2 = parseInt(prompt ('Half Gallon Day 2'));
    var halfGallonSold3 = parseInt(prompt ('Half Gallon Day 3'));
    var halfGallonSold4 = parseInt(prompt ('Half Gallon Day 4'));
    var halfGallonSold5 = parseInt(prompt ('Half Gallon Day 5'));

    var halfGallonOrderTotal = (halfGallonSold1 + halfGallonSold2 + halfGallonSold3 + halfGallonSold4 + halfGallonSold5) / halfGallonCreate;
    var halfGallonUserOrder = Math.ceil(halfGallonOrderTotal) * halfGallonCreate;
    
    alert( "You should order " + halfGallonUserOrder + " units");
}

function gallonFunction() {

    var gallonCreate = 4;
    var gallonSold1 = parseInt(prompt ('Full Gallon Day 1'));
    var gallonSold2 = parseInt(prompt ('Full Gallon Day 2'));
    var gallonSold3 = parseInt(prompt ('Full Gallon Day 3'));
    var gallonSold4 = parseInt(prompt ('Full Gallon Day 4'));
    var gallonSold5 = parseInt(prompt ('Full Gallon Day 5'));

    var gallonOrderTotal = (gallonSold1 + gallonSold2 + gallonSold3 + gallonSold4 + gallonSold5) / gallonCreate;
    var gallonUserOrder = Math.ceil(gallonOrderTotal) * gallonCreate;
    
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