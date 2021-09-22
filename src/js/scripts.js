function func() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
/*window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} */
//const $=require('jquery')
/*$( function() {
    $('#slider-range').slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $('#amount').val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $('#amount').val( "$" + $('#slider-range').slider('values', 0 ) +
      " - $" + $('#slider-range').slider( 'values', 1 ) );
  } );*/

 /* $( ".slider" ).slider({
  range: true,
  min: 1000,
  max: 500000,
  values: [ 1000, 50000, ]
});*/
var numCount_adult = document.getElementById('num_count_adult');
var plusBtn_adult = document.getElementById('button_plus_adult');
var minusBtn_adult = document.getElementById('button_minus_adult');
plusBtn_adult.onclick = function() {
  var qty_adult = parseInt(numCount_adult.value);
  qty_adult = qty_adult + 1;
  if (qty_adult>10) qty_adult=10;
  numCount_adult.value = qty_adult;
}
minusBtn_adult.onclick = function() {
  var qty_adult = parseInt(numCount_adult.value);
  qty_adult = qty_adult - 1;
  if (qty_adult<0) qty_adult=0;
  numCount_adult.value = qty_adult;
}
var numCount_child = document.getElementById('num_count_child');
var plusBtn_child = document.getElementById('button_plus_child');
var minusBtn_child = document.getElementById('button_minus_child');
plusBtn_child.onclick = function() {
  var qty_child = parseInt(numCount_child.value);
  qty_child = qty_child + 1;
  if (qty_child>10) qty_child=10;
  numCount_child.value = qty_child;
}
minusBtn_child.onclick = function() {
  var qty_child = parseInt(numCount_child.value);
  qty_child = qty_child - 1;
  if (qty_child<0) qty_child=0;
  numCount_child.value = qty_child;
}

var numCount_baby = document.getElementById('num_count_baby');
var plusBtn_baby = document.getElementById('button_plus_baby');
var minusBtn_baby = document.getElementById('button_minus_baby');
plusBtn_baby.onclick = function() {
  var qty_baby = parseInt(numCount_baby.value);
  qty_baby = qty_baby + 1;
  if (qty_baby>10) qty_baby=10;
  numCount_baby.value = qty_baby;
}
minusBtn_baby.onclick = function() {
  var qty_baby = parseInt(numCount_baby.value);
  qty_baby = qty_baby - 1;
  if (qty_baby<0) qty_baby=0;
  numCount_baby.value = qty_baby;
}

