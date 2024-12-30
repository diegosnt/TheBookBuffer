const productos = [
  {
    id: 1,
    titulo: "Clean Code",
    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi alias consequatur.",
    imagen: "01_clean_code.jpg",
    precio: 10.30
  },
  {
    id: 2,
    titulo: "The C Programming Language",
    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi alias consequatur.",
    imagen: "02_c_programming.jpg",
    precio: 20.99
  },
  {
    id: 3,
    titulo: "The Pragmatinc Programmer",
    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi alias consequatur.",
    imagen: "03_pragmatic_programmer.jpg",
    precio: 30.01
  },
  {
    id: 4,
    titulo: "Code Complete",
    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi alias consequatur.",
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
const lblContador = document.getElementById("lblContador");
let contador = 0;

function crearTarjeta(producto) {
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('tarjeta');

  tarjeta.innerHTML = `
    <img src="./images/${producto.imagen}" alt="${producto.titulo}">
    <h3>${producto.titulo}</h3>
    <p>Precio:$${producto.precio}</p>
    <p>${producto.descripcion}</p>
    <a href="#">Ver más info</a><br>
    <input type="button" class="btnAgregar" value="Agregar al Carrito">
  `;

  // Seleccionar el botón DENTRO de la tarjeta creada
  const btnAgregar = tarjeta.querySelector('.btnAgregar');
  btnAgregar.addEventListener('click', fnContador);

  return tarjeta;
};

function fnContador() {
  contador++;
  console.log("agregados:" + contador);
  lblContador.innerText = contador;
}

productos.forEach(producto => {
  const nuevaTarjeta = crearTarjeta(producto);
  tarjetasContainer.appendChild(nuevaTarjeta);
});



const reseñasContainer = document.querySelector('.reseñas');

function mostrarReseñas() {
  reviews.forEach(review => {
    const producto = productos.find(producto => producto.id === review.id_libro);

    if (producto) { // Verifica que se haya encontrado el producto correspondiente
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