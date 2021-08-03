///////////////////
//FILTRO
///////////////////
$("#marca-Samsung").on('click', function (){
    if ($('#marca-Samsung').prop ("checked")){
      console.log('checked')
      let soloSamsung = grupoMonitores.filter(Monitor => Monitor.marca === "Samsung");
      for (m of soloSamsung){
        $('#monitores-cont-general').append(
        `<div class="marca-samsung-cont estilo-cont">
          <img class="seccion-imgs" src="${m.img}">
          <p>${m.marca}</p>
          <p>$${m.precio}</p>
          <p>${m.resolucion}</p>
          <p>${m.tamaño}</p>
        </div>`);
      } 
    }else{
      console.log('no checked');
      $('.marca-samsung-cont').remove();
    }
  });

  $("#marca-LG").on('click', function (){
    if ($('#marca-LG').prop ("checked")){
      console.log('checked')
      let soloLG = grupoMonitores.filter(Monitor => Monitor.marca === "LG");
      for (m of soloLG){
        $('#monitores-cont-general').append(
        `<div class="marca-LG-cont estilo-cont">
          <img class="seccion-imgs" src="${m.img}">
          <p>${m.marca}</p>
          <p>$${m.precio}</p>
          <p>${m.resolucion}</p>
          <p>${m.tamaño}</p>
        </div>`);
      } 
    }else{
      console.log('no checked');
      $('.marca-LG-cont').remove();
    }
  });

  $("#marca-Lenovo").on('click', function (){
    if ($('#marca-Lenovo').prop ("checked")){
      console.log('checked')
      let soloLenovo = grupoMonitores.filter(Monitor => Monitor.marca === "Lenovo");
      for (m of soloLenovo){
        $('#monitores-cont-general').append(
        `<div class="marca-Lenovo-cont estilo-cont">
          <img class="seccion-imgs" src="${m.img}">
          <p>${m.marca}</p>
          <p>$${m.precio}</p>
          <p>${m.resolucion}</p>
          <p>${m.tamaño}</p>
        </div>`);
      } 
    }else{
      console.log('no checked');
      $('.marca-Lenovo-cont').remove();
    }
  });