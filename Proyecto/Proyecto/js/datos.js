

// const contenedorImagenes = document.getElementById("nell");
// const contenedorNise = document.getElementById("nise");
// const contenedorGaleriaMotos = document.getElementById("container-imagenes");
// const contenedorServicios= document.getElementById("ServIcon");
// const contenedorIcono1= document.getElementById("log-Ig");
// const contenedorIcono2= document.getElementById("log-what");
// const contenedorIcono3= document.getElementById("log-email");


// // mapea los id en su contenedor correspondiente
// const contenedores={
//   "12": contenedorIcono1,
//   "13": contenedorIcono2,
//   "14": contenedorIcono3
// };

// const jsonURL = "./js/nose.json";
// fetch(jsonURL)
//     .then(response => response.json())
//     .then(data => {
//         // Itera a través de los objetos en el arreglo
//         data.encabezado.forEach(imagen => {
            
//             const img = document.createElement("img");

            
//             img.src = imagen.url;

            
//             contenedorImagenes.appendChild(img);
//         });
//         data.log.forEach(imagenLog => {
          
//           const imgLog = document.createElement("img");
      
          
//           const propiedadImagen = Object.keys(imagenLog)[1];
          
         
//           imgLog.src = imagenLog[propiedadImagen];
      
          
//           contenedorNise.appendChild(imgLog);
//       });
        
//         data.GaleriaMotos.forEach(imagenGaleria => {
//           // Crea elemento de imagen
//           const imgGaleria = document.createElement("img");

          
//           const propiedadImagen = Object.keys(imagenGaleria)[1];
          
          
//           imgGaleria.src = imagenGaleria[propiedadImagen];

        
//           contenedorGaleriaMotos.appendChild(imgGaleria);
//       });
      
//       data.Servicios.forEach(servicio => {
        
//         const imgServicio = document.createElement("img");
    
//         // Determina la propiedad de la imagen
//         const propiedadImagen = Object.keys(servicio)[1];       
//         imgServicio.src = servicio[propiedadImagen];
//         contenedorServicios.appendChild(imgServicio);
//     });
//     data.Footer.forEach(footerIcon => {
//       // Crea un elemento de imagen
//       const imgFooter = document.createElement("img");

      
//       const propiedadImagenFooter = Object.keys(footerIcon)[1];

      
//       imgFooter.src = footerIcon[propiedadImagenFooter];

//       // Obtiene el "id" del icono del footer.
//       const idFooter = footerIcon.id;

//       // Agrega el icono al contenedor
//       if (contenedores[idFooter]) {
//           contenedores[idFooter].appendChild(imgFooter);
//       }
//   });
   
//     })
//     .catch(error => console.error("Error al cargar el JSON:", error));


fetch('mysql://root:prsc0528@localhost:3306/pity')
            .then(response => response.json())
            .then(data => {
                
                const contenedorImagenes = document.getElementById('container-images');
                data.forEach(imagen => {
                    const imgElement = document.createElement('img');
                    imgElement.src = imagen.url;
                    imgElement.alt = imagen.descripcion; 
                    contenedorImagenes.appendChild(imgElement);
                });
                const titulos = document.getElementById('title-gallery');
                data.forEach(tittle => {
                    const listItem = document.createElement('div');
                    listItem.textContent = tittle;
                    titulos.appendChild(listItem);
                });
                const contenedorServicios = document.getElementById('services');
                data.forEach(icon => {
                    const ServicesElement = document.createElement('img');
                    ServicesElement.src = icon.url;
                    ServicesElement.alt = icon.descripcion; 
                    contenedorServicios.appendChild(ServicesElement);
                });



            })
            
            .catch(error => console.error('Error:', error));