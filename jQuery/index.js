

// using ready method and function to run jQuery
// $(document).ready(function(){
//     $("h1").css("color", "green");
// });


// using dollar sign to apply jquery
// $("h1").css("font-size", "5rem");

// writing jquery to apply jquery on elements or tags
// jQuery("h1").css("color", "blue");



// adding class
$("h1").addClass("title-heading margin"); 

// removing class
// $("h1").removeClass("title-heading");




// to check that the class is apply on it or not
// $("h1").hasClass("title-heading");











// changing text of the element

// $("h1").text("bye");
// $("button").text("Don't Click Me");
// $("button").html("<em>I am a button</em>");
// $("h1").html("<p>there is changing the h1 into paragraph</p>");











// changing attributes values using jquery
// src is the attribute and the tom2.png is the image that we want to add with it.
// $("img").attr("src", "images/tom2.png");


// change the link of the anker from google to yahoo
// $("a").attr("href", "https://www.yahoo.com");


// give the class to h1 and set the style to it.
// $("h1").attr("class", "title-heading margin")











// adding eventListener of click functionality to the elements using jQuery
// $("button").click(function(){
//     $("h1").css("color", "red");
//     $("h1").addClass("title-heading margin");
// })



// using simple java script
// for(var i = 0; i<3; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "pink";
//     });
// }






// adding eventlistener of keypress functionality to the element using jQuery
// $("input").keypress(function(event) {
//     console.log(event.key);
// })



// whole document

// $("body").keypress(function(event) {
//     console.log(event.key);
// })





// task( when click the button from keyboard then it can show instead of h1)
$("input").keypress(function(event){
    $("h1").text(event.key);
})


// whole document
$("body").keypress(function(event){
    $("h1").text(event.key);
})