# CRUD operations 

CRUD means (create , read, update , delete) .

this is a simple project that show how to make this operations using pure js .

it can be used in manage stores .

all data are stored in local storage . there is no use for database.


function get total :
  is used for show total price in total box only if when price box have value
  total = price + ads + tax - discount
  control color of box


function create:
 is used for create and update 
 start to fetch data from local storage
 check mood if create or update 
 if create -> make new object to save new data
 if update -> update data 



function showdata:
 it loops on data in array to show it 


function buttondelete:
 there is a button "delete all" 
 it only appears when there is a data in the table 
 this funcion control this button to appear or hidden



function clearall:
 this is used to delete all data from local storage and array 


function update:
 this is used to update data 

function deleteOneElement:
 this is used to delete One Element

function search :
 this used to search in table using category or title




some features :
 get total box only be green and have value when price box have value.
 delete all button only appear when there is at least one row in table .
title , price and category are required . other data are optional .

