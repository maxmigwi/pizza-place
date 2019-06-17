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





    


