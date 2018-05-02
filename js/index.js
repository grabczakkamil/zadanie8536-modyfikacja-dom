$(function() {
    'use strict';

$("#first").click(function(){
    
var parentElement = document.getElementById("main");

var theFirstChild = parentElement.firstChild;

var theLastChild = parentElement.lastChild;

parentElement.insertBefore(theLastChild, theFirstChild);   

})    
    

$("#second").click(function(){
    
var parentElement = document.getElementById("main");

var theFirstChild = parentElement.firstChild;
  
parentElement.appendChild(theFirstChild);
    
});
})