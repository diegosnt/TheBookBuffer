const productos = [
  {
    id: 1,
    titulo: "Clean Code",
    descripcion: "Guía exhaustiva para escribir código de calidad profesional. Técnicas y mejores prácticas.",
    imagen: "01_clean_code.jpg",
    precio: 10.30
  },
  {
    id: 2,
    titulo: "The C Programming Language",
    descripcion: "Introducción definitiva a C por sus creadores. Fundamentos y ejemplos prácticos.",
    imagen: "02_c_programming.jpg",
    precio: 20.99
  },
  {
    id: 3,
    titulo: "The Pragmatinc Programmer",
    descripcion: "Consejos atemporales para ser un mejor programador. Prácticas y filosofía del buen código.",
    imagen: "03_pragmatic_programmer.jpg",
    precio: 30.01
  },
  {
    id: 4,
    titulo: "Code Complete",
    descripcion: "Clásico sobre construcción de software. Cubre diseño, codificación, depuración y más.",
    imagen: "04_code_complete.jpg",
    precio: 40.49
  }
]

const reviews = [
  {
    id: 1,
    id_libro: 1,
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi alias consequatur.",
    nombre: "José Gomez"
  },
  {
    id: 2,
    id_libro: 4,
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi alias consequatur.",
    nombre: "Juan Perez"
  },
  {
    id: 3,
    id_libro: 2,
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi alias consequatur.",
    nombre: "Ricardo Lopez"
  },
  {
    id: 4,
    id_libro: 1,
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi alias consequatur.",
    nombre: "Mariela Martinez"
  },
  {
    id: 5,
    id_libro: 3,
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi alias consequatur.",
    nombre: "Ricardo Diaz"
  },
  {
    id: 6,
    id_libro: 1,
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi alias consequatur.",
    nombre: "Maria Garcia"
  }

]

const tarjetasContainer = document.querySelector('.tarjetas');
const listaCarrito = document.getElementById("listaCarrito");
const lblTotalPagar = document.getElementById("lblTotalPagar");
const carritoSection = document.getElementById("carrito");
const btnBorrarCarrito = document.getElementById("borrarCarrito");
const btnPagar = document.getElementById("pagarTotal");

let carrito = [];

function crearTarjeta(producto) {
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('tarjeta');

  tarjeta.innerHTML = `
    <img src="./images/${producto.imagen}" alt="${producto.titulo}">
    <h3>${producto.titulo}</h3>
    <p>Precio:$${producto.precio}</p>
    <p>${producto.descripcion}</p>
    <a href="#">Ver más info</a><br>
    <button class="btnAgregar">Agregar al Carrito</button>
  `;

  const btnAgregar = tarjeta.querySelector('.btnAgregar');
  btnAgregar.addEventListener('click', () => agregarProducto(producto));

  return tarjeta;
};


function actualizarCarrito() {
  listaCarrito.innerHTML = "";

  let total = 0;

  if (carrito.length === 0) {
    carritoSection.style.display = "none";
  } else {
    carritoSection.style.display = "block";

    carrito.forEach(producto => {
      const listaItem = document.createElement('li');
      listaItem.innerText = `${producto.titulo} - $${producto.precio}`;

      const btnRemove = document.createElement('button');
      btnRemove.innerText = "X";
      btnRemove.addEventListener('click', () => removerProducto(producto.id));
      listaItem.appendChild(btnRemove);

      listaCarrito.appendChild(listaItem);
      total += producto.precio;
    });

    lblTotalPagar.innerText = `$${total.toFixed(2)}`;
  }
}

actualizarCarrito();

function agregarProducto(producto) {
  carrito.push(producto);
  console.table(producto);
  actualizarCarrito();
}

function removerProducto(idProducto) {
  const index = carrito.findIndex(producto => producto.id === idProducto);
  if (index !== -1) {
    carrito.splice(index, 1);
    actualizarCarrito();
  }
}

productos.forEach(producto => {
  const nuevaTarjeta = crearTarjeta(producto);
  tarjetasContainer.appendChild(nuevaTarjeta);
});

btnBorrarCarrito.addEventListener('click', () => {
  carrito = []; // Vaciar el carrito
  actualizarCarrito();
});


btnPagar.addEventListener('click', () => {
  if (carrito.length > 0) {

      let mensajeCarrito = "Libros en su carrito:\n";

      carrito.forEach(producto => {
          mensajeCarrito += `- ${producto.titulo}: $${producto.precio}\n`;
      });

      mensajeCarrito += `\nTotal: ${lblTotalPagar.innerText}`;

      console.table(carrito);
      alert(mensajeCarrito);

      carrito = [];
      actualizarCarrito();
  } else {
      alert("El carrito está vacío");
  }
});


const reseñasContainer = document.querySelector('.reseñas');

function mostrarReseñas() {
  reviews.forEach(review => {
    const producto = productos.find(producto => producto.id === review.id_libro);

    if (producto) {
      const reseñaDiv = document.createElement('div');
      reseñaDiv.classList.add('reseña');

      reseñaDiv.innerHTML = `
                <h3>${producto.titulo}</h3>
                <p>${review.review}</p>
                <cite>${review.nombre}</cite>
            `;

      reseñasContainer.appendChild(reseñaDiv);
    }
  });
}

mostrarReseñas();