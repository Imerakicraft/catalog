// Datos de muestra para productos
const pulseras = [
    {
        title: "Pulseras simples",
        image: "images/pulsera_simple.jpg",
        price: 5,
        specs: "Se requiere la medida exacta de la muñeca y el proceso de elaboración es de 1 a 2 días.",
        description: "*Se pueden hacer pedidos personalizados pero el producto será similar, no igual.*"
    },
    {
        title: "Pulseras tejidas",
        image: "images/pulsera_tejida.jpg",
        price: 8,
        specs: "Se requiere la medida exacta de la muñeca y el proceso de elaboración es de 2 a 3 días.",
        description: "*Hay técnicas ya definidas mediante WhatsApp te podemos mostrar ejemplos.*"
    }
];

const hama = [
    {
        title: "Llaveros hama",
        image: "images/llavero_hama.jpg",
        price: 7,
        specs: "Se requiere que la imagen referencial debe ser nítida para poder realizarse. De preferencia que sean imágenes tipo pixel art.",
        description: "*Totalmente personalizado*"
    },
    {
        title: "Adorno hama",
        image: "images/adorno_hama.png",
        price: 20,
        specs: "Se requiere que la imagen referencial debe ser nítida para poder realizarse, si lleva muchos colores se cobraría extra.",
        description: "*Totalmente personalizado*"
    }
];

const arcilla = [
    {
        title: "Alhajero",
        image: "images/alhajero.jpg",
        price: 35,
        specs: "Su fabricación demora de 2 a 4 semanas por el tiempo de secado y por el agrietado que puede salir después de secar, además del pintado.",
        description: "*Totalmente personalizado*"
    },
    {
        title: "Figura",
        image: "images/figura.jpg",
        price: 15,
        specs: "Su fabricación demora de 2 a 4 semanas por el tiempo de secado y por el agrietado que puede salir después de secar, además del pintado, si es muy grande habrá un costo extra.",
        description: "*Totalmente personalizado*"
    }
];

const porcelana = [
    {
        title: "Figurita",
        image: "images/small.jpg",
        price: 20,
        specs: "Su fabricación demora 1 a 2 semanas aprox dependiendo de la complejidad de la pieza, además del pintado, habrá cobro extra si es muy detallado y también se puede personalizar la base.",
        description: "*Totalmente personalizado*"
    },
    {
        title: "Figura grande",
        image: "images/grande.jpg",
        price: 45,
        specs: "Su fabricación demora de 5 a 6 semanas, ya que son figuras muy detalladas, con aditamentos extra como joyería y ropa además de la base que se puede personalizar.",
        description: "*Solo hacemos diseños propios, puedes ver el catálogo en el link*"
    }
];

// Función para renderizar productos de una categoría
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos elementos
    products.forEach(product => {
        const card = `
            <div class="col-md-6">
                <div class="card animate-flipIn">
                    <img src="${product.image}" class="card-img-top card-img-product" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <b class="card-text">${product.price} soles</b>
                        <br>
                        <b class="card-text">${product.specs}</b>
                        <p class="card-text">${product.description}</p>
                        <a href="#" class="btn btn-add-cart btn-warning">Añadir al carrito</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Renderizar cada categoría de productos
renderProducts(pulseras, 'pulsera-list');
renderProducts(hama, 'hama-list');
renderProducts(arcilla, 'arcilla-list');
renderProducts(porcelana, 'porcelana-list');

// Función de envío de formulario de contacto
function handleFormSubmission(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');
    formMessage.innerHTML = `<div class="alert alert-success">¡Gracias, ${name}! Tu mensaje ha sido enviado.</div>`;
    document.getElementById('contact-form').reset();
}
document.getElementById('contact-form').addEventListener('submit', handleFormSubmission);

// Funcionalidad del carrito de compras
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');
btnCart.addEventListener('click', () => containerCartProducts.classList.toggle('hidden-cart'));
const rowProduct = document.querySelector('.row-product');
let allProducts = [];
const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');
const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');
const modalCompra = document.querySelector('#modal-compra'); // Modal de confirmación de compra

// Event Listener para añadir al carrito
document.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        e.preventDefault();
        const product = e.target.parentElement;
        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h5').textContent,
            price: parseFloat(product.querySelector('b').textContent.replace(' soles', ''))
        };
        const exists = allProducts.some(item => item.title === infoProduct.title);
        if (exists) {
            allProducts = allProducts.map(item => {
                if (item.title === infoProduct.title) {
                    item.quantity++; // Incrementar la cantidad del producto
                }
                return item;
            });
        } else {
            allProducts.push(infoProduct); // Agregar un nuevo producto al carrito
        }
        showHTML();
        showModal(); // Mostrar modal de confirmación al añadir al carrito
    }
});

// Event Listener para eliminar del carrito
rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('.titulo-producto-carrito').textContent;

        allProducts = allProducts.map(item => {
            if (item.title === title) {
                if (item.quantity > 1) {
                    item.quantity--; // Decrementar la cantidad
                } else {
                    return null; // Retornar null para eliminar el producto si la cantidad es 1
                }
            }
            return item;
        }).filter(item => item !== null); // Filtrar los productos nulos
        showHTML();
    }
});

// Función para mostrar el HTML del carrito
const showHTML = () => {
    if (allProducts.length === 0) {
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }
    rowProduct.innerHTML = '';
    let total = 0;
    let totalOfProducts = 0;
    allProducts.forEach(item => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');
        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${item.quantity}</span>
                <p class="titulo-producto-carrito">${item.title}</p>
                <span class="precio-producto-carrito">${item.price} soles</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        `;
        rowProduct.append(containerProduct);
        total += item.quantity * item.price;
        totalOfProducts += item.quantity;
    });
    valorTotal.innerText = `${total.toFixed(2)} soles`;
    countProducts.innerText = totalOfProducts;

    // Mostrar modal de compra si hay productos en el carrito
    if (totalOfProducts > 0) {
        modalCompra.classList.remove('hidden');
        setTimeout(() => {
            modalCompra.classList.add('hidden');
        }, 3000); // Ocultar el modal después de 3 segundos
    }
};

// Función para crear el mensaje de WhatsApp
function updateWhatsAppLink() {
    const total = allProducts.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const itemsList = allProducts.map(item => `${item.quantity} x ${item.title}`).join(', ');
    // Verificar si hay solo un artículo y si la cantidad es 1
    let message;
    if (allProducts.length === 1 && allProducts[0].quantity === 1) {
        message = `Hola, me interesa el siguiente producto: ${itemsList}. Total: ${total.toFixed(2)} soles.`;
    } else {
        message = `Hola, me interesan los siguientes productos: ${itemsList}. Total: ${total.toFixed(2)} soles.`;
    }
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '+51904030201';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    document.getElementById('whatsapp-link').href = whatsappLink;
}
// Llama a esta función cada vez que el modal se abre
const buyButton = document.getElementById('buy-button');
buyButton.addEventListener('click', updateWhatsAppLink);
