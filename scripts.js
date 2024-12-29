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

document.addEventListener('DOMContentLoaded', () => {

  const tarjetasContainer = document.querySelector('.tarjetas');

  function crearTarjeta(producto) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');

    tarjeta.innerHTML = `
    <img src="./images/${producto.imagen}" alt="${producto.titulo}">
    <h3>${producto.titulo}</h3>
    <p>${producto.descripcion}</p>
    <a href="#">Ver más info</a>
  `;

    return tarjeta;
  }

  productos.forEach(producto => {
    const nuevaTarjeta = crearTarjeta(producto);
    tarjetasContainer.appendChild(nuevaTarjeta);
  });

});

//TEST JS 
function saludar() {
  console.log("Hola mundo");
  console.table(productos);
}

