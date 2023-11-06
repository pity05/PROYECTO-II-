/*var nose ={
    "imagenURL":"encabezado.png",
    "imagen2": "logui.png",
    "gal1" : "1.png",
    "gal2" : "2.png",
    "gal3" : "3.png",
    "gal4" : "4.png",
    "gal5" : "5.png"
};


var imagenElement = document.getElementById("imagen");
imagenElement.src =nose.imagenURL;

var niseElement = document.getElementById("nise");
niseElement.src =nose.imagen2;

var galleryElement = document.getElementById("gallery");
galleryElement.src = nose.gal1;

var gallery1Element = document.getElementById("gallery1");
gallery1Element.src = nose.gal2;

var gallery2Element = document.getElementById("gallery2");
gallery2Element.src = nose.gal3;

var gallery3Element = document.getElementById("gallery3");
gallery3Element.src = nose.gal4;

var gallery4Element = document.getElementById("gallery4");
gallery4Element.src = nose.gal5;
*/
/*var car1Element = document.getElementById("car1");
car1Element.src = nose.cars1;*/
//!Jalar por variables los elementos del html

    /*fetch('./js/nose.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
    const encabezado = data.encabezado;
     encabezado.forEach(function(imagen){
      const imgElement = document.createElement('img');
      imgElement.src=imagen.url;
      document.getElementById('nell').appendChild(imgElement);
      
      const imElement = document.createElement('im');
      imElement.src=imagen.imagen2;
      document.getElementById('nise').appendChild(imElement);
    });
      
     
  })
     
     
    
     
     .catch(function(error){
      console.log('Error:',error);
     });*/
    


    /*nose.services.forEach(services => {
      const container = this.document.getElementById("Services");
      const imagenURL = this.document.createElement("img");
      
      imagenURL.src = services.imagenURL;
      imagenURL.alt = services.id;
      
    
      const itemContainer = document.createElement("div");
      itemContainer.className = "ServClas";
      ico.className = "ServICon";
      itemContainer.appendChild(ico);
      itemContainer.appendChild(descripcion);

      container.appendChild(itemContainer);
    

    });

      });

      ;
    */

const contenedorImagenes = document.getElementById("nell");
const contenedorNise = document.getElementById("nise");
const contenedorGaleriaMotos = document.getElementById("container-imagenes");
const contenedorServicios= document.getElementById("ServIcon");
const contenedorIcono1= document.getElementById("log-Ig");
const contenedorIcono2= document.getElementById("log-what");
const contenedorIcono3= document.getElementById("log-email");


// mapea los id en su contenedor correspondiente
const contenedores={
  "12": contenedorIcono1,
  "13": contenedorIcono2,
  "14": contenedorIcono3
};

const jsonURL = "./js/nose.json";
fetch(jsonURL)
    .then(response => response.json())
    .then(data => {
        // Itera a través de los objetos en el arreglo
        data.encabezado.forEach(imagen => {
            
            const img = document.createElement("img");

            
            img.src = imagen.url;

            
            contenedorImagenes.appendChild(img);
        });
        data.log.forEach(imagenLog => {
          
          const imgLog = document.createElement("img");
      
          
          const propiedadImagen = Object.keys(imagenLog)[1];
          
         
          imgLog.src = imagenLog[propiedadImagen];
      
          
          contenedorNise.appendChild(imgLog);
      });
        
        data.GaleriaMotos.forEach(imagenGaleria => {
          // Crea elemento de imagen
          const imgGaleria = document.createElement("img");

          
          const propiedadImagen = Object.keys(imagenGaleria)[1];
          
          
          imgGaleria.src = imagenGaleria[propiedadImagen];

        
          contenedorGaleriaMotos.appendChild(imgGaleria);
      });
      
      data.Servicios.forEach(servicio => {
        
        const imgServicio = document.createElement("img");
    
        // Determina la propiedad de la imagen
        const propiedadImagen = Object.keys(servicio)[1];       
        imgServicio.src = servicio[propiedadImagen];
        contenedorServicios.appendChild(imgServicio);
    });
    data.Footer.forEach(footerIcon => {
      // Crea un elemento de imagen
      const imgFooter = document.createElement("img");

      
      const propiedadImagenFooter = Object.keys(footerIcon)[1];

      
      imgFooter.src = footerIcon[propiedadImagenFooter];

      // Obtiene el "id" del icono del footer.
      const idFooter = footerIcon.id;

      // Agrega el icono al contenedor
      if (contenedores[idFooter]) {
          contenedores[idFooter].appendChild(imgFooter);
      }
  });
   
    })
    .catch(error => console.error("Error al cargar el JSON:", error));


    /*document.getElementById("log-Ig"),addEventListener("click", function(){
      this.window.location.href= "https://instagram.com/ariel.campos.568089?igshid=NzZlODBkYWE4Ng==";
    });
    document.getElementById("log-what"),addEventListener("click", function(){
      this.window.location.href= "https://wa.me/qr/ZQCNNL7QF7PVK1";
    });
    document.getElementById("log-email"),addEventListener("click", function(){
      this.window.location.href= "https://mail.google.com/mail/u/0/?hl=es#inbox?compose=DmwnWsmBGVHCqklvpXnJJbJJvfbFVWTQmxmzHbGzDvwhPgdnZCCQKsLZSMDBxmXzvspbHStKVMFb";
    });*/