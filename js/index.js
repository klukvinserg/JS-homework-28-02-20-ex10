let a = prompt('Enter year');

while (a.length !== 4 || a <1000 || isNaN(a)) {
    alert('Year is not correct');
    a = prompt('Enter year');
 }

 aNum = parseInt(a);

 if ((a % 4 === 0 && a % 100 != 0) || a % 400 ===0) {
     b = "leap"
 } else {
    b = "normal"
 }

let c = prompt('Enter month:\n"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"');

while (c !== 'Jan' && c !== 'Feb' && c !== 'Mar' && c !== 'Apr' && c !== 'May' && c !== 'Jun' && c !== 'Jul' && c !== 'Aug' && c !== 'Sep' && c !== 'Oct' && c !== 'Nov' && c !== 'Dec') {
    alert('Month is not correct');
    c = prompt('Enter month:\n"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"');
 }

switch (c) {
    case 'Jan':
        c = 0;
        break;
    case 'Feb':
        c = 1
        break;
    case 'Mar':
        c = 2
        break;
    case 'Apr':
        c = 3
        break;
    case 'May':
        c = 4
        break;
    case 'Jun':
        c = 5
        break;
    case 'Jul':
        c = 6
        break;
    case 'Aug':
        c = 7
        break;
    case 'Sep':
        c = 8
        break;
    case 'Oct':
        c = 9
        break;
    case 'Nov':
        c = 10
        break;
    case 'Dec':
        c = 11
        break;
}

if (c === 0 || c === 2 || c === 4 || c === 6 || c === 7 || c === 9 || c === 11) {
    d = +prompt('Enter day of month(1-31)');
    while (d < 1 || d > 31 || isNaN(d)) {
        alert('Day is not correct');
        d = +prompt('Enter day of month(1-31)');
     }
} else if (c === 3 || c === 5 || c === 8 || c === 10) {
    d = +prompt('Enter day of month(1-30)');
    while (d < 1 || d > 30 || isNaN(d)) {
        alert('Day is not correct');
        d = +prompt('Enter day of month(1-30)');
     }
} else if (c === 1 &&  b === "leap" ) {
    d = +prompt('Enter day of month(1-29)');
    while (d < 1 || d > 29 || isNaN(d)) {
        alert('Day is not correct');
        d = +prompt('Enter day of month(1-29)');
     } 
} else if (c === 1 &&  b === "normal" ) {
    d = +prompt('Enter day of month(1-28)');
    while (d < 1 || d > 28 || isNaN(d)) {
        alert('Day is not correct');
        d = +prompt('Enter day of month(1-28)');
     } 
} 

let date = new Date(aNum, c, d);
date.setDate(date.getDate() + 1);

let day = (date.getDate()).toString();
let month = date.getMonth();
let year = date.getFullYear();

if ( day < 10) {
    day = '0' + day;
}

switch (month) {
    case 0:
        month = 'Jan'
        break;
    case 1:
        month = 'Feb'
        break;
    case 2:
        month = 'Mar'
        break;
    case 3:
        month = 'Apr'
        break;
    case 4:
        month = 'May'
        break;
    case 5:
        month = 'Jun'
        break;
    case 6:
        month = 'Jul'
        break;
    case 7:
        month = 'Aug'
        break;
    case 8:
        month = 'Sep'
        break;
    case 9:
        month = 'Oct'
        break;
    case 10:
        month = 'Nov'
        break;
    case 11:
        month = 'Dec'
        break;
}

alert('Next date: '+day+' '+month+' '+year);


