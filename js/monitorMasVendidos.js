$("#product1").click(() =>  {
    $('#product1').slideUp('slow', function () {
      $('#mostrar-data1').append(
      `<div class="mon1">
      <h2 class="pmv-title">${grupoMonitores[7].marca}</h2>
      <p> ${grupoMonitores[7].desc}</p></br>
      <li> PRECIO: $${grupoMonitores[7].precio}</li>
      <li> RESOLUCION: ${grupoMonitores[7].resolucion}</li>
      <li> TAMAÑO: ${grupoMonitores[7].tamaño}</li>
      </div>`);
      }); 
  });
  
  $("#product2").click(() =>  {
    $('#product2').slideUp('slow', function () {
      $('#mostrar-data2').append(
      `<div class="mon1">
      <h2 class="pmv-title">${grupoMonitores[5].marca}</h2>
      <p> ${grupoMonitores[5].desc}</p></br>
      <li> PRECIO: $${grupoMonitores[5].precio}</li>
      <li> RESOLUCION: ${grupoMonitores[5].resolucion}</li>
      <li> TAMAÑO: ${grupoMonitores[5].tamaño}</li>
      </div>`);
      }); 
  });
  
  $("#product3").click(() =>  {
    $('#product3').slideUp('slow', function () {
      $('#mostrar-data3').append(
      `<div class="mon1">
      <h2 class="pmv-title">${grupoMonitores[9].marca}</h2>
      <p> ${grupoMonitores[9].desc}</p></br>
      <li> PRECIO: $${grupoMonitores[9].precio}</li>
      <li> RESOLUCION: ${grupoMonitores[9].resolucion}</li>
      <li> TAMAÑO: ${grupoMonitores[9].tamaño}</li>
      </div>`);
      }); 
  });
  
  $("#product4").click(() =>  {
    $('#product4').slideUp('slow', function () {
      $('#mostrar-data4').append(
      `<div class="mon1">
      <h2 class="pmv-title">${grupoMonitores[1].marca}</h2>
      <p> ${grupoMonitores[1].desc}</p></br>
      <li> PRECIO: $${grupoMonitores[1].precio}</li>
      <li> RESOLUCION: ${grupoMonitores[1].resolucion}</li>
      <li> TAMAÑO: ${grupoMonitores[1].tamaño}</li>
      </div>`);
      }); 
  });
  