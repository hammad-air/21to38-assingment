//Chapter #21 task #01

// var a = prompt("Enter the first name")
// var b = prompt("Enter the secomd name")

// document.write( a + " " + b)

// //Chapter #21 task #02

// var a = prompt("Enter your Phone name")
// var b = a.length;


// dcument.write("My Favroite phone is:" + a "<br>")
// document.write("\n"+"length of string :" + b)o


// Chapter #21 task #03

// var a = "string :pakistani"
// var b = "Index of 'n': 7"


// document.write (a + "<br>")
// document.write(b)

// Chapter #21 task #04

// var str = "pakistani.";
// var n = str.indexOf("n");

//  document.write("string:" +  str +"<br>"+  "imdex of 'n' :"+ n)


// Chapter #21 task #05

// var str = "pakistani";
// var res = str.charAt(3);

//  document.write("string:" +  str +"<br>"+  "index number of  '3' :"+ res)


// Chapter #21 task #06

//  var a = prompt("Enter the first name")
//  var b = prompt("Enter the secomd name")
//  var res = a.concat(b);

//  document.write( res)

// Chapter #21 task #07
// var a = "city : Hyderabad "
// var b = "After replacement : Islamabad"

// document.write(a + "<br>")
// document.write(b)



// Chapter #21 task # 08

// var a = "value : 472 " + "<br>"  + "Type : string" + "<br>" + "value : 472" + "<br>" + "Type : Number"

// document.write(a)

// Chapter #21 task #09

// var a = prompt("Enter the product")
// b = a.toUpperCase(a)

// document.write(b)

// Chapter #21 task #11

// var a = "User Input: javascript" + "<br>"
// var b = "Title case :Javascript"

// document.write(a)
// document.write(b)

// Chapter #21 task #12
// const num = 35.36;
// const without = num.toString().replace(".", "");

// document.write("Number :" + num + "<br>" )
// document.write("Result :" + without )


// Chapter #21 task #13

//  var b = prompt("Enter the number :")

// Array = ["cake"+ "apple pie"+ "cookie"+ "chips"+ "patties"]
//  c = Array.toUpperCase(b)

//  if(b=== cake){
//      document.write(Array + "is avilable in our bakery")
//  }
//  if(b=== apple_pie){
//     document.write(Array + "is avilable in our bakery")
// } if(b=== cookie){
//     document.write(Array + "is avilable in our bakery")
// } if(b=== chips){
//     document.write(Array + "is avilable in our bakery")
// } if(b=== patties){
//     document.write(Array + "is avilable in our bakery")
// } else(b==a) {
//     document.write(Array + "is avilable in our bakery")
// }


// // Chapter #21 task #14
// var a = " “The quick brown fox jumps over the lazy dog" + "<br>" 
// var b ="there are two(2) occurrences of word 'the'" 

// document.write(a)
// document.write(b)

// Chapter #21 task #14

// var a = history
// var b = Math.round(2.5);
// document.write(b)


// Chapter #24 task #1


// var a = prompt("Enter any decimal number : ")
// var b = Math.round(a)
// var c =Math.floor(a)
// var d = Math.ceil(a)


// document.write("number :" + a + "<br>" )
// document.write("Round off value :" + b + "<br>" )
// document.write("Floor value :" + c + "<br>" )
// document.write("Ciel value :" + d + "<br>" )

// Chapter #24 task #02

// var a = prompt("Enter any decimal number : ")
// var b = -Math.round(a)
// var c = -Math.floor(a)
// var d =  -Math.ceil(a)


// document.write("number :" + a + "<br>" )
// document.write("Round off value :" + b + "<br>" )
// document.write("Floor value :" + c + "<br>" )
// document.write("Ciel value :" + d + "<br>" )

// Chapter #24 task #03 

// var a = "The absolute value of -4 is 4" 
// document.write(a)


// Chapter #24 task #04

// var headsuser = prompt("Enter heads username");
// var tailsuser = prompt("Enter tails username");

// var toss = Math.random () * 2

// var floor = Math.floor(toss)
// if(floor === 0){
//       alert("Heads" +  " " + headsuser +  " " + "win the toss")
// }else {
// alert("Tails" +  " " + headsuser +  " " + "win the toss")
// }

// Chapter #24 task #04

// var a = prompt("Enter the number")
// var b = Math.floor(Math.random(a) * 100);  

// document.write( "The random number between 1 to 100 is :" + b)


// Chapter #24 task #04

// var a = prompt("Enter your waight in kilogram :")
// document.write("The weight of user is :" + a + "kilograms")

// Chapter #24 task #04

// var y = Math.floor(Math.random() * 10 + 1); 
      
    
//     var guess = 1; 
      
//     document.getElementById("submitguess").onclick = function(){ 
      

//    var x = document.getElementById("guessField").value; 
  
//    if(x == y) 
//    {     
//        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
//                + guess + " GUESS "); 
//    } 
//    else if(x > y)
//    {     
//        guess++; 
//        alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
//    } 
//    else
//    { 
//        guess++; 
//        alert("OOPS SORRY!! TRY A GREATER NUMBER") 
//    } 
// } 


// Chapter # 30 task #01
// var a = new Date();

// document.write(a)

// Chapter #30 task #02

// var b = "";
// var a = a.getMonth(b);
// document.write("Current month :" + a)

// Chapter #31 task #03
// var a = "Today is sun"

// document.write(a)

// Chapter #31 task #04
// var a = "Its fun day"

// document.write(a)


// Chapter #31 task #05

// var lastday = function(y,m){
//       new Date(y, m +1, 0).getDate();
//     }
//     document.write(lastday(2014,0));
//     document.write(lastday(2014,1));
//     document.write(lastday(2014,11));
    

// Chapter #31 task #06

//  var a = new Date();
// var b = a.setMilliseconds(a)
// var c = a.setMinutes(a)

//  document.write(a + "<br>")
// document.write(b + "<br>")
// document.write(c + "<br>")


// Chapter #31 task #07

    // var hours = new Date().getHours();
    // var hours = (hours+24-2)%24;
    // var mid='am';
    // if(hours==0){ 
    // hours=12;
    // }
    // else if(hours>12)
    // {
    // hours=hours%12;
    // mid='pm';
    // }
    // alert ('Toronto time: ' + hours + mid);
    
// Chapter #31 task #07
// var a = new Date()
// var b = a.lastDate(a)

// document.write(b)


// Chapter #31 task #08

// var d = new Date("July 21, 1983 01:15:00");
// d.setDate(15);

// document.write(d)


// Chapter #31 task #09

// const epochTime = new Date(0);

// document.write(epochTime)


// Chapter #31 task #09

// function calculate_age(dob) { 
//     var diff_ms = Date.now() - dob.getTime();
//     var age_dt = new Date(diff_ms); 
  
//     return Math.abs(age_dt.getUTCFullYear() - 1970);
// }

// console.log(calculate_age(new Date(1982, 11, 4)));

// console.log(calculate_age(new Date(1962, 1, 1)));


// Chapter #31 task #09

var a = "<h1>K-ELECTRIC BILL</H1>" + "<br>"
document.write(a)

var b = prompt( "Customer Name " + "<br>") 
document.write(b)

var b = prompt("Net Unit " + "<br>") 
document.write(b)

























































































