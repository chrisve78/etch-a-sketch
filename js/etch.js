
$(document).ready(function(){

});

function clearScreen(){
  $("#button").click(function(){
    $(".container").effect("shake",{
      direction: "left"
    }, 500);
  });
}

function createGrid(size){
  width = $('.screen-container').width() - 2;
  height = $('.screen-container').height() - 2;
  container = $('<div class="black_div"></div>');
  divWidth = size/width;
  divheight = size/height;
  //need to finish this function
  //loop through dividing rows by size of div(rows variable/size parameter initial needs to be 16)
  /*
  Nest a for loop in a while loop. While loop represents each row. For loop will populate that row
  then while loop will move to next row adding each, "container"
  */
}
