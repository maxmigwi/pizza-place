function Pizza(size, toppings, crusts, delivery) {
  this.size = size;
  this.toppings = toppings;
  this.crusts = crusts;
  this.delivery = delivery;
}

Pizza.prototype.price = function() {
  if (this.size === 'small') {var price = 600;
  } else if (this.size === 'medium') {var price = 800;
  } else {var price = 1000;}
  price += this.size.length;
  return price;
}
totalCost = 0;

// user interface logic
$(document).ready(function() {
  $("form# amaizing-pizza").submit(function(event) {
    event.preventDefault();
    var size = "";
    $("input:button[name=size]:checked").each(function(){
      size = $(this).val();
    });
    var toppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var aTopping = $(this).val();
      toppings.push(aTopping);
    });






    


