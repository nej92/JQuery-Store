///////////////////
//FILTRO MARCA
///////////////////
$("#marca-LenovoP11").on('click', function (){
    if ($('#marca-LenovoP11').prop ("checked")){
      let soloLenovoP11 = grupoTablet.filter(Tablet => Tablet.marca === "Lenovo P11");
      for (t of soloLenovoP11){
        $('#cont-general').append(
        `<div class="marca-LenovoP11-cont estilo-cont">
          <img class="seccion-imgs" src="${t.img}">
          <p class="marca">${t.marca}</p>
          <p class="precio">$${t.precio}</p>
          <p>${t.disco}</p>
          <p>${t.pantalla}</p>
          <p class="id-producto" id="${t.id}"><p>
          <button class="btn-carro-estilo agregar-carrito">Agregar al carrito</button>
        </div>`);
      } 
    }else{
      $('.marca-LenovoP11-cont').remove();
    }
  });

  $("#marca-YogaSmart").on('click', function (){
    if ($('#marca-YogaSmart').prop ("checked")){
      let soloYoga = grupoTablet.filter(Tablet => Tablet.marca === "Yoga Smart");
      for (t of soloYoga){
        $('#cont-general').append(
        `<div class="marca-YogaSmart-cont estilo-cont">
          <img class="seccion-imgs" src="${t.img}">
          <p class="marca">${t.marca}</p>
          <p class="precio">$${t.precio}</p>
          <p>${t.disco}</p>
          <p>${t.pantalla}</p>
          <p class="id-producto" id="${t.id}"><p>
          <button class="btn-carro-estilo agregar-carrito">Agregar al carrito</button>
        </div>`);
      } 
    }else{
      $('.marca-YogaSmart-cont').remove();
    }
  });

  $("#marca-LenovoM10").on('click', function (){
    if ($('#marca-LenovoM10').prop ("checked")){
      let soloLenovoM10 = grupoTablet.filter(Tablet => Tablet.marca === "Lenovo M10");
      for (t of soloLenovoM10){
        $('#cont-general').append(
        `<div class="marca-LenovoM10-cont estilo-cont">
          <img class="seccion-imgs" src="${t.img}">
          <p class="marca">${t.marca}</p>
          <p class="precio">$${t.precio}</p>
          <p>${t.disco}</p>
          <p>${t.pantalla}</p>
          <p class="id-producto" id="${t.id}"><p>
          <button class="btn-carro-estilo agregar-carrito">Agregar al carrito</button>
        </div>`);
      } 
    }else{
      $('.marca-LenovoM10-cont').remove();
    }
  });

  $("#marca-LenovoM8").on('click', function (){
    if ($('#marca-LenovoM8').prop ("checked")){
      let soloLenovoM8 = grupoTablet.filter(Tablet => Tablet.marca === "Lenovo M8");
      for (t of soloLenovoM8){
        $('#cont-general').append(
        `<div class="marca-LenovoM8-cont estilo-cont">
          <img class="seccion-imgs" src="${t.img}">
          <p class="marca">${t.marca}</p>
          <p class="precio">$${t.precio}</p>
          <p>${t.disco}</p>
          <p>${t.pantalla}</p>
          <p class="id-producto" id="${t.id}"><p>
          <button class="btn-carro-estilo agregar-carrito">Agregar al carrito</button>
        </div>`);
      } 
    }else{
      $('.marca-LenovoM8-cont').remove();
    }
  });
