/**
* @declare variables
*/
var row;
var column;
var color;

/**
* @ desciption - Call makeGrid function on form submit
* @ .preventDefault() - Cancels the default action (navigation) of the form submission
*/
$("#sizePicker").submit(function(event){
    event.preventDefault();
    row = $("#inputHeight").val();
    column = $("#inputWidth").val();
    makeGrid(row,column);
  })
/**
* @desciption - make dynamic grid with user entered values
* @ .remove() - removes all table rows and table data
* @ .append() - inserts rows to last child of the specified element
*/
function makeGrid(r,c){
    $("tr").remove();
    var i=1;
    while(i<=r){
      $("#pixelCanvas").append("<tr id='table"+ i +"'></tr>");
      for(var j=1;j<=c;j++){
        $("#table" + i).append("<td></td>");
    }i++;
  }
/**
* @desciption - fills/removes color of the selected grid cell
* @ .attr() - gets value of the element attribute matched to "style"
* @ .removeAttr() - removes value of the element attribute matched to "style"
*/
$("td").click(function addColor(){
    color = $("#colorPicker").val();
    $(this).attr("style","background-color:" + color);
  })
}
