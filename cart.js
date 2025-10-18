const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Tomamos los datos del producto usando data-attributes
    const product = {
      id: button.dataset.id,
      name: button.dataset.name,
      price: parseFloat(button.dataset.price)
    };
    
    addToCart(product); // Llamamos a la función que maneja el carrito
  });
});

// Función que maneja agregar productos al carrito
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} agregado al carrito!`);
}
