$(function() {
    'use strict';

$("#first").click(function() {
var parentElement = document.getElementById("main");

var theFirstChild = parentElement.firstElementChild;

var theLastChild = parentElement.lastElementChild;

parentElement.insertBefore(theLastChild, theFirstChild);   

});    
    

$("#second").click(function() {
    
var parentElement = document.getElementById("main");

var theFirstChild = parentElement.firstElementChild;
  
parentElement.appendChild(theFirstChild);
    
});
})