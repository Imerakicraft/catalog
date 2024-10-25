// Datos de muestra para productos
const pulseras = [
    {
        title: "Pulseras simples",
        image: "images/pulsera_simple.jpg",
        price: "5 soles",
        specs: "Se requiere la medida exacta de la muñeca y el proceso de elaboración es de 1 a 2 días.",
        description: "*Se pueden hacer pedidos personalizados pero el producto será similar, no igual.*"
    },
    {
        title: "Pulseras tejidas",
        image: "images/pulsera_tejida.jpg",
        price: "8 soles",
        specs: "Se requiere la medida exacta de la muñeca y el proceso de elaboración es de 2 a 3 días.",
        description: "*Hay técnicas ya definidas mediante WhatsApp te podemos mostrar ejemplos.*"
    }
];

const hama = [
    {
        title: "Llaveros hama",
        image: "images/llavero_hama.jpg",
        price: "7 soles",
        specs: "Se requiere que la imagen referencial debe ser nítida para poder realizarse.",
        description: "*Totalmente personalizado*"
    },
    {
        title: "Adorno hama",
        image: "images/adorno_hama.png",
        price: "20 soles",
        specs: "Se requiere que la imagen referencial debe ser nítida para poder realizarse, si lleva muchos colores se cobraría extra.",
        description: "*Totalmente personalizado*"
    }
];

const arcilla = [
    {
        title: "Alhajero",
        image: "images/alhajero.jpg",
        price: "35 soles",
        specs: "Su fabricación demora de 2 a 4 semanas por el tiempo de secado y por el agrietado que puede salir después de secar, además del pintado.",
        description: "*Totalmente personalizado*"
    },
    {
        title: "Figura",
        image: "images/figura.jpg",
        price: "15 soles",
        specs: "Su fabricación demora de 2 a 4 semanas por el tiempo de secado y por el agrietado que puede salir después de secar, además del pintado, si es muy grande habrá un costo extra.",
        description: "*Totalmente personalizado*"
    }
];

const porcelana = [
    {
        title: "Figura pequeña",
        image: "images/small.jpg",
        price: "20 soles",
        specs: "Su fabricación demora 1 a 2 semanas aprox dependiendo de la complejidad de la pieza, además del pintado, habrá cobro extra si es muy detallado y también se puede personalizar la base.",
        description: "*Totalmente personalizado*"
    },
    {
        title: "Figura grande",
        image: "images/grande.jpg",
        price: "45 soles",
        specs: "Su fabricación demora de 5 a 6 semanas, ya que son figuras muy detalladas, con aditamentos extra como joyería y ropa además de la base que se puede personalizar.",
        description: "*Solo hacemos diseños propios puedes ver el catálogo en el link *"
    }
];

// Funciones para renderizar productos
function renderpulseras() {
    const pulserasList = document.getElementById('pulsera-list');
    pulseras.forEach(pulsera => {
        const card = `
            <div class="col-md-6">
                <div class="card animate-flipIn">
                    <img src="${pulsera.image}" class="card-img-top card-img-product" alt="${pulsera.title}">
                    <div class="card-body">
                        <h5 class="card-title">${pulsera.title}</h5>
                        <b class="card-text">${pulsera.price}</b>
                        <br>
                        <b class="card-text">${pulsera.specs}</b>
                        <p class="card-text">${pulsera.description}</p>
                        <a href="#" class="btn btn-warning">Comprar Ahora</a>
                    </div>
                </div>
            </div>
        `;
        pulserasList.innerHTML += card;
    });
}

function renderhama() {
    const hamaList = document.getElementById('hama-list');
    hama.forEach(hama => {
        const card = `
            <div class="col-md-6">
                <div class="card animate-flipIn">
                    <img src="${hama.image}" class="card-img-top card-img-product" alt="${hama.title}">
                    <div class="card-body">
                        <h5 class="card-title">${hama.title}</h5>
                        <b class="card-text">${hama.price}</b>
                        <br>
                        <b class="card-text">${hama.specs}</b>
                        <p class="card-text">${hama.description}</p>
                        <a href="#" class="btn btn-danger">Obtener Oferta</a>
                    </div>
                </div>
            </div>
        `;
        hamaList.innerHTML += card;
    });
}

function renderarcilla() {
    const arcillaList = document.getElementById('arcilla-list');
    arcilla.forEach(arcilla => {
        const card = `
            <div class="col-md-6">
                <div class="card animate-flipIn">
                    <img src="${arcilla.image}" class="card-img-top card-img-product" alt="${arcilla.title}">
                    <div class="card-body">
                        <h5 class="card-title">${arcilla.title}</h5>
                        <b class="card-text">${arcilla.price}</b>
                        <br>
                        <b class="card-text">${arcilla.specs}</b>
                        <p class="card-text">${arcilla.description}</p>
                        <a href="#" class="btn btn-warning">Comprar Ahora</a>
                    </div>
                </div>
            </div>
        `;
        arcillaList.innerHTML += card;
    });
}

function renderporcelana() {
    const porcelanaList = document.getElementById('porcelana-list');
    porcelana.forEach(porcelana => {
        const card = `
            <div class="col-md-6">
                <div class="card animate-flipIn">
                    <img src="${porcelana.image}" class="card-img-top card-img-product" alt="${porcelana.title}">
                    <div class="card-body">
                        <h5 class="card-title">${porcelana.title}</h5>
                        <b class="card-text">${porcelana.price}</b>
                        <br>
                        <b class="card-text">${porcelana.specs}</b>
                        <p class="card-text" id = "inria">${porcelana.description}</p>
                        <a href="#" class="btn btn-danger">Comprar Ahora</a>
                    </div>
                </div>
            </div>
        `;
        porcelanaList.innerHTML += card;
    });
}

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
renderpulseras();
renderhama();
renderarcilla();
renderporcelana()