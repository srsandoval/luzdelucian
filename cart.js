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

const cartItemsContainer = document.querySelector('.cart-items');
const cartTotal = document.getElementById('cart-total');

// Obtenemos carrito de localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para renderizar los productos
function renderCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach((product, index) => {
    total += product.price;

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');

    itemDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="cart-item-info">
        <h3>${product.name}</h3>
        <p>Precio: $${product.price.toFixed(2)}</p>
      </div>
      <button onclick="removeFromCart(${index})">Eliminar</button>
    `;

    cartItemsContainer.appendChild(itemDiv);
  });

  cartTotal.textContent = total.toFixed(2);
}

// Función para eliminar producto
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

// Inicializamos renderizado
renderCart();
