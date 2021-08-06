///////////////////
//FILTRO MARCA
///////////////////
$("#marca-Samsung").on('click', function (){
    if ($('#marca-Samsung').prop ("checked")){
      let soloSamsung = grupoMonitores.filter(Monitor => Monitor.marca === "Samsung");
      for (m of soloSamsung){
        $('#cont-general').append(
        `<div class="marca-samsung-cont estilo-cont">
          <img class="seccion-imgs" src="${m.img}">
          <p class="marca">${m.marca}</p>
          <p class="precio">$${m.precio}</p>
          <p>${m.resolucion}</p>
          <p>${m.tamaño}</p>
          <button class="btn-carro-estilo agregar-carrito">Agregar al carrito</button>
        </div>`);
      } 
    }else{
      $('.marca-samsung-cont').remove();
    }
  });

  $("#marca-LG").on('click', function (){
    if ($('#marca-LG').prop ("checked")){
      let soloLG = grupoMonitores.filter(Monitor => Monitor.marca === "LG");
      for (m of soloLG){
        $('#cont-general').append(
        `<div class="marca-LG-cont estilo-cont">
          <img class="seccion-imgs" src="${m.img}">
          <p>${m.marca}</p>
          <p>$${m.precio}</p>
          <p>${m.resolucion}</p>
          <p>${m.tamaño}</p>
        </div>`);
      } 
    }else{
      $('.marca-LG-cont').remove();
    }
  });

  $("#marca-Lenovo").on('click', function (){
    if ($('#marca-Lenovo').prop ("checked")){
      let soloLenovo = grupoMonitores.filter(Monitor => Monitor.marca === "Lenovo");
      for (m of soloLenovo){
        $('#cont-general').append(
        `<div class="marca-Lenovo-cont estilo-cont">
          <img class="seccion-imgs" src="${m.img}">
          <p>${m.marca}</p>
          <p>$${m.precio}</p>
          <p>${m.resolucion}</p>
          <p>${m.tamaño}</p>
        </div>`);
      } 
    }else{
      $('.marca-Lenovo-cont').remove();
    }
  });

  $("#marca-Dell").on('click', function (){
    if ($('#marca-Dell').prop ("checked")){
      let soloDell = grupoMonitores.filter(Monitor => Monitor.marca === "Dell");
      for (m of soloDell){
        $('#cont-general').append(
        `<div class="marca-Dell-cont estilo-cont">
          <img class="seccion-imgs" src="${m.img}">
          <p>${m.marca}</p>
          <p>$${m.precio}</p>
          <p>${m.resolucion}</p>
          <p>${m.tamaño}</p>
        </div>`);
      } 
    }else{
      $('.marca-Dell-cont').remove();
    }
  });
