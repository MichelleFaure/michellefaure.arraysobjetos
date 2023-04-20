const propiedades = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:"https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src: "https://okdiario.com/coolthelifestyle/img/2021/10/31/2779padarolncarpinteriacacreditjimbartsch.jpeg",
      rooms: 5,
      m: 500
    }
  ];

  const contenedorProductos = document.querySelector('.productos');

  const btn = document.querySelector('.btn-buscar');

  const numcuartos = document.getElementById('input-cuartos');
  const numdesde = document.getElementById('input-desde');
  const numhasta = document.getElementById('input-hasta');

  const total = document.querySelector('.total-productos');


  mostrarProductos()

  btn.addEventListener("click", camposVacios)

  function camposVacios(){
    if(numcuartos.value == "" || numdesde.value == "" || numhasta.value == ""){
     alert("Faltan espacios por rellenar")
    }
    else{
      filtroPropiedades()
    }
  }

  function filtroPropiedades(){
    let nuevoArray = [];
    for(propiedad of propiedades){
      if(numcuartos.value == propiedad.rooms && numdesde.value <= propiedad.m && numhasta.value >= propiedad.m){ 
        nuevoArray.push(propiedad);
      }
    }
    total.innerHTML = nuevoArray.length
    
    mostrarProductos(nuevoArray)
  }


 function mostrarProductos(array = propiedades){
 
  let html = "";

  for(propiedad of array){
    html += `
    <div class="card">
    <img src=${propiedad.src} alt="">
    <div class="card-info">
        <h3>${propiedad.name}</h3>
        <p class="card-cuartos">Cuartos: <span>${propiedad.rooms}</span></p>
        <p class="card-metros">Metros: <span>${propiedad.m}</span> </p>
        <p>${propiedad.description}</p>
    </div>
    <button class="card-btn">Ver más</button>
  </div>`
  }
  contenedorProductos.innerHTML = html

 }